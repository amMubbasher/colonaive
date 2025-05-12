// src/pages/specialist-sign-up/index.tsx
import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/ui/Container';
import { Card, CardContent } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import InputField from '../../components/ui/InputField';

interface FormData {
  specialistName: string;
  email: string;
  phoneNumber: string;
  fieldOfSpecialization: string;
  clinicAffiliation: string; // Could be a select if you have a list of registered clinics
  licenseNumber: string;
  yearsOfExperience: string; // Or number
}

const SpecialistSignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    specialistName: '',
    email: '',
    phoneNumber: '',
    fieldOfSpecialization: '',
    clinicAffiliation: '',
    licenseNumber: '',
    yearsOfExperience: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData | 'api', string>>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
     if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.specialistName.trim()) newErrors.specialistName = 'Specialist name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required.';
    if (!formData.fieldOfSpecialization.trim()) newErrors.fieldOfSpecialization = 'Field of specialization is required.';
    if (!formData.clinicAffiliation.trim()) newErrors.clinicAffiliation = 'Clinic affiliation is required.';
    if (!formData.licenseNumber.trim()) newErrors.licenseNumber = 'License number is required.';
    if (!formData.yearsOfExperience.trim()) {
        newErrors.yearsOfExperience = 'Years of experience is required.';
    } else if (isNaN(Number(formData.yearsOfExperience)) || Number(formData.yearsOfExperience) < 0) {
        newErrors.yearsOfExperience = 'Years of experience must be a non-negative number.';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors(prev => ({ ...prev, api: undefined }));
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/specialists/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            ...formData,
            yearsOfExperience: Number(formData.yearsOfExperience)
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Sign-up failed.');
      
      alert('Specialist sign-up successful!');
      navigate('/'); // Or to a specialist dashboard
    } catch (error: any) {
      setErrors(prev => ({ ...prev, api: error.message || 'An unexpected error occurred.' }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="py-12">
      <Card className="max-w-2xl mx-auto">
        <CardContent>
          <h1 className="text-3xl font-bold text-center mb-2 text-gray-800 dark:text-white">Specialist Sign-Up</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Join our network of trusted specialists.</p>
          
          {errors.api && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {errors.api}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <InputField id="specialistName" label="Full Name" value={formData.specialistName} onChange={handleChange} error={errors.specialistName} required autoComplete="name" />
            <InputField id="email" label="Email Address" type="email" value={formData.email} onChange={handleChange} error={errors.email} required autoComplete="email" />
            <InputField id="phoneNumber" label="Phone Number" type="tel" value={formData.phoneNumber} onChange={handleChange} error={errors.phoneNumber} required autoComplete="tel" />
            <InputField id="fieldOfSpecialization" label="Field of Specialization" value={formData.fieldOfSpecialization} onChange={handleChange} error={errors.fieldOfSpecialization} required placeholder="e.g., Gastroenterology, Oncology"/>
            <InputField id="clinicAffiliation" label="Primary Clinic Affiliation" value={formData.clinicAffiliation} onChange={handleChange} error={errors.clinicAffiliation} required placeholder="e.g., General Hospital SG"/>
            <InputField id="licenseNumber" label="Medical License Number" value={formData.licenseNumber} onChange={handleChange} error={errors.licenseNumber} required />
            <InputField id="yearsOfExperience" label="Years of Experience" type="number" value={formData.yearsOfExperience} onChange={handleChange} error={errors.yearsOfExperience} required placeholder="e.g., 10"/>
            
            <Button type="submit" className="w-full py-3 text-lg" disabled={isLoading}>
              {isLoading ? 'Registering...' : 'Register as Specialist'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SpecialistSignUpPage;