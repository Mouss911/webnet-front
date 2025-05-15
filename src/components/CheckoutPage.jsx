import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Cup from '../assets/prod.png';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [isAddressExpanded, setIsAddressExpanded] = useState(true);
  const [isPaymentExpanded, setIsPaymentExpanded] = useState(false);

  // Sample order items
  const orderItems = [
    {
      id: 1,
      name: "Coach",
      description: "Leather Coach Bag",
      quantity: 1,
      image: Cup
    },
    {
      id: 2,
      name: "Coach",
      description: "Leather Coach Bag",
      quantity: 1,
      image: Cup
    }
  ];

  // Order summary
  const orderSummary = {
    subtotal: 119.69,
    discount: 13.40,
    deliveryFee: 0.00,
    grandTotal: 106.29
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen p-4">
      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto mb-6">
        <div className="flex items-center text-sm py-2">
          <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">Checkout</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-medium text-gray-800 mb-6">Checkout</h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column - Forms */}
          <div className="w-full md:w-2/3">
            {/* Address Form */}
            <div className="bg-white rounded-md shadow-sm mb-6">
              <div 
                className="flex justify-between items-center p-4 cursor-pointer border-b"
                onClick={() => setIsAddressExpanded(!isAddressExpanded)}
              >
                <h2 className="text-lg font-medium">Add New Address</h2>
                {isAddressExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              
              {isAddressExpanded && (
                <div className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="Enter Name" 
                        className="w-full p-2 bg-gray-100 border border-gray-200 rounded"
                      />
                    </div>
                    
                    {/* Mobile Number */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                      <div className="flex">
                        <div className="bg-gray-100 border border-gray-200 rounded-l p-2 text-gray-500">+221</div>
                        <input 
                          type="text" 
                          placeholder="Enter Number" 
                          className="w-full p-2 bg-gray-100 border border-gray-200 rounded-r"
                        />
                      </div>
                    </div>
                    
                    {/* Street Address */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                      <input 
                        type="text" 
                        placeholder="Enter Address" 
                        className="w-full p-2 bg-gray-100 border border-gray-200 rounded"
                      />
                    </div>
                    
                    {/* State */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                      <input 
                        type="text" 
                        placeholder="Enter State" 
                        className="w-full p-2 bg-gray-100 border border-gray-200 rounded"
                      />
                    </div>
                    
                    {/* City */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                      <input 
                        type="text" 
                        placeholder="Enter City" 
                        className="w-full p-2 bg-gray-100 border border-gray-200 rounded"
                      />
                    </div>
                    
                    {/* Pin Code */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Pin Code</label>
                      <input 
                        type="text" 
                        placeholder="Enter Pin Code" 
                        className="w-full p-2 bg-gray-100 border border-gray-200 rounded"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Payment Method */}
            <div className="bg-white rounded-md shadow-sm mb-6">
              <div 
                className="flex justify-between items-center p-4 cursor-pointer border-b"
                onClick={() => setIsPaymentExpanded(!isPaymentExpanded)}
              >
                <h2 className="text-lg font-medium">Select Payment Method</h2>
                {isPaymentExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              
              {isPaymentExpanded && (
                <div className="p-4">
                  {/* Payment methods would go here */}
                  <p className="text-gray-500">Payment options will be displayed here</p>
                </div>
              )}
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-6">
              <button className="text-[#1B4B66] cursor-pointer hover:underline">Back to Cart</button>
              <button 
                className="bg-[#1B4B66] cursor-pointer text-white px-8 py-2 rounded hover:bg-[#144A64] transition"
                onClick={() => navigate('/paiement')}
              >
                Next
              </button>
            </div>
          </div>
          
          {/* Right Column - Order Summary */}
          <div className="w-full md:w-1/3">
            <div className="bg-white rounded-md shadow-sm">
              <div className="p-4 border-b">
                <h2 className="text-lg font-medium">Order Summary</h2>
              </div>
              
              {/* Order Items */}
              <div className="p-4">
                {orderItems.map(item => (
                  <div key={item.id} className="flex mb-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover mr-4 rounded"
                    />
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Order Details */}
              <div className="p-4 border-t">
                <h3 className="font-medium mb-4">Order Details</h3>
                
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Sub Total</span>
                  <span className="font-medium">${orderSummary.subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Discount</span>
                  <span className="font-medium text-red-500">-${orderSummary.discount.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-medium">-${orderSummary.deliveryFee.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between font-bold pt-2 border-t">
                  <span>Grand Total</span>
                  <span>${orderSummary.grandTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}