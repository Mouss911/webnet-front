import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Cup from '../assets/prod.png';
import Amazon from '../assets/payment/amazon.png';
import Apple from '../assets/payment/apple.png';
import Easy1 from '../assets/payment/easy1.png';
import Easy2 from '../assets/payment/easy2.png';
import Google from '../assets/payment/ggpay.png';
import Jazzcash from '../assets/payment/jazz.png';

export default function Paiement() {
  const [expandedContact, setExpandedContact] = useState(true);
  const [expandedPayments, setExpandedPayments] = useState(true);
  const [selectedPayment, setSelectedPayment] = useState('easypay');
  const [saveTransaction, setSaveTransaction] = useState(true);
  const [transactionId, setTransactionId] = useState('');

  const toggleContact = () => setExpandedContact(!expandedContact);
  const togglePayments = () => setExpandedPayments(!expandedPayments);

  const orderItems = [
    { name: "Name of the cup", category: "Category", qty: 1 },
    { name: "Name of the cup", category: "Category", qty: 1 }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* <div className="text-sm breadcrumbs mb-2">
        <ul className="flex space-x-2">
          <li><a href="#" className="text-blue-600">Home</a></li>
          <li className="before:content-['>'] before:mx-2">Checkout</li>
        </ul>
      </div> */}
      <div className="text-sm mb-4 mt-2">
        <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600">Checkout</span>
      </div>

      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          {/* Contact Information */}
          <div className="border rounded-md overflow-hidden">
            <div 
              className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
              onClick={toggleContact}
            >
              <h2 className="font-medium">Contact Information</h2>
              {expandedContact ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            {expandedContact && (
              <div className="p-4">
                {/* Contact form would go here */}
              </div>
            )}
          </div>

          {/* Payments */}
          <div className="border rounded-md overflow-hidden">
            <div 
              className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
              onClick={togglePayments}
            >
              <h2 className="font-medium">Payments</h2>
              {expandedPayments ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            {expandedPayments && (
              <div className="p-4">
                <div className="grid grid-cols-4 gap-2 mb-6">
                  <div 
                    className={`border rounded-md p-3 flex flex-col items-center cursor-pointer ${selectedPayment === 'easypay' ? 'border-blue-500 bg-blue-50' : ''}`}
                    onClick={() => setSelectedPayment('easypay')}
                  >
                    <div className="relative mb-1">
                      <img src={Easy2} alt="Easypay" className="object-contain h-8" />
                      {selectedPayment === 'easypay' && (
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                    <span className="text-xs">Easypay</span>
                  </div>
                  
                  <div 
                    className={`border rounded-md p-3 flex flex-col items-center cursor-pointer ${selectedPayment === 'card' ? 'border-blue-500 bg-blue-50' : ''}`}
                    onClick={() => setSelectedPayment('card')}
                  >
                    <div className="mb-1">
                      <div className="w-10 h-6 border rounded flex items-center justify-center">
                        <div className="w-6 h-3 border rounded"></div>
                      </div>
                    </div>
                    <span className="text-xs">Credit/Debit Card</span>
                  </div>
                  
                  <div 
                    className={`border rounded-md p-3 flex flex-col items-center cursor-pointer ${selectedPayment === 'apple' ? 'border-blue-500 bg-blue-50' : ''}`}
                    onClick={() => setSelectedPayment('apple')}
                  >
                    <div className="mb-1">
                      <img src={Apple} alt="Apple Pay" className="object-contain h-8" />
                    </div>
                    <span className="text-xs">Apple Pay</span>
                  </div>
                  
                  <div 
                    className={`border rounded-md p-3 flex flex-col items-center cursor-pointer ${selectedPayment === 'amazon' ? 'border-blue-500 bg-blue-50' : ''}`}
                    onClick={() => setSelectedPayment('amazon')}
                  >
                    <div className="mb-1">
                      <img src={Amazon} alt="Amazon Pay" className="object-contain h-8" />
                    </div>
                    <span className="text-xs">Amazon Pay</span>
                  </div>
                </div>

                <div className="border rounded-md mb-2">
                  <div className="p-4 border-b">
                    <div className="flex items-center space-x-3">
                      <img src={Easy1} alt="Easypay" className="h-8 w-8" />
                      <span>Easypay</span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <input 
                      type="text" 
                      placeholder="Enter your transaction id" 
                      className="w-full p-2 mb-2 border rounded"
                      value={transactionId}
                      onChange={(e) => setTransactionId(e.target.value)}
                    />
                    <p className="text-xs text-gray-500 mb-3">Example ID: 0123412341234 | Ref: Transaction ID</p>
                    
                    <div className="flex items-center mb-6">
                      <input 
                        type="checkbox" 
                        id="saveTransaction" 
                        checked={saveTransaction}
                        onChange={() => setSaveTransaction(!saveTransaction)}
                        className="mr-2 h-4 w-4"
                      />
                      <label htmlFor="saveTransaction" className="text-sm">Save this for future transactions</label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="border rounded-md p-4 flex items-center justify-between cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <img src={Jazzcash} alt="Jazzcash" className="h-8 w-8" />
                      <span>Jazzcash</span>
                    </div>
                    <div className="h-4 w-4 border rounded-full"></div>
                  </div>
                  
                  <div className="border rounded-md p-4 flex items-center justify-between cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <img src={Google} alt="Google Pay" className="h-8 w-8" />
                      <span>Google Pay</span>
                    </div>
                    <div className="h-4 w-4 border rounded-full"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className="md:col-span-1">
          <div className="border rounded-md p-4">
            <h2 className="font-medium mb-4">Order Summary</h2>
            
            <div className="space-y-4 mb-4">
              {orderItems.map((item, index) => (
                <div key={index} className="flex space-x-3">
                  <div className="w-12 h-12 bg-gray-100 rounded">
                    <img src={Cup} alt="cup" />
                  </div>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.category}</p>
                    <p className="text-sm">Qty: {item.qty}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="font-medium mb-2">Order Details</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Sub Total</span>
                <span>$119.69</span>
              </div>
              <div className="flex justify-between text-red-500">
                <span>Discount</span>
                <span>-$13.40</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between font-bold pt-2 border-t">
                <span>Grand Total</span>
                <span>$106.29</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button className="text-[#1B4B66] cursor-pointer">Back to Cart</button>
        <button className="bg-[#1B4B66] cursor-pointer text-white py-2 px-6 rounded">Next</button>
      </div>
    </div>
  );
}