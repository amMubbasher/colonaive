// src/pages/sponsor-sign-up/index.tsx
import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/ui/Container';
import { Card, CardContent } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import InputField from '../../components/ui/InputField';

interface FormData {
  companyName: string;
  email: string; // Company or CSR contact email
  csrContactPerson: string;
  csrContactPhone: string;
  sponsorshipLevel: string;
  industry: string;
  csrInitiatives: string; // Textarea for details
  companyWebsite?: string;
}

const sponsorshipLevels = [
  { value: 'platinum', label: 'Platinum Partner' },
  { value: 'gold', label: 'Gold Partner' },
  { value: 'silver', label: 'Silver Partner' },
  { value: 'bronze', label: 'Bronze Partner' },
  { value: 'custom', label: 'Custom Contribution' },
];

const SponsorSignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    email: '',
    csrContactPerson: '',
    csrContactPhone: '',
    sponsorshipLevel: '',
    industry: '',
    csrInitiatives: '',
    companyWebsite: '',
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
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.csrContactPerson.trim()) newErrors.csrContactPerson = 'CSR contact person is required.';
    if (!formData.csrContactPhone.trim()) newErrors.csrContactPhone = 'CSR contact phone is required.';
    if (!formData.sponsorshipLevel) newErrors.sponsorshipLevel = 'Sponsorship level is required.';
    if (!formData.industry.trim()) newErrors.industry = 'Industry is required.';
    if (formData.companyWebsite && !/^https?:\/\/.+\..+/.test(formData.companyWebsite)) {
      newErrors.companyWebsite = 'Please enter a valid website URL (e.g., https://example.com)';
    }
    // CSR Initiatives might not be strictly required, depends on your needs
    // if (!formData.csrInitiatives.trim()) newErrors.csrInitiatives = 'Please describe your CSR initiatives or interest.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors(prev => ({ ...prev, api: undefined }));
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/sponsors/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Sign-up failed.');
      
      alert('Sponsor sign-up successful! Thank you for your interest.');
      navigate('/'); // Or to a thank you page
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
          <h1 className="text-3xl font-bold text-center mb-2 text-gray-800 dark:text-white">Sponsor / CSR Partner Sign-Up</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Partner with Colonaive to make a difference.</p>
          
          {errors.api && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {errors.api}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <InputField id="companyName" label="Company Name" value={formData.companyName} onChange={handleChange} error={errors.companyName} required autoComplete="organization"/>
            <InputField id="email" label="Company/Contact Email" type="email" value={formData.email} onChange={handleChange} error={errors.email} required autoComplete="email"/>
            <InputField id="csrContactPerson" label="CSR Contact Person" value={formData.csrContactPerson} onChange={handleChange} error={errors.csrContactPerson} required autoComplete="name"/>
            <InputField id="csrContactPhone" label="CSR Contact Phone" type="tel" value={formData.csrContactPhone} onChange={handleChange} error={errors.csrContactPhone} required autoComplete="tel"/>
            <InputField
              id="sponsorshipLevel"
              label="Desired Sponsorship Level"
              type="select"
              value={formData.sponsorshipLevel}
              onChange={handleChange}
              options={sponsorshipLevels}
              error={errors.sponsorshipLevel}
              required
              placeholder="Select sponsorship level"
            />
            <InputField id="industry" label="Industry" value={formData.industry} onChange={handleChange} error={errors.industry} required placeholder="e.g., Healthcare, Technology, Finance"/>
            <InputField id="companyWebsite" label="Company Website (Optional)" type="url" value={formData.companyWebsite || ''} onChange={handleChange} error={errors.companyWebsite} placeholder="https://yourcompany.com" autoComplete="url"/>
            <InputField
              id="csrInitiatives"
              label="CSR Initiatives / Interest (Optional)"
              value={formData.csrInitiatives}
              onChange={handleChange}
              error={errors.csrInitiatives}
              textarea
              rows={4}
              placeholder="Briefly describe your company's CSR focus or interest in supporting Colonaive."
            />
            
            <Button type="submit" className="w-full py-3 text-lg" disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Register as Sponsor'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SponsorSignUpPage;