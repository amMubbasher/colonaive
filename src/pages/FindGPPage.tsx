import React, { useState } from 'react';
import { Search, MapPin, Phone, Mail, Globe } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface GP {
  name: string;
  clinic: string;
  address: string;
  postal: string;
  region: string;
  phone?: string;
  email?: string;
  website?: string;
  languages?: string[];
  services?: string[];
  bookLink?: string;
}

const gpList: GP[] = [
  {
    name: 'Dr. Mark Tan',
    clinic: 'Healthwise Medical Clinic',
    address: '123 Orchard Road #05-01',
    postal: '238888',
    region: 'Central',
    phone: '+65 6123 4567',
    email: 'appointments@healthwise.sg',
    website: 'https://healthwise.sg',
    languages: ['English', 'Mandarin', 'Hokkien'],
    services: ['ColonAiQ® Blood Test', 'FIT Test', 'Pre-Colonoscopy Consultation'],
    bookLink: '#',
  },
  {
    name: 'Dr. Suzie Lim',
    clinic: 'Bukit Health Family Clinic',
    address: '456 Bukit Batok West Ave 3 #01-22',
    postal: '650456',
    region: 'West',
    phone: '+65 6234 5678',
    email: 'bukithealth@clinic.sg',
    website: 'https://bukithealth.sg',
    languages: ['English', 'Mandarin', 'Cantonese'],
    services: ['ColonAiQ® Blood Test', 'Health Screening Packages'],
    bookLink: '#',
  },
  {
    name: 'Dr. Lee Ming',
    clinic: 'EastCare Clinic',
    address: '789 Bedok North Street 3 #02-15',
    postal: '460789',
    region: 'East',
    phone: '+65 6345 6789',
    email: 'eastcare@clinic.sg',
    website: 'https://eastcare.sg',
    languages: ['English', 'Mandarin', 'Teochew'],
    services: ['ColonAiQ® Blood Test', 'FIT Test', 'Health Screening'],
    bookLink: '#',
  },
];

const regions = Array.from(new Set(gpList.map(gp => gp.region))).sort();
const languages = Array.from(new Set(gpList.flatMap(gp => gp.languages || []))).sort();

const FindGPPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');

  const filteredGPs = gpList.filter(gp => {
    const matchesSearch = 
      searchTerm === '' ||
      gp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gp.clinic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gp.address.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRegion = 
      selectedRegion === '' || 
      gp.region === selectedRegion;

    const matchesLanguage = 
      selectedLanguage === '' || 
      gp.languages?.includes(selectedLanguage);

    return matchesSearch && matchesRegion && matchesLanguage;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Find a Trusted Family Doctor (GP)</h1>
          <p className="text-xl mb-8">
            Connect with GPs who offer colorectal cancer screening and referral services.
          </p>
          <div className="relative max-w-2xl">
            <input
              type="text"
              placeholder="Search by doctor name, clinic, or location..."
              className="w-full py-3 px-5 pl-12 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Regions</option>
            {regions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>

          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Languages</option>
            {languages.map(language => (
              <option key={language} value={language}>{language}</option>
            ))}
          </select>

          {(selectedRegion || selectedLanguage || searchTerm) && (
            <Button
              variant="outline"
              onClick={() => {
                setSelectedRegion('');
                setSelectedLanguage('');
                setSearchTerm('');
              }}
            >
              Clear Filters
            </Button>
          )}
        </div>

        {/* Results Count */}
        <p className="text-gray-600 mb-6">
          Found {filteredGPs.length} clinic{filteredGPs.length !== 1 ? 's' : ''}
        </p>

        {/* GP List */}
        <div className="grid gap-6">
          {filteredGPs.map((gp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{gp.name}</h2>
                  <p className="text-gray-800 font-medium mb-2">{gp.clinic}</p>
                  
                  <div className="flex items-start mb-2">
                    <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-600">{gp.address}</p>
                      <p className="text-gray-500">Singapore {gp.postal}</p>
                    </div>
                  </div>

                  {gp.phone && (
                    <div className="flex items-center mb-2">
                      <Phone className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                      <a href={`tel:${gp.phone}`} className="text-blue-600 hover:text-blue-800">
                        {gp.phone}
                      </a>
                    </div>
                  )}

                  {gp.email && (
                    <div className="flex items-center mb-2">
                      <Mail className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                      <a href={`mailto:${gp.email}`} className="text-blue-600 hover:text-blue-800">
                        {gp.email}
                      </a>
                    </div>
                  )}

                  {gp.website && (
                    <div className="flex items-center mb-4">
                      <Globe className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                      <a
                        href={gp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Visit Website
                      </a>
                    </div>
                  )}
                </div>

                <div className="md:text-right">
                  {gp.languages && (
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-500 mb-1">Languages</p>
                      <div className="flex flex-wrap gap-2 md:justify-end">
                        {gp.languages.map((language, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded"
                          >
                            {language}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {gp.services && (
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-500 mb-1">Services</p>
                      <div className="flex flex-wrap gap-2 md:justify-end">
                        {gp.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-blue-50 text-blue-600 text-sm rounded"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {gp.bookLink && (
                    <Button className="w-full md:w-auto">
                      Book Appointment
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredGPs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">No clinics found matching your criteria</p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedRegion('');
                setSelectedLanguage('');
                setSearchTerm('');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindGPPage;