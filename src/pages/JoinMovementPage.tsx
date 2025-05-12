import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Users, Shield, Building2, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useChampionStore } from '../store/championStore';

const roles = [
  {
    id: 'citizen',
    label: 'Citizen Champion',
    description: 'Join as an individual to support CRC awareness',
    icon: <Users className="h-5 w-5 text-blue-600" />
  },
  {
    id: 'doctor',
    label: 'Healthcare Champion',
    description: 'Join as a medical professional',
    icon: <Shield className="h-5 w-5 text-teal-600" />
  },
  {
    id: 'corporate',
    label: 'Corporate Champion',
    description: 'Join as a business or organization',
    icon: <Building2 className="h-5 w-5 text-purple-600" />
  },
  {
    id: 'advocate',
    label: 'Community Champion',
    description: 'Join as a community leader or advocate',
    icon: <Heart className="h-5 w-5 text-red-600" />
  }
];

const JoinMovementPage: React.FC = () => {
  const navigate = useNavigate();
  const setChampionInfo = useChampionStore(state => state.setChampionInfo);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    organization: '',
    reason: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setChampionInfo(form.firstName, form.email);
    
    // Handle different roles
    switch (form.role) {
      case 'doctor':
        navigate('/register');
        break;
      case 'corporate':
        navigate('/register/corporate');
        break;
      default:
        navigate('/dashboard');
    }
  };

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Join the Movement</h1>
            <p className="text-xl mb-0">
              Become a Champion in Singapore's national effort to eliminate colorectal cancer.
            </p>
          </div>
        </Container>
      </div>

      <Container>
        <div className="max-w-2xl mx-auto py-12">
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    How would you like to join?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {roles.map((role) => (
                      <label
                        key={role.id}
                        className={`relative flex cursor-pointer rounded-lg border p-4 focus:outline-none ${
                          form.role === role.id
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200'
                        }`}
                      >
                        <input
                          type="radio"
                          name="role"
                          value={role.id}
                          className="sr-only"
                          onChange={handleChange}
                          required
                        />
                        <div className="flex items-start">
                          <div className="flex-shrink-0">{role.icon}</div>
                          <div className="ml-3">
                            <span className="block text-sm font-medium">
                              {role.label}
                            </span>
                            <span className="block text-xs text-gray-500">
                              {role.description}
                            </span>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {form.role === 'corporate' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={form.organization}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Why would you like to join the movement? (Optional)
                  </label>
                  <textarea
                    name="reason"
                    rows={4}
                    value={form.reason}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Share your motivation..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4 pt-6">
                  <Link to="/">
                    <Button variant="outline" className="w-full sm:w-auto">
                      Cancel
                    </Button>
                  </Link>
                  <Button type="submit" className="w-full sm:w-auto">
                    Join the Movement
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

export default JoinMovementPage;