import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Cup from '../assets/prod.png';

export default function MyCart() {
  const navigate = useNavigate();
  const [isCouponExpanded, setIsCouponExpanded] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  
  // Sample cart items
  const cartItems = [
    {
      id: 1,
      name: "Coach",
      description: "Leather Coach Bag",
      quantity: 1,
      price: 54.69,
      image: Cup
    },
    {
      id: 2,
      name: "Coach",
      description: "Leather Coach Bag",
      quantity: 1,
      price: 54.69,
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

  // Calculate individual subtotals
  const getSubtotal = (item) => {
    return (item.price * item.quantity).toFixed(2);
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen p-4">
      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto mb-6">
        <div className="flex items-center text-sm py-2">
          <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">My Cart</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-medium text-gray-800 mb-6">My Cart</h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column - Cart Items */}
          <div className="w-full md:w-2/3">
            {/* Cart Items Table */}
            <div className="bg-white rounded-md shadow-sm mb-6 overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left py-3 px-4">Product Name</th>
                    <th className="text-left py-3 px-4">Price</th>
                    <th className="text-left py-3 px-4">Qty</th>
                    <th className="text-left py-3 px-4">Subtotal</th>
                    <th className="py-3 px-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-16 h-16 object-cover mr-4"
                          />
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-gray-600">{item.description}</p>
                            <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">${item.price.toFixed(2)}</td>
                      <td className="py-4 px-4">{item.quantity}</td>
                      <td className="py-4 px-4">${getSubtotal(item)}</td>
                      <td className="py-4 px-4">
                        <div className="flex flex-col space-y-2">
                          <button className="text-blue-600 text-sm hover:underline">Move to Wishlist</button>
                          <button className="text-red-600 text-sm hover:underline">Remove</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Coupon Code */}
            <div className="bg-white rounded-md shadow-sm mb-6">
              <div 
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => setIsCouponExpanded(!isCouponExpanded)}
              >
                <h2 className="text-lg font-medium">Apply Coupon Code</h2>
                <ChevronDown 
                  size={20} 
                  className={`transform transition-transform ${isCouponExpanded ? 'rotate-180' : ''}`} 
                />
              </div>
              
              {isCouponExpanded && (
                <div className="p-4 border-t">
                  <div className="flex">
                    <input 
                      type="text" 
                      placeholder="Apply Coupon Code" 
                      className="flex-1 p-2 bg-gray-100 border border-gray-200 rounded-l"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-r border border-gray-300 font-medium">
                      CHECK
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Right Column - Order Summary */}
          <div className="w-full md:w-1/3">
            <div className="bg-white rounded-md shadow-sm sticky top-4">
              <div className="p-4 border-b">
                <h2 className="text-lg font-medium">Order Summary</h2>
              </div>
              
              {/* Order Details */}
              <div className="p-4">                
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Sub Total</span>
                  <span className="font-medium">${orderSummary.subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Discount</span>
                  <span className="font-medium text-red-500">-${orderSummary.discount.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-medium">-${orderSummary.deliveryFee.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between font-medium pt-2 border-t mb-4">
                  <span>Grand Total</span>
                  <span>${orderSummary.grandTotal.toFixed(2)}</span>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col space-y-3">
                  <button 
                    className="bg-[#1B4B66] cursor-pointer text-white p-3 rounded text-center w-full hover:bg-[#144A64] transition"
                    onClick={() => navigate('/checkout')}
                  >
                    Place Order
                  </button>
                  <button className="border border-[#1B4B66] cursor-pointer text-[#1B4B66] p-3 rounded text-center w-full hover:bg-blue-50 transition">
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}