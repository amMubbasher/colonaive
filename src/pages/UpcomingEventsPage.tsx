import React from 'react';
import { Container } from '../components/ui/Container';
import { Card, CardContent } from '../components/ui/Card';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const upcomingEvents = [
  { title: 'GP Webinar – CRC Triage', date: '7 May 2025', time: '7:00 PM', type: 'Virtual Event', description: 'Interactive session on CRC risk triage.' },
  { title: 'New Patient Guide: CRC Symptoms', date: '6 May 2025', type: 'Resource Update', description: 'Recognizing early CRC symptoms.' },
  { title: 'Colonoscopy Spotlight: Prof. Eu', date: '5 May 2025', type: 'Feature Article', description: 'Advancements in colonoscopy techniques.' },
  { title: 'Understanding Polyps: Early Warning Signs', date: '4 May 2025', type: 'Education', description: 'Know your risks. Early detection saves lives.' },
  { title: 'Nurses CRC Refresher Workshop', date: '3 May 2025', type: 'Training', description: 'Essential updates for nurse practitioners.' },
  { title: 'SGH GI Conference', date: '2 May 2025', type: 'Conference', description: 'Latest developments in GI diagnostics and treatment.' },
  { title: 'Public Forum: CRC Prevention', date: '1 May 2025', type: 'Public Event', description: 'Ask doctors, learn prevention strategies.' },
  { title: 'Launch: CRC Early-Onset Campaign', date: '30 April 2025', type: 'Campaign', description: 'Raising awareness for younger adults.' },
  { title: 'Primary Care Update: CRC Toolkit', date: '29 April 2025', type: 'Primary Care', description: 'Updated tools for GPs handling CRC cases.' },
  { title: 'ColonAiQ x Innoquest Launch', date: '28 April 2025', type: 'Launch Event', description: 'Singapore’s first HSA-cleared CRC blood test.' },
  { title: 'Colorectal Innovation Day', date: '27 April 2025', type: 'Innovation Fair', description: 'Tech and tools transforming colorectal screening.' },
  { title: 'SMC Ethics Talk – CRC Screening', date: '26 April 2025', type: 'CME Webinar', description: 'Balancing benefits, harms, and ethics in screening.' },
  { title: 'Prevention in Primary Care Series', date: '25 April 2025', type: 'Seminar', description: 'Empowering GPs for CRC frontline action.' },
  { title: 'CRC Diagnostic Pathways Launch', date: '24 April 2025', type: 'Health Policy', description: 'MOH’s new structured CRC diagnostic protocol.' },
  { title: 'Regional Oncology Summit', date: '23 April 2025', type: 'Summit', description: 'Cross-border insights on GI oncology advances.' }
];

const UpcomingEventsPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Upcoming Events & Updates</h1>
            <p className="text-xl mb-0">
              Stay informed about the latest events, resources, and updates in our movement against colorectal cancer.
            </p>
          </div>
        </Container>
      </div>

      <Container>
        <div className="max-w-4xl mx-auto py-12 grid gap-6">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="md:w-32 flex-shrink-0 text-center p-3 bg-blue-50 rounded-lg">
                    <Calendar className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-blue-600">{event.date}</div>
                    {event.time && <div className="text-xs text-blue-500 mt-1">{event.time}</div>}
                  </div>
                  <div className="flex-grow">
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded">{event.type}</span>
                    <h2 className="text-xl font-bold mt-2 mb-1">{event.title}</h2>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-medium">
                      Learn More <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default UpcomingEventsPage;
