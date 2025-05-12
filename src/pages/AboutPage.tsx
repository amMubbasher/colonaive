import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Award, Activity, Users, Building2, Building, BookOpen } from 'lucide-react';

const AboutPage: React.FC = () => {
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

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Movement</h2>
            <p className="text-xl text-gray-600 mb-8">
              Together, we can eliminate colorectal cancer as a major health threat in Singapore by 2035.
            </p>
            <div className="space-x-4">
              <Link to="/join-the-movement">
                <Button variant="primary">Join as a Champion</Button>
              </Link>
              <Link to="/vision2035">
                <Button variant="outline">Learn About Our Vision</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;