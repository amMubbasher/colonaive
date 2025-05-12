import React, { useState } from 'react';
import { Container } from '../../components/ui/Container';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Building2, User, Mail, Phone, Save, ArrowRight, CheckSquare } from 'lucide-react';

const INDUSTRY_SECTORS = [
  'Healthcare',
  'Finance',
  'Education',
  'Tech',
  'Manufacturing',
  'Logistics',
  'Retail',
  'Others'
];

const COLLABORATION_OPTIONS = [
  {
    id: 'workplace-screening',
    label: 'Workplace CRC Screening Drives',
    description: 'Organize screening events for employees'
  },
  {
    id: 'health-talks',
    label: 'Staff Health Talks',
    description: 'Educational sessions by medical professionals'
  },
  {
    id: 'public-events',
    label: 'Sponsorship of Public Events (RID-CRC PUB™)',
    description: 'Support community awareness initiatives'
  },
  {
    id: 'outreach',
    label: 'Community Outreach Programs (RID-CRC CSR™)',
    description: 'Engage in grassroots health promotion'
  },
  {
    id: 'media',
    label: 'Co-branding or Media Partnership',
    description: 'Collaborate on awareness campaigns'
  }
];

const CorporateCSRPage: React.FC = () => {
  const [form, setForm] = useState({
    companyName: '',
    uen: '',
    industry: '',
    contactName: '',
    designation: '',
    email: '',
    phone: '',
    interests: [] as string[],
    notes: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (interestId: string) => {
    setForm(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(i => i !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  const handleSubmit = (e: React.FormEvent, asDraft: boolean = false) => {
    e.preventDefault();
    if (asDraft) {
      localStorage.setItem('corporateCSRDraft', JSON.stringify(form));
      alert('Draft saved successfully');
    } else {
      console.log('Form submitted:', form);
      // Handle form submission
    }
  };

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Corporate CSR Registration</h1>
            <p className="text-xl mb-0">
              Partner with us to support life-saving awareness and screening efforts against colorectal cancer in Singapore.
            </p>
          </div>
        </Container>
      </div>

      <Container>
        <div className="max-w-3xl mx-auto py-12">
          <Card>
            <CardContent className="p-8">
              <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-8">
                {/* Company Information */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Building2 className="h-5 w-5 text-blue-600" />
                    <h2 className="text-xl font-bold">Company Information</h2>
                  </div>

                  <div className="space-y-4">
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
                        UEN Number
                      </label>
                      <input
                        type="text"
                        name="uen"
                        required
                        value={form.uen}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Industry Sector
                      </label>
                      <select
                        name="industry"
                        required
                        value={form.industry}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select Industry</option>
                        {INDUSTRY_SECTORS.map(sector => (
                          <option key={sector} value={sector}>{sector}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Contact Person */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <User className="h-5 w-5 text-blue-600" />
                    <h2 className="text-xl font-bold">Contact Person</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="contactName"
                        required
                        value={form.contactName}
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

                {/* Collaboration Interests */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <CheckSquare className="h-5 w-5 text-blue-600" />
                    <h2 className="text-xl font-bold">Collaboration Interests</h2>
                  </div>

                  <div className="space-y-3">
                    {COLLABORATION_OPTIONS.map((option) => (
                      <label
                        key={option.id}
                        className={`relative flex cursor-pointer rounded-lg border p-4 focus:outline-none ${
                          form.interests.includes(option.id)
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200'
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={form.interests.includes(option.id)}
                          onChange={() => handleInterestChange(option.id)}
                        />
                        <div>
                          <h3 className="font-medium text-gray-900">{option.label}</h3>
                          <p className="text-sm text-gray-500">{option.description}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Notes
                  </label>
                  <textarea
                    name="notes"
                    rows={4}
                    value={form.notes}
                    onChange={handleChange}
                    placeholder="Share any specific requirements, questions, or areas of interest..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Quote */}
                <div className="text-center italic text-gray-600 border-t border-gray-200 pt-6">
                  "Every company has the power to save lives. Let's make it count."
                  <br />
                  <span className="text-sm">— Project COLONAiVE™</span>
                </div>

                {/* Submit Buttons */}
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
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default CorporateCSRPage;