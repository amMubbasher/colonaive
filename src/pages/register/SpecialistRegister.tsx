import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/ui/Container';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { 
  Stethoscope, 
  Building2, 
  Clock, 
  Languages, 
  Shield, 
  Save,
  ArrowRight,
  AlertCircle
} from 'lucide-react';

const SPECIALTIES = [
  'Colorectal Surgery',
  'Gastroenterology',
  'Internal Medicine',
  'Oncology',
  'Hepatology'
];

const SERVICES = [
  'IBS Management',
  'Hemorrhoidectomy',
  'GI Bleeding Management',
  'Polyp Removal',
  'IBD Care',
  'CRC Screening Consultation'
];

const SpecialistRegister: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    medicalRegNo: '',
    email: '',
    phone: '',
    clinic: '',
    otherSpecialty: '',
    specialties: [] as string[],
    services: [] as string[],
    otherServices: '',
    offersColonoscopy: false,
    languages: '',
    operatingHours: {
      weekdays: '',
      saturday: '',
      sunday: '',
      publicHoliday: ''
    },
    insurancePanels: '',
    notes: ''
  });

  const [isDraft, setIsDraft] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name.startsWith('operatingHours.')) {
      const key = name.split('.')[1];
      setForm(prev => ({
        ...prev,
        operatingHours: {
          ...prev.operatingHours,
          [key]: value
        }
      }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleCheckboxChange = (type: 'specialties' | 'services', item: string) => {
    setForm(prev => ({
      ...prev,
      [type]: prev[type].includes(item)
        ? prev[type].filter(i => i !== item)
        : [...prev[type], item]
    }));
  };

  const handleSubmit = (e: React.FormEvent, asDraft: boolean = false) => {
    e.preventDefault();
    setIsDraft(asDraft);
    
    if (asDraft) {
      localStorage.setItem('specialistRegistrationDraft', JSON.stringify(form));
      alert('Draft saved successfully');
    } else {
      navigate('/register/thank-you');
    }
  };

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Specialist Registration</h1>
            <p className="text-xl mb-0">
              Join our network of trusted specialists in Singapore's fight against colorectal cancer.
            </p>
          </div>
        </Container>
      </div>

      <Container>
        <div className="max-w-3xl mx-auto py-12">
          <Card>
            <CardContent className="p-8">
              <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <h2 className="text-xl font-bold">Personal Information</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={form.fullName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Medical Registration Number
                      </label>
                      <input
                        type="text"
                        name="medicalRegNo"
                        required
                        value={form.medicalRegNo}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          +65
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-none rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Practice Information */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Building2 className="h-5 w-5 text-blue-600" />
                    <h2 className="text-xl font-bold">Practice Information</h2>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Clinic/Hospital Affiliation
                    </label>
                    <input
                      type="text"
                      name="clinic"
                      value={form.clinic}
                      onChange={handleChange}
                      placeholder="Enter clinic name or select from suggestions..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Specialties */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Stethoscope className="h-5 w-5 text-blue-600" />
                    <h2 className="text-xl font-bold">Specialties & Services</h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Select Your Specialties
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {SPECIALTIES.map((specialty) => (
                          <label
                            key={specialty}
                            className={`relative flex cursor-pointer rounded-lg border p-4 focus:outline-none ${
                              form.specialties.includes(specialty)
                                ? 'border-blue-600 bg-blue-50'
                                : 'border-gray-200'
                            }`}
                          >
                            <input
                              type="checkbox"
                              className="sr-only"
                              checked={form.specialties.includes(specialty)}
                              onChange={() => handleCheckboxChange('specialties', specialty)}
                            />
                            <span className="flex items-center text-sm">
                              {specialty}
                            </span>
                          </label>
                        ))}
                        <div className="col-span-2">
                          <input
                            type="text"
                            name="otherSpecialty"
                            value={form.otherSpecialty}
                            onChange={handleChange}
                            placeholder="Other specialty (if applicable)"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Services Offered
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {SERVICES.map((service) => (
                          <label
                            key={service}
                            className={`relative flex cursor-pointer rounded-lg border p-4 focus:outline-none ${
                              form.services.includes(service)
                                ? 'border-blue-600 bg-blue-50'
                                : 'border-gray-200'
                            }`}
                          >
                            <input
                              type="checkbox"
                              className="sr-only"
                              checked={form.services.includes(service)}
                              onChange={() => handleCheckboxChange('services', service)}
                            />
                            <span className="flex items-center text-sm">
                              {service}
                            </span>
                          </label>
                        ))}
                        <div className="col-span-2">
                          <input
                            type="text"
                            name="otherServices"
                            value={form.otherServices}
                            onChange={handleChange}
                            placeholder="Other services (if applicable)"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={form.offersColonoscopy}
                          onChange={(e) => setForm(prev => ({ ...prev, offersColonoscopy: e.target.checked }))}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        <span className="ml-3 text-sm font-medium text-gray-700">
                          I offer colonoscopy services
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Languages className="h-5 w-5 text-blue-600" />
                    <h2 className="text-xl font-bold">Languages</h2>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Languages Spoken
                    </label>
                    <input
                      type="text"
                      name="languages"
                      value={form.languages}
                      onChange={handleChange}
                      placeholder="E.g., English, Mandarin, Malay"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Operating Hours */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <h2 className="text-xl font-bold">Operating Hours</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Weekdays
                      </label>
                      <input
                        type="text"
                        name="operatingHours.weekdays"
                        value={form.operatingHours.weekdays}
                        onChange={handleChange}
                        placeholder="E.g., 9:00 AM - 6:00 PM"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Saturday
                      </label>
                      <input
                        type="text"
                        name="operatingHours.saturday"
                        value={form.operatingHours.saturday}
                        onChange={handleChange}
                        placeholder="E.g., 9:00 AM - 1:00 PM"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Sunday
                      </label>
                      <input
                        type="text"
                        name="operatingHours.sunday"
                        value={form.operatingHours.sunday}
                        onChange={handleChange}
                        placeholder="E.g., Closed"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Public Holiday
                      </label>
                      <input
                        type="text"
                        name="operatingHours.publicHoliday"
                        value={form.operatingHours.publicHoliday}
                        onChange={handleChange}
                        placeholder="E.g., Closed"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <AlertCircle className="h-5 w-5 text-blue-600" />
                    <h2 className="text-xl font-bold">Additional Information</h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Insurance Panels
                      </label>
                      <textarea
                        name="insurancePanels"
                        rows={3}
                        value={form.insurancePanels}
                        onChange={handleChange}
                        placeholder="List major insurance panels you're on"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Notes
                      </label>
                      <textarea
                        name="notes"
                        rows={4}
                        value={form.notes}
                        onChange={handleChange}
                        placeholder="Any additional information you'd like to share"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row justify-end gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={(e) => handleSubmit(e, true)}
                      className="group"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save as Draft
                    </Button>
                    <Button
                      type="submit"
                      className="group"
                    >
                      Submit Registration
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default SpecialistRegister;