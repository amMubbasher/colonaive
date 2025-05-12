// src/pages/clinic-sign-up/index.tsx
import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/ui/Container';
import { Card, CardContent } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import InputField from '../../components/ui/InputField';

interface FormData {
  clinicName: string;
  email: string;
  contactPerson: string;
  contactPhone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string; // Or use a select with predefined countries
  registrationNumber: string;
  servicesOffered: string; // Could be a textarea or multi-select
}

const ClinicSignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    clinicName: '',
    email: '',
    contactPerson: '',
    contactPhone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Singapore', // Default or make it selectable
    registrationNumber: '',
    servicesOffered: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData | 'api', string>>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.clinicName.trim()) newErrors.clinicName = 'Clinic name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.contactPerson.trim()) newErrors.contactPerson = 'Contact person is required.';
    if (!formData.contactPhone.trim()) newErrors.contactPhone = 'Contact phone is required.';
    if (!formData.address.trim()) newErrors.address = 'Address is required.';
    if (!formData.city.trim()) newErrors.city = 'City is required.';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'Postal code is required.';
    if (!formData.country.trim()) newErrors.country = 'Country is required.';
    if (!formData.registrationNumber.trim()) newErrors.registrationNumber = 'Registration number is required.';
    if (!formData.servicesOffered.trim()) newErrors.servicesOffered = 'Services offered are required.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors(prev => ({ ...prev, api: undefined }));
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/clinics/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Sign-up failed.');
      
      alert('Clinic sign-up successful!');
      navigate('/'); // Or to a clinic dashboard
    } catch (error: any) {
      setErrors(prev => ({ ...prev, api: error.message || 'An unexpected error occurred.' }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="py-12">
      {/* <img src="/assets/images/clinic-signup-banner.jpg" alt="Clinic Sign Up Banner" className="w-full h-48 object-cover rounded-lg mb-8" /> */}
      <Card className="max-w-2xl mx-auto">
        <CardContent>
          <h1 className="text-3xl font-bold text-center mb-2 text-gray-800 dark:text-white">Clinic Sign-Up</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Register your clinic with Colonaive.</p>

          {errors.api && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {errors.api}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <InputField id="clinicName" label="Clinic Name" value={formData.clinicName} onChange={handleChange} error={errors.clinicName} required autoComplete="organization" />
            <InputField id="email" label="Clinic Email" type="email" value={formData.email} onChange={handleChange} error={errors.email} required autoComplete="email" />
            <InputField id="contactPerson" label="Contact Person Name" value={formData.contactPerson} onChange={handleChange} error={errors.contactPerson} required autoComplete="name" />
            <InputField id="contactPhone" label="Contact Phone Number" type="tel" value={formData.contactPhone} onChange={handleChange} error={errors.contactPhone} required autoComplete="tel" />
            <InputField id="address" label="Clinic Address" value={formData.address} onChange={handleChange} error={errors.address} required autoComplete="street-address" />
            <InputField id="city" label="City" value={formData.city} onChange={handleChange} error={errors.city} required autoComplete="address-level2" />
            <InputField id="postalCode" label="Postal Code" value={formData.postalCode} onChange={handleChange} error={errors.postalCode} required autoComplete="postal-code" />
            <InputField id="country" label="Country" value={formData.country} onChange={handleChange} error={errors.country} required autoComplete="country-name" />
            {/* Example for a country dropdown:
            <InputField
              id="country"
              label="Country"
              type="select"
              value={formData.country}
              onChange={handleChange}
              options={[{ value: 'SG', label: 'Singapore' }, { value: 'MY', label: 'Malaysia' }]} // Add more
              error={errors.country}
              required
            /> */}
            <InputField id="registrationNumber" label="Clinic Registration Number" value={formData.registrationNumber} onChange={handleChange} error={errors.registrationNumber} required />
            <InputField
              id="servicesOffered"
              label="Services Offered (comma-separated or one per line)"
              value={formData.servicesOffered}
              onChange={handleChange}
              error={errors.servicesOffered}
              required
              textarea
              rows={4}
              placeholder="e.g., Colonoscopy, Gastroscopy, General Consultation"
            />
            
            <Button type="submit" className="w-full py-3 text-lg" disabled={isLoading}>
              {isLoading ? 'Registering...' : 'Register Clinic'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ClinicSignUpPage;