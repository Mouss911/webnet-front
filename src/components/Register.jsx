import { useState } from 'react';
import { Eye, ChevronRight } from 'lucide-react';

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneCountryCode: '+1',
    phoneNumber: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
    newsletters: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData(prev => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    // Add your signup logic here
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm mb-4">
        <a href="#" className="text-blue-600">Home</a>
        <span className="text-gray-500">&gt;</span>
        <span className="text-gray-700">Create Account</span>
      </div>

      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Create an Account</h1>
        <p className="text-gray-600 mt-2">
          Already have an account? <a href="#" className="text-blue-600 font-medium">Sign in</a>
        </p>
      </div>

      <div className="bg-white rounded-md shadow-sm border p-6 max-w-3xl">
        <div>
          <h2 className="text-xl font-medium mb-6">Personal Information</h2>
          
          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm mb-1" htmlFor="firstName">First Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="lastName">Last Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="email">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="phoneNumber">Mobile Number <span className="text-red-500">*</span></label>
              <div className="flex">
                <div className="w-16">
                  <input
                    type="text"
                    id="phoneCountryCode"
                    name="phoneCountryCode"
                    value={formData.phoneCountryCode}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-l-md bg-gray-50 border-r-0"
                  />
                </div>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="flex-1 p-2 border rounded-r-md bg-gray-50"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="dateOfBirth">Date of birth</label>
              <div className="relative">
                <select 
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md bg-gray-50 appearance-none"
                >
                  <option value="">DD/MM/YYYY</option>
                  {/* Add date options here */}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <ChevronRight size={18} className="transform rotate-90" />
                </div>
              </div>
            </div>
          </div>

          {/* Password Section */}
          <div className="border-t pt-6 mt-6">
            <h2 className="text-xl font-medium mb-6">Set Password</h2>
            <div className="space-y-4 md:w-1/2">
              <div>
                <label className="block text-sm mb-1" htmlFor="password">Password <span className="text-red-500">*</span></label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md bg-gray-50"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <Eye size={18} className="text-gray-500" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Password must be at least 8 characters with uppercase letters, lowercase letters, numbers, and special characters.
                </p>
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="confirmPassword">Confirm Password <span className="text-red-500">*</span></label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md bg-gray-50"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <Eye size={18} className="text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="mt-6 space-y-3">
            <div className="flex items-start">
              <input
                type="checkbox"
                id="termsAccepted"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mt-1 mr-2"
              />
              <label htmlFor="termsAccepted" className="text-sm">
                I agree to the <a href="#" className="text-blue-600">Terms and Conditions</a> and <a href="#" className="text-blue-600">Privacy Policy</a> <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="newsletters"
                name="newsletters"
                checked={formData.newsletters}
                onChange={handleChange}
                className="mt-1 mr-2"
              />
              <label htmlFor="newsletters" className="text-sm">
                I want to receive promotional emails about products, services, and offers.
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-8">
            <button
              onClick={handleSubmit}
              className="bg-blue-900 text-white px-6 py-2 rounded font-medium"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>

      {/* Alternative Sign-up Methods */}
      <div className="mt-6 text-center">
        <p className="text-gray-600 mb-4">Or sign up with</p>
        <div className="flex justify-center space-x-4">
          <button className="border rounded-md px-6 py-2 flex items-center space-x-2">
            <img src="/api/placeholder/20/20" alt="Google" className="w-5 h-5" />
            <span>Google</span>
          </button>
          <button className="border rounded-md px-6 py-2 flex items-center space-x-2">
            <img src="/api/placeholder/20/20" alt="Facebook" className="w-5 h-5" />
            <span>Facebook</span>
          </button>
          <button className="border rounded-md px-6 py-2 flex items-center space-x-2">
            <img src="/api/placeholder/20/20" alt="Apple" className="w-5 h-5" />
            <span>Apple</span>
          </button>
        </div>
      </div>
    </div>
  );
}