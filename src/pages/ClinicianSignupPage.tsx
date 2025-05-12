import React from 'react';

const ClinicianSignupPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Clinician Registration
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Join our network of healthcare professionals dedicated to early detection and prevention.
          </p>
        </div>
        
        <div className="mt-12 bg-white shadow rounded-lg p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">
                Specialization
              </label>
              <select
                id="specialization"
                name="specialization"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option>General Practice</option>
                <option>Gastroenterology</option>
                <option>Oncology</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="license" className="block text-sm font-medium text-gray-700">
                Medical License Number
              </label>
              <input
                type="text"
                name="license"
                id="license"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClinicianSignupPage;