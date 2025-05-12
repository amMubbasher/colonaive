import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Building2, Phone, Mail, MapPin, Globe, Languages, Stethoscope } from 'lucide-react';

const ClinicRegistrationPage: React.FC = () => {
  const [form, setForm] = useState({
    doctorName: '',
    clinicName: '',
    registrationNumber: '',
    address: '',
    postalCode: '',
    region: '',
    phone: '',
    email: '',
    website: '',
    screeningAvailable: 'Yes',
    languagesSpoken: '',
    screeningServices: [] as string[],
    operatingHours: {
      weekdays: '',
      saturday: '',
      sunday: '',
      publicHoliday: ''
    }
  });

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

  const handleScreeningServiceChange = (service: string) => {
    setForm(prev => ({
      ...prev,
      screeningServices: prev.screeningServices.includes(service)
        ? prev.screeningServices.filter(s => s !== service)
        : [...prev.screeningServices, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Clinic registered:', form);
    // Show success message and redirect
  };

  const screeningServiceOptions = [
    'ColonAiQ® Blood Test',
    'FIT Test',
    'Colonoscopy Referral',
    'Pre-Colonoscopy Consultation',
    'General Health Screening'
  ];

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Register Your Clinic</h1>
            <p className="text-xl mb-0">
              Join our network of trusted healthcare providers in Singapore's fight against colorectal cancer.
            </p>
          </div>
        </Container>
      </div>

      <Container>
        <div className="max-w-3xl mx-auto py-12">
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Clinic Information Section */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Building2 className="h-5 w-5 text-blue-600" />
                    <h2 className="text-xl font-bold">Clinic Information</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Doctor's Full Name
                      </label>
                      <input
                        type="text"
                        name="doctorName"
                        required
                        value={form.doctorName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Clinic Name
                      </label>
                      <input
                        type="text"
                        name="clinicName"
                        required
                        value={form.clinicName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Clinic Registration Number
                    </label>
                    <input
                      type="text"
                      name="registrationNumber"
                      required
                      value={form.registrationNumber}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Contact Information Section */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <h2 className="text-xl font-bold">Contact Information</h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Clinic Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        required
                        value={form.address}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Postal Code
                        </label>
                        <input
                          type="text"
                          name="postalCode"
                          required
                          value={form.postalCode}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Region
                        </label>
                        <select
                          name="region"
                          required
                          value={form.region}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Select region</option>
                          <option value="North">North</option>
                          <option value="South">South</option>
                          <option value="East">East</option>
                          <option value="West">West</option>
                          <option value="Central">Central</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Website (Optional)
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={form.website}
                        onChange={handleChange}
                        placeholder="https://"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Services Section */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Stethoscope className="h-5 w-5 text-blue-600" />
                    <h2 className="text-xl font-bold">Screening Services</h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Available Screening Services
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {screeningServiceOptions.map((service) => (
                          <label
                            key={service}
                            className={`relative flex cursor-pointer rounded-lg border p-4 focus:outline-none ${
                              form.screeningServices.includes(service)
                                ? 'border-blue-600 bg-blue-50'
                                : 'border-gray-200'
                            }`}
                          >
                            <input
                              type="checkbox"
                              className="sr-only"
                              checked={form.screeningServices.includes(service)}
                              onChange={() => handleScreeningServiceChange(service)}
                            />
                            <span className="flex items-center text-sm">
                              {service}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Languages Spoken
                      </label>
                      <input
                        type="text"
                        name="languagesSpoken"
                        value={form.languagesSpoken}
                        onChange={handleChange}
                        placeholder="E.g., English, Mandarin, Malay"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Operating Hours Section */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Globe className="h-5 w-5 text-blue-600" />
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

                <div className="pt-6 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row justify-end gap-4">
                    <Button variant="outline" type="button">
                      Save as Draft
                    </Button>
                    <Button type="submit">
                      Submit Registration
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

export default ClinicRegistrationPage;