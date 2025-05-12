import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../../components/ui/Container';
import { Card, CardContent } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { FileText, TrendingUp, Users, BookOpen } from 'lucide-react';

export const ClinicianEducationHub: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Clinician Education Hub</h1>
            <p className="text-xl mb-0">
              Evidence-based resources and guidelines for healthcare professionals.
            </p>
          </div>
        </Container>
      </div>

      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link to="/education/clinicians/kaiser-crc-study">
                <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <TrendingUp className="h-6 w-6 text-blue-600 mr-3" />
                      <h2 className="text-xl font-bold">Kaiser Permanente CRC Study</h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Learn how a comprehensive screening program achieved 33% reduction in CRC incidence 
                      and 50% reduction in mortality.
                    </p>
                    <div className="text-blue-600 font-medium">Read More →</div>
                  </CardContent>
                </Card>
              </Link>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <FileText className="h-6 w-6 text-teal-600 mr-3" />
                    <h2 className="text-xl font-bold">Clinical Guidelines</h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Access the latest screening and management protocols.
                  </p>
                  <Button variant="outline" className="w-full">Coming Soon</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <Users className="h-6 w-6 text-purple-600 mr-3" />
                    <h2 className="text-xl font-bold">Patient Communication</h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Resources for discussing screening options with patients.
                  </p>
                  <Button variant="outline" className="w-full">Coming Soon</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <BookOpen className="h-6 w-6 text-green-600 mr-3" />
                    <h2 className="text-xl font-bold">CME Resources</h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Continuing medical education modules and materials.
                  </p>
                  <Button variant="outline" className="w-full">Coming Soon</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <div className="py-8 bg-gray-50">
        <Container>
          <div className="text-center">
            <Link to="/">
              <Button variant="secondary">Return to Home</Button>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ClinicianEducationHub;