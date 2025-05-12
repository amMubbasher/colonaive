import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChampionStore } from '../../store/championStore';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { findCorrection, generateCorrectionMessage } from '../../utils/fuzzyMatch';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  links?: { text: string; url: string }[];
  awaitingResponse?: boolean;
  awaitingCorrection?: boolean;
  awaitingDoctorChoice?: boolean;
  correction?: {
    original: string;
    corrected: string;
  };
}

const initialMessages = [
  {
    id: '1',
    text: 'Hi Champion! How can we support you today?',
    sender: 'bot' as const
  }
];

const symptomKeywords = ['bleeding', 'blood', 'constipation', 'pain', 'piles'];
const emergencyKeywords = ['everyday bleeding', 'sudden weight loss', 'severe', 'daily bleeding'];

const generateSymptomFollowUpQuestion = (symptom: string) => {
  return `I'm sorry to hear that, Champion. Has the ${symptom} been ongoing for several days or was it a one-time occurrence?`;
};

const persistentSymptomResponse = `Champion, persistent symptoms deserve timely evaluation.
Please consult your GP or a colorectal specialist to ensure early care.`;

const minorSymptomResponse = `Thank you, Champion. Sometimes minor causes like hemorrhoids may cause such symptoms.
Still, it's always safer to mention it to your GP for peace of mind.`;

const screeningResponse = `Screening saves lives, Champion!
Blood-based CRC screening — like CE IVDD, China NMPA, and Singapore HSA cleared ColonAiQ® — helps identify high-risk individuals early and refer them for timely colonoscopy and early polyp removal.`;

const bloodTestResponse = `ColonAiQ® is currently available in CE IVDD certified regions, China (NMPA approved), and Singapore (HSA cleared).
Patients from neighboring countries are welcome to access testing in Singapore.`;

const emergencyResponse = `Champion, for your safety, please urgently consult a GP or colorectal specialist.
This chatbot provides general educational information and cannot replace professional medical advice.`;

const followUpPrompt = `Champion, you've shown great courage by sharing your concerns. 🌟
As a next step, would you like help finding a GP for screening or scheduling a specialist consultation?`;

const positiveFollowUpResponse = `You're making a Champion's choice toward protecting your health. 🛡️
Let's guide you to the right place!`;

const declineFollowUpResponse = `That's perfectly okay, Champion. If you need us anytime, we're here for you. 💬`;

