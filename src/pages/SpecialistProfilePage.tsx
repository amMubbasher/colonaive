import React from 'react';
import { Container } from '../components/ui/Container';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  MapPin, 
  Phone, 
  Stethoscope, 
  CalendarCheck, 
  HeartPulse,
  Mail,
  Globe,
  Languages,
  Shield,
  ArrowRight,
  Clock,
  Building2
} from 'lucide-react';

const SpecialistProfilePage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="h-8 w-8" />
              <div>
                <h1 className="text-3xl font-bold">Dr. Suzie Lim</h1>
                <p className="text-xl">Colorectal Surgeon – MBBS, FRCS, FAMS</p>
              </div>
            </div>
            <p className="text-xl mb-6">Mount Elizabeth Novena Hospital</p>
            <div className="flex gap-4">
              <Button variant="secondary">Book Consultation</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Contact Office
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          {/* Main Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Location</h3>
                    <p className="text-gray-600">38 Irrawaddy Road</p>
                    <p className="text-gray-600">#08-45</p>
                    <p className="text-gray-600">Mount Elizabeth Novena Specialist Centre</p>
                    <p className="text-gray-600">Singapore 329563</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Consultation Hours</h3>
                    <p className="text-gray-600">Mon–Fri: 9am – 5pm</p>
                    <p className="text-gray-600">Sat: 9am – 12pm</p>
                    <p className="text-gray-600">Sun & PH: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Contact</h3>
                    <p className="text-gray-600">+65 6555 7777</p>
                    <a href="mailto:appointments@drlim.sg" className="text-blue-600 hover:underline">
                      appointments@drlim.sg
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Professional Profile */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                  <HeartPulse className="h-12 w-12 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Professional Background</h2>
                  <p className="text-gray-600 mb-4">
                    Dr. Suzie Lim is an experienced colorectal surgeon with over 18 years of clinical experience
                    in gastrointestinal health, preventive care, and minimally invasive treatments.
                    She is a strong advocate for early detection and patient empowerment.
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <Languages className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-600">English, Mandarin, Hokkien</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-600">Member of Singapore Society of Colorectal Surgeons</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Specialties Section */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Stethoscope className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl font-bold">Areas of Expertise</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Colonoscopy & CRC Screening',
                  'IBS & Constipation Management',
                  'Hemorrhoidectomy & Anal Disorders',
                  'Polyp Detection & Removal',
                  'Minimally Invasive Surgery',
                  'Advanced Endoscopy'
                ].map((specialty, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <Shield className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">{specialty}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Insurance & Appointments */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="h-5 w-5 text-blue-600" />
                  <h2 className="text-lg font-semibold">Insurance Panels</h2>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Integrated Shield Plans (All insurers)</li>
                  <li>• AIA</li>
                  <li>• Prudential</li>
                  <li>• Great Eastern</li>
                  <li>• Medisave-accredited procedures</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CalendarCheck className="h-5 w-5 text-blue-600" />
                  <h2 className="text-lg font-semibold">Next Available</h2>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 text-green-700 rounded-lg">
                    Consultation: Within 1 week
                  </div>
                  <div className="p-3 bg-blue-50 text-blue-700 rounded-lg">
                    Colonoscopy: Within 2 weeks
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-blue-50 to-teal-50 border-none">
            <CardContent className="p-8">
              <div className="text-center max-w-2xl mx-auto">
                <CalendarCheck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">Ready to Take the Next Step?</h2>
                <p className="text-gray-700 mb-6">
                  Book your consultation with Dr. Lim and take control of your colorectal health today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="group">
                    Book Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="outline">
                    Learn About Procedures
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default SpecialistProfilePage;