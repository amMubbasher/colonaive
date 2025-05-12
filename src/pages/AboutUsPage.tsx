import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Award, Activity, Users, Building2, Building, BookOpen } from 'lucide-react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-xl mb-0">
              Learn about the founding vision, mission, and human spirit behind Project COLONAiVE™.
            </p>
          </div>
        </Container>
      </div>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              A Singapore where colorectal cancer is no longer a life-threatening disease, through screening and timely referral to colonoscopy for early detection and polyps removal and united national action.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To drive early detection of colorectal cancer across Singapore through education, empowerment, 
              and collaboration with clinicians, patients, institutions, and corporate partners.
            </p>
          </div>
        </Container>
      </section>

      {/* Founding Spirit Section */}
      <section className="py-16 bg-blue-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Award className="h-12 w-12 text-blue-600 mx-auto" />
              <h2 className="text-3xl font-bold mt-4">Our Founding Spirit</h2>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-800 leading-relaxed">
                  Project COLONAiVE™ was born not as a business venture, but as a national movement to outsmart 
                  colorectal cancer, save lives, and uplift every individual touched by this disease.
                </p>
                <p className="text-gray-800 leading-relaxed">
                  In this spirit, we recognize that every visitor to our platform — whether a healthy citizen, 
                  a pre-cancerous patient, a diagnosed survivor, a late-stage fighter, a caregiver, a medical 
                  professional, or a sponsor — carries within them an act of courage.
                </p>
                <p className="text-gray-800 leading-relaxed">
                  By taking one step toward awareness, education, or action, they embody the very essence of 
                  resilience and hope.
                </p>
                <p className="text-gray-800 leading-relaxed font-semibold">
                  Thus, from this day forward, every individual who steps into Project COLONAiVE™ shall be 
                  honored as a Champion.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Strategic Framework Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Strategic Framework</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Activity className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">RID-CRC PUB™</h3>
                      <p className="text-gray-600">Public Awareness and Early Detection Movement</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Users className="h-6 w-6 text-teal-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">RID-CRC SGP™</h3>
                      <p className="text-gray-600">Clinician Activation and GP Engagement</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Building2 className="h-6 w-6 text-indigo-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">RID-CRC GOV™</h3>
                      <p className="text-gray-600">Institutional and Policy Adoption Advocacy</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Building className="h-6 w-6 text-purple-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">RID-CRC CSR™</h3>
                      <p className="text-gray-600">Corporate CSR Collaboration</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <BookOpen className="h-6 w-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">RID-CRC EDU™</h3>
                      <p className="text-gray-600">Education Empowerment for Patients and Clinicians</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Advisory Team Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Meet Our Advisory Team</h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-xl text-gray-600 mb-6">
                  Our Medical and Strategic Advisory Board comprises leading experts in colorectal health, 
                  cancer prevention, and public health policy.
                </p>
                <Link to="/about/advisors">
                  <Button variant="primary" size="lg">
                    Meet Our Advisors
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Return Home Button */}
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

export default AboutUsPage;