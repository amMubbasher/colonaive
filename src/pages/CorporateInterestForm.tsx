import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Building2, Users, Calendar, Target, ChevronRight } from 'lucide-react';

const supportTypes = [
  {
    id: 'screening',
    title: 'Sponsor CRC Screening',
    description: 'Support screening initiatives for communities in need',
    icon: <Target className="h-5 w-5 text-blue-600" />
  },
  {
    id: 'event',
    title: 'Host Health Events',
    description: 'Organize health talks and awareness programs',
    icon: <Calendar className="h-5 w-5 text-teal-600" />
  },
  {
    id: 'staff',
    title: 'Staff Screening Program',
    description: 'Implement employee health screening initiatives',
    icon: <Users className="h-5 w-5 text-purple-600" />
  },
  {
    id: 'csr',
    title: 'CSR Partnership',
    description: 'Explore comprehensive CSR collaboration opportunities',
    icon: <Building2 className="h-5 w-5 text-indigo-600" />
  }
];

const CorporateInterestForm: React.FC = () => {
  const [form, setForm] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    designation: '',
    supportType: '',
    message: '',
    phone: '',
    industry: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Corporate interest submitted:', form);
    // Navigate to thank you page or show success message
  };

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Partner with Us as a Corporate Champion</h1>
            <p className="text-xl mb-0">
              Join Singapore's national movement to eliminate colorectal cancer through corporate social responsibility.
            </p>
          </div>
        </Container>
      </div>

      <Container>
        <div className="max-w-3xl mx-auto py-12">
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      value={form.companyName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Industry
                    </label>
                    <input
                      type="text"
                      name="industry"
                      value={form.industry}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Person
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      required
                      value={form.contactPerson}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Designation
                    </label>
                    <input
                      type="text"
                      name="designation"
                      required
                      value={form.designation}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    How would you like to support our movement?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {supportTypes.map((type) => (
                      <label
                        key={type.id}
                        className={`relative flex cursor-pointer rounded-lg border p-4 focus:outline-none ${
                          form.supportType === type.id
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200'
                        }`}
                      >
                        <input
                          type="radio"
                          name="supportType"
                          value={type.id}
                          className="sr-only"
                          onChange={handleChange}
                          required
                        />
                        <div className="flex items-start">
                          <div className="flex-shrink-0">{type.icon}</div>
                          <div className="ml-3">
                            <span className="block text-sm font-medium">
                              {type.title}
                            </span>
                            <span className="block text-xs text-gray-500">
                              {type.description}
                            </span>
                          </div>
                          <ChevronRight className={`ml-auto h-5 w-5 ${
                            form.supportType === type.id ? 'text-blue-600' : 'text-gray-400'
                          }`} />
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Share any specific requirements or questions..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4 pt-6">
                  <Link to="/">
                    <Button variant="outline" className="w-full sm:w-auto">
                      Cancel
                    </Button>
                  </Link>
                  <Button type="submit" className="w-full sm:w-auto">
                    Submit Interest
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default CorporateInterestForm;