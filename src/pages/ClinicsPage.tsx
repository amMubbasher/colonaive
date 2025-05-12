import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Search, MapPin, Phone, Globe } from 'lucide-react';
import { ClinicItem } from '../types';

// Mock data for clinics
const mockClinics: ClinicItem[] = [
  {
    id: '1',
    name: 'Singapore General Hospital',
    address: 'Outram Road, Singapore 169608',
    specialties: ['Gastroenterology', 'Colorectal Surgery'],
    phone: '+65 6222 3322',
    website: 'https://www.sgh.com.sg',
  },
  {
    id: '2',
    name: 'National University Hospital',
    address: '5 Lower Kent Ridge Road, Singapore 119074',
    specialties: ['Gastroenterology', 'Oncology'],
    phone: '+65 6779 5555',
    website: 'https://www.nuh.com.sg',
  },
  {
    id: '3',
    name: 'Mount Elizabeth Hospital',
    address: '3 Mount Elizabeth, Singapore 228510',
    specialties: ['Colorectal Surgery', 'Gastroenterology'],
    phone: '+65 6737 2666',
    website: 'https://www.mountelizabeth.com.sg',
  },
  {
    id: '4',
    name: 'Gleneagles Hospital',
    address: '6A Napier Road, Singapore 258500',
    specialties: ['Gastroenterology', 'General Surgery'],
    phone: '+65 6575 7575',
    website: 'https://www.gleneagles.com.sg',
  },
  {
    id: '5',
    name: 'Parkway East Hospital',
    address: '321 Joo Chiat Place, Singapore 427990',
    specialties: ['General Surgery', 'Internal Medicine'],
    phone: '+65 6344 7588',
    website: 'https://www.parkwayeast.com.sg',
  },
  {
    id: '6',
    name: 'Changi General Hospital',
    address: '2 Simei Street 3, Singapore 529889',
    specialties: ['Gastroenterology', 'Oncology'],
    phone: '+65 6788 8833',
    website: 'https://www.cgh.com.sg',
  },
];

const ClinicsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSpecialtyFilter = (specialty: string | null) => {
    setSelectedSpecialty(specialty);
  };

  // Get unique specialties from all clinics
  const allSpecialties = Array.from(
    new Set(mockClinics.flatMap((clinic) => clinic.specialties))
  ).sort();

  // Filter clinics based on search term and selected specialty
  const filteredClinics = mockClinics.filter((clinic) => {
    const matchesSearch =
      searchTerm === '' ||
      clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      clinic.address.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpecialty =
      selectedSpecialty === null || clinic.specialties.includes(selectedSpecialty);

    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Find a Clinic</h1>
            <p className="text-xl mb-8">
              Locate screening facilities and specialists near you to schedule your colorectal cancer screening.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search by clinic name or location..."
                className="w-full py-3 px-5 pl-12 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </Container>
      </div>

      {/* Clinic Finder Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters */}
            <div className="lg:w-1/4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Filter By Specialty</h3>
                  <div className="space-y-2">
                    <button
                      className={`w-full text-left px-3 py-2 rounded-md ${
                        selectedSpecialty === null
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                      onClick={() => handleSpecialtyFilter(null)}
                    >
                      All Specialties
                    </button>
                    {allSpecialties.map((specialty) => (
                      <button
                        key={specialty}
                        className={`w-full text-left px-3 py-2 rounded-md ${
                          selectedSpecialty === specialty
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                        onClick={() => handleSpecialtyFilter(specialty)}
                      >
                        {specialty}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                  <p className="text-gray-600 mb-4">
                    Not sure which clinic to choose? Our coordinators can help you find the right specialist.
                  </p>
                  <Button className="w-full">Contact a Coordinator</Button>
                </CardContent>
              </Card>
            </div>

            {/* Clinic Listings */}
            <div className="lg:w-3/4">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">
                  {filteredClinics.length} {filteredClinics.length === 1 ? 'Clinic' : 'Clinics'} Found
                </h2>
                <div className="text-gray-600">
                  {selectedSpecialty ? `Filtered by: ${selectedSpecialty}` : 'Showing all specialties'}
                </div>
              </div>

              {filteredClinics.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredClinics.map((clinic) => (
                    <Card key={clinic.id} className="hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{clinic.name}</h3>
                        <div className="flex items-start mb-2">
                          <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-600">{clinic.address}</p>
                        </div>
                        <div className="flex items-center mb-2">
                          <Phone className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                          <p className="text-gray-600">{clinic.phone}</p>
                        </div>
                        {clinic.website && (
                          <div className="flex items-center mb-4">
                            <Globe className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                            <a
                              href={clinic.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              Visit Website
                            </a>
                          </div>
                        )}
                        <div className="mb-4">
                          <h4 className="font-semibold mb-1">Specialties:</h4>
                          <div className="flex flex-wrap gap-2">
                            {clinic.specialties.map((specialty, index) => (
                              <span
                                key={index}
                                className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            Learn More
                          </Button>
                          <Button size="sm" className="flex-1">
                            Book Appointment
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-bold mb-2">No Clinics Found</h3>
                    <p className="text-gray-600 mb-4">
                      No clinics match your current search criteria. Please try different search terms or filters.
                    </p>
                    <Button onClick={() => { setSearchTerm(''); setSelectedSpecialty(null); }}>
                      Reset Filters
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Preparing for Your Visit</h2>
              <p className="text-xl text-gray-600">
                Knowing what to expect can help make your screening experience smoother.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Before Your Appointment</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-1">1</span>
                      <span>Check with your insurance provider about coverage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-1">2</span>
                      <span>Bring your medical history and any previous screening results</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-1">3</span>
                      <span>Prepare a list of questions you may have</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-1">4</span>
                      <span>Follow any preparation instructions provided by the clinic</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Questions to Ask</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="bg-teal-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-1">1</span>
                      <span>Which screening test is right for me and why?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-teal-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-1">2</span>
                      <span>How do I prepare for the screening?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-teal-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-1">3</span>
                      <span>What are the risks and benefits of this screening method?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-teal-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-1">4</span>
                      <span>How will I receive my results and what happens next?</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-center">Need Financial Assistance?</h3>
              <p className="text-gray-600 text-center mb-6">
                Several programs exist to help cover the cost of colorectal cancer screening for those who qualify.
                Don't let financial concerns prevent you from getting screened.
              </p>
              <div className="text-center">
                <Button>Explore Financial Assistance Options</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ClinicsPage;