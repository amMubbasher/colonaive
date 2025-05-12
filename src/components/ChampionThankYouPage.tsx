import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from './ui/Card';
import { Button } from './ui/Button';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Container } from './ui/Container';

const ChampionThankYouPage: React.FC = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/');
  };

  return (
    <div className="pt-20">
      <Container>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              
              <h1 className="text-3xl font-bold text-green-600 mb-6">
                Thank You, Champion! 🎉
              </h1>
              
              <div className="space-y-6">
                <p className="text-xl text-gray-700">
                  Your request has been received and is in good hands.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-lg font-semibold mb-4">What happens next?</h2>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Our Champion Support Team will review your request
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      We'll contact you within 1 business day
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      You'll receive a confirmation email with next steps
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-blue-800">
                    Together, we are building a CRC-safe future. 
                    Your proactive step today brings us closer to our Vision 2035 goals.
                  </p>
                </div>

                <div className="pt-4">
                  <Button 
                    onClick={handleReturnHome}
                    className="flex items-center justify-center mx-auto"
                  >
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Return to Home
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default ChampionThankYouPage;