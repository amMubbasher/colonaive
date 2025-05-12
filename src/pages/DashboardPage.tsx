import React from 'react';
import { Container } from '../components/ui/Container';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import {
  Shield,
  Stethoscope,
  TestTube,
  UserSearch,
  Activity,
  CalendarDays,
  Mail
} from 'lucide-react';

const DashboardPage: React.FC = () => {
  return (
    <div className="pt-20">
      <Container>
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">
            Welcome to Your CRC-Safe Dashboard!
          </h1>

          <Card className="mb-8 bg-gradient-to-r from-blue-50 to-teal-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h2 className="text-lg font-semibold mb-1">Your CRC-Safe Journey</h2>
                  <p className="text-gray-700">
                    From here, you can book screening tests, locate doctors,
                    and take informed action as part of Singapore’s national effort to outsmart colorectal cancer.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Link to="/education/patients/colonoscopy">
              <Card className="hover:shadow-lg transition">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <CalendarDays className="h-6 w-6 text-blue-700" />
                    <div>
                      <h3 className="font-semibold">Colonoscopy (Gold Standard)</h3>
                      <p className="text-sm text-gray-600">Book or learn about colonoscopy for early detection and treatment.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/education/patients/blood-test-screening">
              <Card className="hover:shadow-lg transition">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <TestTube className="h-6 w-6 text-indigo-600" />
                    <div>
                      <h3 className="font-semibold">Screening Blood Test</h3>
                      <p className="text-sm text-gray-600">HSA-cleared blood-based screening test is for individuals not due for colonoscopy and younger individuals with elevated risk of early-onset CRC for early triage to colonoscopy.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/find-gp">
              <Card className="hover:shadow-lg transition">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <Stethoscope className="h-6 w-6 text-green-700" />
                    <div>
                      <h3 className="font-semibold">Find a GP</h3>
                      <p className="text-sm text-gray-600">Locate a trusted GP clinic offering CRC screening near you.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/find-specialist">
              <Card className="hover:shadow-lg transition">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <UserSearch className="h-6 w-6 text-cyan-700" />
                    <div>
                      <h3 className="font-semibold">Find a Specialist</h3>
                      <p className="text-sm text-gray-600">Get expert guidance from a colorectal specialist.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/track-progress">
              <Card className="hover:shadow-lg transition">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <Activity className="h-6 w-6 text-purple-700" />
                    <div>
                      <h3 className="font-semibold">Track My Screening</h3>
                      <p className="text-sm text-gray-600">Check your past test status and follow-up reminders.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Need help? Our Champion Support Team is here for you.</p>
            <div className="flex justify-center gap-4">
              <Link to="/">
                <Button variant="secondary">Return to Home</Button>
              </Link>
              <a href="mailto:support@colonaive.org">
                <Button variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DashboardPage;
