// src/pages/member-sign-up/index.tsx
import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/ui/Container'; // Adjust path if necessary
import { Card, CardContent } from '../../components/ui/Card'; // Adjust path if necessary
import Button from '../../components/ui/Button'; // Adjust path if necessary
import InputField from '../../components/ui/InputField'; // Adjust path if necessary

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  age: string; // Or number, convert during submission if backend expects number
  gender: string;
  medicalHistoryConditions: string[]; // For checkboxes
  // Add other medical history fields as needed
}

const initialMedicalConditions = [
  { id: 'condition1', label: 'Hypertension' },
  { id: 'condition2', label: 'Diabetes' },
  { id: 'condition3', label: 'Family history of colorectal cancer' },
  { id: 'condition4', label: 'Previous polyps' },
  // Add more conditions
];

const MemberSignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    age: '',
    gender: '',
    medicalHistoryConditions: [],
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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const newConditions = checked
        ? [...prev.medicalHistoryConditions, value]
        : prev.medicalHistoryConditions.filter(condition => condition !== value);
      return { ...prev, medicalHistoryConditions: newConditions };
    });
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required.';
    // Basic phone validation (e.g., numbers only, certain length) can be added
    // else if (!/^\d{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = 'Phone number is invalid (10 digits).';

    if (!formData.age.trim()) {
        newErrors.age = 'Age is required.';
    } else if (isNaN(Number(formData.age)) || Number(formData.age) <= 0) {
        newErrors.age = 'Age must be a positive number.';
    }

    if (!formData.gender) newErrors.gender = 'Gender is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors(prev => ({ ...prev, api: undefined })); // Clear previous API errors
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Placeholder for API integration
      const response = await fetch('/api/members/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            ...formData,
            age: Number(formData.age) // Ensure age is sent as a number if required
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Sign-up failed. Please try again.');
      }

      // Handle successful sign-up
      alert('Member sign-up successful! Redirecting...'); // Replace with a better notification
      // Example: navigate('/login') or navigate('/member-dashboard');
      navigate('/'); // Redirect to home or a confirmation page

    } catch (error: any) {
      setErrors(prev => ({ ...prev, api: error.message || 'An unexpected error occurred.' }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="py-12">
      {/* Optional: Banner Image */}
      {/* <img src="/assets/images/member-signup-banner.jpg" alt="Member Sign Up Banner" className="w-full h-48 object-cover rounded-lg mb-8" /> */}
      
      <Card className="max-w-2xl mx-auto">
        <CardContent>
          <h1 className="text-3xl font-bold text-center mb-2 text-gray-800 dark:text-white">Member Sign-Up</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Join Colonaive to take control of your health.</p>
          
          {errors.api && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {errors.api}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <InputField
              id="fullName"
              label="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              error={errors.fullName}
              required
              placeholder="e.g., Jane Doe"
              autoComplete="name"
            />
            <InputField
              id="email"
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
              placeholder="you@example.com"
              autoComplete="email"
            />
            <InputField
              id="phoneNumber"
              label="Phone Number"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              error={errors.phoneNumber}
              required
              placeholder="e.g., +1234567890"
              autoComplete="tel"
            />
            <InputField
              id="age"
              label="Age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              error={errors.age}
              required
              placeholder="e.g., 45"
            />
            <InputField
              id="gender"
              label="Gender"
              type="select"
              value={formData.gender}
              onChange={handleChange}
              options={[
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' },
                { value: 'other', label: 'Other' },
                { value: 'prefer_not_to_say', label: 'Prefer not to say' },
              ]}
              error={errors.gender}
              required
              placeholder="Select your gender"
            />

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Relevant Medical History (select all that apply)
              </label>
              <div className="space-y-2 mt-2">
                {initialMedicalConditions.map(condition => (
                  <div key={condition.id} className="flex items-center">
                    <input
                      id={condition.id}
                      name="medicalHistoryConditions"
                      type="checkbox"
                      value={condition.label} // Or a specific ID if your backend prefers
                      checked={formData.medicalHistoryConditions.includes(condition.label)}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor={condition.id} className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                      {condition.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Add more medical history fields as InputField or custom components */}

            <Button type="submit" className="w-full py-3 text-lg" disabled={isLoading}>
              {isLoading ? 'Signing Up...' : 'Sign Up as Member'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default MemberSignUpPage;