import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Eye, LogOut, Upload, Trash2 } from 'lucide-react';
import Profile from '../assets/profile.png';

export default function UserProfile() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@johndoe.com',
    phoneNumber: '77-123-45-67',
    dateOfBirth: '',
    currentPassword: '********',
    newPassword: '******',
    confirmPassword: '******'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Breadcrumb */}
      <div className="text-sm mb-4 mt-1">
        <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600">User Profile</span>
      </div>

      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Personal Information</h1>
        <button className="flex items-center space-x-1 border bordered-[#1B4B66] cursor-pointer rounded-md px-4 py-1 text-[#1B4B66]">
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-72">
          <div className="bg-gray-100 rounded-md">
            <ul className="divide-y divide-gray-200">
              <li className="p-3 flex justify-between items-center border-l-4 border-[#1B4B66]">
                <span className="font-medium text-[#1B4B66]">Personal Information</span>
                <ChevronRight size={18} className="text-[#1B4B66]" />
              </li>
              <li className="p-3 flex justify-between items-center">
                <span>Refer and Earn</span>
                <ChevronRight size={18} className="text-gray-400" />
              </li>
              <li className="p-3 flex justify-between items-center">
                <span>My Orders</span>
                <ChevronRight size={18} className="text-gray-400" />
              </li>
              <li className="p-3 flex justify-between items-center">
                <span>My Wishlist</span>
                <ChevronRight size={18} className="text-gray-400" />
              </li>
              <li className="p-3 flex justify-between items-center">
                <span>My Reviews</span>
                <ChevronRight size={18} className="text-gray-400" />
              </li>
              <li className="p-3 flex justify-between items-center">
                <span>My Address Book</span>
                <ChevronRight size={18} className="text-gray-400" />
              </li>
              <li className="p-3 flex justify-between items-center">
                <span>My Saved Cards</span>
                <ChevronRight size={18} className="text-gray-400" />
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-xl font-medium mb-3">Personal Information</h2>

            {/* Profile Picture Section */}
            <div className="flex items-center gap-4 mb-6 border-t pt-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300">
                <img 
                  src={Profile} 
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex gap-2">
                <button className="bg-[#1B4B66] cursor-pointer text-white px-4 py-2 rounded flex items-center gap-2 text-sm">
                  <Upload size={16} />
                  Upload
                </button>
                <button className="border cursor-pointer border-red-500 text-red-500 px-4 py-2 rounded flex items-center gap-2 text-sm">
                  <Trash2 size={16} />
                  Delete
                </button>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Mobile Number</label>
                <div className="flex">
                  <div className="w-16">
                    <input
                      type="text"
                      name="phoneCountryCode"
                      value="+221"
                      readOnly
                      className="w-full p-2 border rounded-l-md bg-gray-50 border-r-0"
                    />
                  </div>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="flex-1 p-2 border rounded-r-md bg-gray-50"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1">Date of birth</label>
                <div className="relative">
                  <select
                    type="date" 
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md bg-gray-50 appearance-none"
                  >
                    <option value="">DD/MM/YYYY</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <ChevronRight size={18} className="transform rotate-90 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>

            {/* Password Section */}
            <div className="border-t pt-6 mt-6">
              <h2 className="text-xl font-medium mb-6">Password</h2>
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-sm mb-1">Current Password</label>
                  <input
                    type="password"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md bg-gray-200"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">New Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md bg-gray-200"
                    />
                    <button 
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    >
                      <Eye size={18} className="text-gray-500" />
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-1">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md bg-gray-200"
                  />
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end mt-6">
              <button className="bg-[#1B4B66] cursor-pointer text-white px-4 py-2 rounded">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}