const closingMessage = `Stay strong, Champion!
Your courage powers our movement to outsmart CRC together.`;

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [showPrivacyNote, setShowPrivacyNote] = useState(true);
  const [awaitingSymptomDuration, setAwaitingSymptomDuration] = useState(false);
  const [awaitingCorrectionConfirmation, setAwaitingCorrectionConfirmation] = useState(false);
  const [currentSymptom, setCurrentSymptom] = useState<string>('');
  const [pendingCorrection, setPendingCorrection] = useState<{ original: string; corrected: string } | null>(null);
  const [messageCount, setMessageCount] = useState(0);
  const [followUpOffered, setFollowUpOffered] = useState(false);
  const [lastUserActivity, setLastUserActivity] = useState(Date.now());
  const [sessionActive, setSessionActive] = useState(true);
  const [timeoutMessageSent, setTimeoutMessageSent] = useState(false);
  const [finalTimeoutMessageSent, setFinalTimeoutMessageSent] = useState(false);
  const [awaitingDoctorChoice, setAwaitingDoctorChoice] = useState(false);
  const [doctorChoiceTimeout, setDoctorChoiceTimeout] = useState<NodeJS.Timeout>();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const finalTimeoutRef = useRef<NodeJS.Timeout>();
  const { firstName } = useChampionStore();

  const resetActivityTimer = () => {
    setLastUserActivity(Date.now());
    setTimeoutMessageSent(false);
    setFinalTimeoutMessageSent(false);
    setSessionActive(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (finalTimeoutRef.current) {
      clearTimeout(finalTimeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      if (!timeoutMessageSent) {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          text: "Hi Champion, just checking in 🌟 — If you're still around and have any more questions or need guidance, I'm here to support you.",
          sender: 'bot'
        }]);
        setTimeoutMessageSent(true);
      }
    }, 3 * 60 * 1000);

    finalTimeoutRef.current = setTimeout(() => {
      if (!finalTimeoutMessageSent) {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          text: "Champion, no worries if you had to step away. 🕊️\nRemember, you can always return whenever you're ready.\nStay strong and stay safe!",
          sender: 'bot'
        }]);
        setFinalTimeoutMessageSent(true);
        setSessionActive(false);
      }
    }, 6 * 60 * 1000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (finalTimeoutRef.current) {
        clearTimeout(finalTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      resetActivityTimer();
    }
  }, [isOpen, input]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && firstName && messages.length === 1) {
      setMessages([
        {
          id: '1',
          text: `Hi Champion ${firstName}! How can we support you today?`,
          sender: 'bot'
        }
      ]);
    }
  }, [isOpen, firstName]);

  const handleFollowUp = () => {
    if (messageCount >= 5 && !followUpOffered) {
      setFollowUpOffered(true);
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          text: followUpPrompt,
          sender: 'bot',
          links: [
            { text: 'Find a GP for Screening', url: '/find-gp' },
            { text: 'Book a Colonoscopy Consultation', url: '/find-specialist' }
          ]
        }]);
      }, 1000);
    }
  };

  const handleDoctorChoice = (hasDoctor: boolean) => {
    if (doctorChoiceTimeout) {
      clearTimeout(doctorChoiceTimeout);
    }

    setTimeout(() => {
      if (hasDoctor) {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          text: "That's wonderful, Champion. Please reach out to your trusted doctor for advice and screening — your journey is in good hands. 🕊️",
          sender: 'bot'
        }]);
      } else {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          text: "Of course, Champion! Let's guide you to a GP or specialist who can support your CRC screening journey. 🌟",
          sender: 'bot',
          links: [
            { text: 'Find a GP', url: '/clinics' },
            { text: 'Find a Specialist', url: '/clinics' }
          ]
        }]);
      }
    }, 1000);

    setAwaitingDoctorChoice(false);
  };

  const askAboutDoctor = () => {
    setAwaitingDoctorChoice(true);
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      text: "Champion, before I suggest anything, may I ask:\n\n🔵 Do you already have a trusted GP or family doctor you prefer to consult?\n\n🔵 Or a colorectal specialist or gastroenterologist you usually see?\n\nIf yes, it's always best to continue care with someone you already trust. 🛡️\n\nIf you don't have a doctor yet, I'm here to help you find a screening clinic or specialist you can trust.",
      sender: 'bot',
      awaitingDoctorChoice: true
    }]);

    const timeout = setTimeout(() => {
      if (awaitingDoctorChoice) {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          text: "Whenever you're ready, Champion — whether through your trusted doctor or a new recommendation, the most important thing is timely screening. 🛡️",
          sender: 'bot'
        }]);
      }
    }, 30000);

    setDoctorChoiceTimeout(timeout);
  };

  const handleSend = () => {
    if (!input.trim() || !sessionActive) return;

    resetActivityTimer();

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setMessageCount(prev => prev + 1);
    const lowerInput = input.toLowerCase();
    setInput('');

    if (followUpOffered) {
      const isPositive = lowerInput.includes('yes') || 
                        lowerInput.includes('okay') || 
                        lowerInput.includes('sure');
      
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          text: isPositive ? positiveFollowUpResponse : declineFollowUpResponse,
          sender: 'bot'
        }]);
      }, 1000);
      return;
    }

    if (awaitingCorrectionConfirmation && pendingCorrection) {
      const isConfirming = lowerInput.includes('yes') || lowerInput.includes('correct') || lowerInput.includes('right');
      
      if (isConfirming) {
        setAwaitingCorrectionConfirmation(false);
        setPendingCorrection(null);
        processUserInput(pendingCorrection.corrected);
      } else {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: Date.now().toString(),
            text: "I apologize for the confusion, Champion. Please feel free to rephrase your concern.",
            sender: 'bot'
          }]);
        }, 1000);
        setAwaitingCorrectionConfirmation(false);
        setPendingCorrection(null);
      }
      return;
    }

    const correction = findCorrection(lowerInput);
    if (correction) {
      setAwaitingCorrectionConfirmation(true);
      setPendingCorrection({
        original: lowerInput,
        corrected: correction.correction
      });
      
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          text: generateCorrectionMessage(correction),
          sender: 'bot',
          awaitingCorrection: true
        }]);
      }, 1000);
      return;
    }

    processUserInput(lowerInput);
    handleFollowUp();
  };

  const processUserInput = (input: string) => {
    if (awaitingDoctorChoice) {
      const isPositive = input.toLowerCase().includes('yes') || 
                        input.toLowerCase().includes('have') ||
                        input.toLowerCase().includes('own');
      handleDoctorChoice(isPositive);
      return;
    }

    if (emergencyKeywords.some(keyword => input.includes(keyword))) {
      askAboutDoctor();
      return;
    }

    if (awaitingSymptomDuration) {
      const isOngoing = input.includes('several') || 
                       input.includes('keeps') || 
                       input.includes('ongoing') ||
                       input.includes('days');

      setTimeout(() => {
        const response = isOngoing ? persistentSymptomResponse : minorSymptomResponse;
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          text: response,
          sender: 'bot',
          links: isOngoing ? [
            { text: 'Find a GP', url: '/clinics' },
            { text: 'Find a Specialist', url: '/clinics' }
          ] : undefined
        }]);

        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: Date.now().toString(),
            text: closingMessage,
            sender: 'bot'
          }]);
        }, 1500);
      }, 1000);

      setAwaitingSymptomDuration(false);
      setCurrentSymptom('');
      return;
    }

    const matchedSymptom = symptomKeywords.find(symptom => input.includes(symptom));
    if (matchedSymptom) {
      setAwaitingSymptomDuration(true);
      setCurrentSymptom(matchedSymptom);
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          text: generateSymptomFollowUpQuestion(matchedSymptom),
          sender: 'bot',
          awaitingResponse: true
        }]);
      }, 1000);
      return;
    }

    if (input.includes('screening') || input.includes('test')) {
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          text: screeningResponse,
          sender: 'bot',
          links: [
            { text: 'Learn About Screening', url: '/choose-screening' }
          ]
        }]);

        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: Date.now().toString(),
            text: closingMessage,
            sender: 'bot'
          }]);
        }, 1500);
      }, 1000);
      return;
    }

    if (input.includes('blood test') || input.includes('colonaiq')) {
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          text: bloodTestResponse,
          sender: 'bot',
          links: [
            { text: 'Learn About Screening Options', url: '/choose-screening' }
          ]
        }]);

        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: Date.now().toString(),
            text: closingMessage,
            sender: 'bot'
          }]);
        }, 1500);
      }, 1000);
      return;
    }

    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: "How can I assist you with colorectal cancer screening and prevention today, Champion?",
        sender: 'bot',
        links: [
          { text: 'Learn About Screening', url: '/choose-screening' },
          { text: 'Find a Clinic', url: '/clinics' },
          { text: 'About CRC', url: '/education/patients' }
        ]
      }]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col z-50"
          >
            <div className="p-4 bg-blue-600 text-white rounded-t-lg flex justify-between items-center">
              <h3 className="font-semibold">Chat with Us, Champion!</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <AnimatePresence>
              {showPrivacyNote && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-blue-50 p-4 text-sm text-blue-800"
                >
                  <p>This chatbot provides general educational information only. It is not a substitute for medical consultation. Please seek professional advice for medical concerns.</p>
                  <button
                    onClick={() => setShowPrivacyNote(false)}
                    className="text-blue-600 hover:text-blue-800 mt-2 text-sm font-medium"
                  >
                    Got it
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <div className="whitespace-pre-line">{message.text}</div>
                    {message.awaitingDoctorChoice && (
                      <div className="mt-3 space-y-2">
                        <button
                          onClick={() => handleDoctorChoice(true)}
                          className="w-full text-left px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                        >
                          I Have My Own Doctor
                        </button>
                        <button
                          onClick={() => handleDoctorChoice(false)}
                          className="w-full text-left px-3 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"
                        >
                          Help Me Find One
                        </button>
                      </div>
                    )}
                    {message.links && message.links.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {message.links.map((link, index) => (
                          <Link
                            key={index}
                            to={link.url}
                            className="block text-blue-600 hover:text-blue-800 font-medium text-sm"
                            onClick={() => setIsOpen(false)}
                          >
                            {link.text} →
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="px-4 py-2 bg-gray-50 text-xs text-gray-500 text-center border-t">
              Project COLONAiVE™ — Every step matters. Every life matters.
            </div>

            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    resetActivityTimer();
                  }}
                  onKeyPress={handleKeyPress}
                  placeholder={sessionActive ? "Type your message..." : "Chat session ended. Click the chat icon to start a new conversation."}
                  className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={!sessionActive}
                />
                <Button
                  onClick={handleSend}
                  className="px-4 py-2"
                  disabled={!input.trim() || !sessionActive}
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
              {!sessionActive && (
                <div className="text-center mt-2 text-sm text-gray-500">
                  Ready to continue anytime, Champion! 💬
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) {
            setSessionActive(true);
            setTimeoutMessageSent(false);
            setFinalTimeoutMessageSent(false);
            resetActivityTimer();
          }
        }}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageSquare className="h-6 w-6" />
      </motion.button>
    </>
  );
};