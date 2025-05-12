import React, { useEffect, useState, useRef } from 'react';
import { X } from 'lucide-react';

const mockEvents = [
  { title: 'GP Webinar – CRC Triage', date: '7 May 2025, 7:00PM', url: '#' },
  { title: 'New Patient Guide: CRC Symptoms', date: '2 May 2025', url: '#' },
  { title: 'Colonoscopy Spotlight: Prof. Eu', date: '30 April 2025', url: '#' },
  { title: 'Understanding Polyps: Early Warning Signs', date: '28 April 2025', url: '#' },
  { title: 'Nurses CRC Refresher Workshop', date: '27 April 2025', url: '#' },
  { title: 'SGH GI Conference', date: '25 April 2025', url: '#' },
  { title: 'Public Forum: CRC Prevention', date: '24 April 2025', url: '#' },
  { title: 'Launch: CRC Early-Onset Campaign', date: '23 April 2025', url: '#' },
  { title: 'Primary Care Update: CRC Toolkit', date: '22 April 2025', url: '#' },
  { title: 'ColonAiQ x Innoquest Launch', date: '21 April 2025', url: '#' },
  { title: 'Colorectal Innovation Day', date: '19 April 2025', url: '#' },
  { title: 'Employer CRC Awareness Day', date: '18 April 2025', url: '#' },
  { title: 'Family Health Week', date: '17 April 2025', url: '#' },
  { title: 'AI in Diagnostics Roundtable', date: '15 April 2025', url: '#' },
  { title: 'CRC Community Leader Briefing', date: '12 April 2025', url: '#' },
];

export const UpcomingEventsPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const scrollListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // Show after 5s
    return () => clearTimeout(timer);
  }, []);

  const topTenEvents = mockEvents.slice(0, 10);

  if (!isVisible && !isMinimized) return null;

  return (
    <>
      {isVisible && !isMinimized && (
        <div className="fixed bottom-6 right-6 w-[320px] bg-white shadow-xl rounded-lg border border-gray-300 z-50">
          <div className="flex justify-between items-center px-4 py-2 bg-teal-700 text-white rounded-t-lg">
            <h4 className="text-sm font-semibold">📅 Upcoming Events & Updates</h4>
            <button onClick={() => {
              setIsMinimized(true);
              setIsVisible(false);
            }}>
              <X className="h-4 w-4 text-white hover:text-red-300" />
            </button>
          </div>

          {/* Scrolling List */}
          <div
            className="h-[160px] overflow-hidden relative"
            onMouseEnter={() => {
              if (scrollListRef.current) {
                scrollListRef.current.style.animationPlayState = 'paused';
              }
            }}
            onMouseLeave={() => {
              if (scrollListRef.current) {
                scrollListRef.current.style.animationPlayState = 'running';
              }
            }}
          >
            <div
              ref={scrollListRef}
              id="scroll-list"
              className="animate-scroll-up space-y-2 px-4 py-2"
              style={{ height: 'max-content' }}
            >
              {[...topTenEvents, ...topTenEvents].map((event, index) => (
                <a href={event.url} key={index} className="block text-sm text-blue-700 hover:underline">
                  <strong>{event.title}</strong><br />
                  <span className="text-gray-600 text-xs">{event.date}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="px-4 py-2 border-t text-right">
            <a href="/upcoming-events" className="text-sm text-blue-600 hover:underline">
              View All Events →
            </a>
          </div>
        </div>
      )}

      {/* Minimized Button */}
      {isMinimized && (
        <button
          className="fixed bottom-6 right-6 bg-[#004F8C] text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 z-50"
          onClick={() => {
            setIsMinimized(false);
            setIsVisible(true);
          }}
        >
          📅 Events
        </button>
      )}
    </>
  );
};
