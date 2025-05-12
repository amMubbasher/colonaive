import React from 'react';
import { Container } from '../components/ui/Container';
import { Card, CardContent } from '../components/ui/Card';
import { Link } from 'react-router-dom';
import { Building2, Users, Heart } from 'lucide-react';

const CSRShowcasePage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Corporate Champions</h1>
            <p className="text-xl mb-6">
              Recognizing organizations that lead Singapore's fight against colorectal cancer through their commitment to screening and prevention.
            </p>
            <Link to="/register/corporate">
              <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-md shadow hover:bg-blue-50 transition">
                Become a Corporate Champion →
              </button>
            </Link>
          </div>
        </Container>
      </div>

      {/* CSR Sample Showcase */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Your Brand Here — Join the National Fight Against CRC</h2>
            <p className="text-lg text-gray-600">
              This is a preview of how your CSR contribution will be proudly showcased.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Diamond Tier */}
            <Card className="border-t-4 border-blue-600">
              <CardContent className="p-8 text-center">
                <Building2 className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold">💎 Company A</h3>
                <p className="text-sm text-gray-500 mb-4">Diamond Tier</p>
                <p className="text-gray-700 mb-4">
                  Leading the charge in community health and workplace wellness.
                </p>
                <a className="text-sm text-blue-600 underline cursor-pointer">
                  Your CSR Impact Highlight
                </a>
              </CardContent>
            </Card>

            {/* Platinum Tier */}
            <Card className="border-t-4 border-teal-500">
              <CardContent className="p-8 text-center">
                <Users className="mx-auto h-12 w-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold">🥈 Company B</h3>
                <p className="text-sm text-gray-500 mb-4">Platinum Tier</p>
                <p className="text-gray-700 mb-4">
                  Expanding equitable access to preventive health services.
                </p>
                <a className="text-sm text-blue-600 underline cursor-pointer">
                  Your CSR Outreach Event Highlight
                </a>
              </CardContent>
            </Card>

            {/* Gold Tier */}
            <Card className="border-t-4 border-yellow-500">
              <CardContent className="p-8 text-center">
                <Heart className="mx-auto h-12 w-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-semibold">🥉 Company C</h3>
                <p className="text-sm text-gray-500 mb-4">Gold Tier</p>
                <p className="text-gray-700 mb-4">
                  Driving awareness and screenings through strategic CSR.
                </p>
                <a className="text-sm text-blue-600 underline cursor-pointer">
                  Your Employee Engagement Highlight
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Disclaimer */}
          <p className="mt-12 text-xs text-center text-gray-400 max-w-3xl mx-auto">
            *This is a sample layout. Names, logos, and statistics are for illustration purposes only and do not represent actual sponsors.
          </p>
        </Container>
      </section>
    </div>
  );
};

export default CSRShowcasePage;
