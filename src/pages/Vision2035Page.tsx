import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Target, LineChart as ChartLineUp, Heart, BrainCircuit } from 'lucide-react';

const Vision2045Page: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our 10-Year National Vision — RID-CRC by 2035
            </h1>
            <p className="text-xl md:text-2xl">
              Project COLONAiVE™ is accelerating the fight with a 10-year target to eliminate colorectal cancer as a major public health threat in Singapore.
            </p>
          </div>
        </Container>
      </div>

      {/* Strategy Description */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-left space-y-6 text-gray-700 text-lg">
            <p>
              Inspired by Kaiser Permanente's 20-year success in reducing CRC mortality, COLONAiVE™ aims to go further — and faster. By 2035, we envision a Singapore where colorectal cancer is no longer a leading cause of death.
            </p>
            <p>
              Armed with a <strong>high-sensitivity, HSA-cleared blood-based screening test</strong> and backed by the <strong>gold-standard diagnostic and early treatment power of colonoscopy</strong>, we are launching a <strong>double-barrelled gun</strong>:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Enable early detection with a modern, non-invasive tool.</li>
              <li>Ensure timely follow-up with colonoscopy for definitive diagnosis and polyp removal.</li>
            </ul>
            <p>
              This bold strategy is designed to <strong>double screening uptake within 5 years</strong>, drastically reduce late-stage diagnoses, and save thousands of lives. In short: we're going to <em>"Nip it in the Butt!"</em>
            </p>
            <p className="text-blue-700 font-medium text-center">
              This is the core mission of our COLONAiVE™ National Movement — <span className="underline">RID-CRC by 2035</span>.
            </p>
          </div>
        </Container>
      </section>

      {/* Key Milestones Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Milestones to Achieve by 2035</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable targets that define our progress in outsmarting colorectal cancer nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Target className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-blue-600 mb-2">80%</div>
                <h3 className="text-lg font-semibold mb-2">Screening Uptake</h3>
                <p className="text-gray-600 text-sm">
                  National screening participation doubled by 2030.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <ChartLineUp className="h-16 w-16 text-teal-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-teal-600 mb-2">50%</div>
                <h3 className="text-lg font-semibold mb-2">Late-Stage CRC Drop</h3>
                <p className="text-gray-600 text-sm">
                  Reduced Stage III/IV CRC diagnoses through early triage and timely colonoscopy.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Heart className="h-16 w-16 text-red-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-red-600 mb-2">80%</div>
                <h3 className="text-lg font-semibold mb-2">Mortality Reduction</h3>
                <p className="text-gray-600 text-sm">
                  Lives saved by reducing CRC-related deaths through early detection and timely curative treatment.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <BrainCircuit className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                <h3 className="text-lg font-semibold mb-2">Public Awareness</h3>
                <p className="text-gray-600 text-sm">
                  Every Singaporean knows that early screening can save lives.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Outsmart Colorectal Cancer — Together.
            </h2>
            <p className="text-xl mb-8">
              Be part of Singapore's national effort to eliminate colorectal cancer through awareness, action, and access.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/join-the-movement">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Join the Movement
                </Button>
              </Link>
              <Link to="/choose-screening">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Get Screened
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Vision2045Page;