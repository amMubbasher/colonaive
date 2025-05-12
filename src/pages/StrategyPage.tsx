import React from 'react';
import { Container } from '../components/ui/Container';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Target, LineChart as ChartLineUp, Heart, BrainCircuit, ArrowRight } from 'lucide-react';

const StrategyPage: React.FC = () => {
  const impactGoals = [
    {
      icon: <Target className="h-16 w-16 text-blue-600" />,
      stat: '70%',
      label: 'Screening Uptake by 2030',
      description: 'Achieving widespread participation in regular colorectal cancer screening.'
    },
    {
      icon: <ChartLineUp className="h-16 w-16 text-teal-600" />,
      stat: '50%',
      label: 'Reduction in Late-Stage CRC Diagnoses',
      description: 'Dramatically reducing advanced-stage colorectal cancer through early detection.'
    },
    {
      icon: <Heart className="h-16 w-16 text-red-600" />,
      stat: '↓',
      label: 'Significant CRC Mortality Reduction by 2035',
      description: 'Saving lives through prevention and early intervention.'
    },
    {
      icon: <BrainCircuit className="h-16 w-16 text-purple-600" />,
      stat: '100%',
      label: 'Universal CRC Risk Awareness',
      description: 'Ensuring every Singaporean understands the importance of screening.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              Our 10-Year National Vision — RID-CRC by 2035
            </h1>
            <p className="text-xl mb-6">
              Accelerating the fight against colorectal cancer with innovative screening and early detection.
            </p>
          </div>
        </Container>
      </div>

      {/* Vision Statement */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Inspired by Kaiser Permanente's 20-year success in reducing colorectal cancer mortality,
                <strong> Project COLONAiVE™ is accelerating the fight</strong> with a 10-year target to eliminate CRC as a major threat in Singapore.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Armed with a <strong>high-sensitivity, HSA-cleared blood-based screening test</strong>, and backed by the
                <strong> gold-standard diagnostic and early treatment power of colonoscopy</strong>,
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                <strong>We are launching a double-barrelled gun</strong> with an effective national screening strategy to detect and triage early-stage colorectal cancer patients
                for timely colonoscopy and begin treatment early to <em>"Nip it in the Butt!"</em>
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Impact Goals */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Milestones We Aim to Achieve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable goals that will mark our progress in the fight against colorectal cancer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactGoals.map((goal, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {goal.icon}
                  </div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {goal.stat}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{goal.label}</h3>
                  <p className="text-gray-600 text-sm">{goal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Be Part of Our Vision
            </h2>
            <p className="text-xl mb-8">
              Join Singapore's national initiative to eliminate colorectal cancer as a major health threat by 2035.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/join-the-movement">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto group">
                  Join the Movement
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/choose-screening">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
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

export default StrategyPage;