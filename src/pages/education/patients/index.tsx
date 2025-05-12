import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../../components/ui/Container';
import { Card, CardContent } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';

const PatientEducationHub: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Patient Education Hub</h1>
            <p className="text-xl mb-0">
              Empowering you with knowledge about colorectal cancer prevention, screening, and early detection.
            </p>
          </div>
        </Container>
      </div>

      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              
              {/* UPDATED: Understanding Colorectal Cancer */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Understanding Colorectal Cancer</h2>
                  <p className="text-gray-600 mb-4">
                    Learn about colorectal cancer, its causes, and why early detection matters.
                  </p>
                  <Link to="/education/patients/colorectal-cancer">
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Early Symptoms */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Early Symptoms</h2>
                  <p className="text-gray-600 mb-4">
                    Recognize the warning signs and symptoms that shouldn't be ignored.
                  </p>
                  <Link to="/education/patients/early-symptoms-of-crc">
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Colonoscopy: The Gold Standard */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Colonoscopy: The Gold Standard</h2>
                  <p className="text-gray-600 mb-4">
                    Learn why colonoscopy remains the most effective tool for colorectal cancer prevention and how it saves lives.
                  </p>
                  <Link to="/education/patients/colonoscopy-gold-standard">
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* How CRC Develops from Polyps */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">How Colorectal Cancer Develops from Polyps</h2>
                  <p className="text-gray-600 mb-4">
                    Understand how most colorectal cancers begin as small benign polyps, and why early removal through screening can prevent cancer.
                  </p>
                  <Link to="/education/patients/how-crc-develops-from-polyps">
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
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

export default PatientEducationHub;
