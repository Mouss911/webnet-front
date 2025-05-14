import React, { useState } from 'react';

const paymentOptions = [
  { id: 'easypaisa', name: 'Easypaisa', icon: '/easypaisa.png' },
  { id: 'card', name: 'Credit/Debit Card', icon: '/card.png' },
  { id: 'applepay', name: 'Apple Pay', icon: '/applepay.png' },
  { id: 'amazonpay', name: 'Amazon Pay', icon: '/amazonpay.png' },
];

const secondaryPayments = [
  { id: 'jazzcash', name: 'Jazzcash', icon: '/jazzcash.png' },
  { id: 'googlepay', name: 'Google Pay', icon: '/googlepay.png' },
];

const Paiement = () => {
  const [selectedPayment, setSelectedPayment] = useState('easypaisa');
  const [transactionId, setTransactionId] = useState('');
  const [saveForFuture, setSaveForFuture] = useState(true);

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6">
      {/* Left Section */}
      <div className="flex-1 space-y-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600">Home &gt; Checkout</div>

        {/* Title */}
        <h2 className="text-2xl font-semibold">Checkout</h2>

        {/* Contact Information */}
        <details open className="border rounded p-4">
          <summary className="font-medium cursor-pointer">Contact Information</summary>
          <p className="text-sm text-gray-600 mt-2">Your contact info will go here.</p>
        </details>

        {/* Payments */}
        <details open className="border rounded p-4">
          <summary className="font-medium cursor-pointer">Payments</summary>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {paymentOptions.map((option) => (
              <label
                key={option.id}
                className={`border rounded-lg p-4 text-center cursor-pointer ${
                  selectedPayment === option.id ? 'border-blue-600 shadow-md' : ''
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value={option.id}
                  checked={selectedPayment === option.id}
                  onChange={() => setSelectedPayment(option.id)}
                  className="sr-only"
                />
                <img src={option.icon} alt={option.name} className="mx-auto h-6 mb-2" />
                <span>{option.name}</span>
              </label>
            ))}
          </div>

          {/* Extra fields if Easypaisa */}
          {selectedPayment === 'easypaisa' && (
            <div className="mt-6 border rounded-lg p-4 space-y-4">
              <div className="flex items-center gap-3">
                <img src="/easypaisa.png" className="h-6" alt="Easypaisa" />
                <strong>Easypaisa</strong>
              </div>
              <input
                type="text"
                className="w-full border px-4 py-2 rounded"
                placeholder="Enter your transaction id"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
              />
              <p className="text-sm text-gray-500">
                Send amount on <strong>03331222338</strong> & enter transaction ID
              </p>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={saveForFuture}
                  onChange={() => setSaveForFuture(!saveForFuture)}
                  className="mr-2"
                />
                <span>Save this for future transactions</span>
              </label>

              <div className="space-y-4 pt-4 border-t">
                {secondaryPayments.map((pay) => (
                  <label key={pay.id} className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-3">
                      <img src={pay.icon} alt={pay.name} className="h-6" />
                      <span>{pay.name}</span>
                    </div>
                    <input
                      type="radio"
                      name="payment"
                      value={pay.id}
                      checked={selectedPayment === pay.id}
                      onChange={() => setSelectedPayment(pay.id)}
                    />
                  </label>
                ))}
              </div>
            </div>
          )}
        </details>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-4">
          <button className="text-[#1B4B66] cursor-pointer underline">Back to Cart</button>
          <button className="bg-[#1B4B66] cursor-pointer text-white px-6 py-2 rounded">Next</button>
        </div>
      </div>

      {/* Right Section - Summary */}
      <div className="w-full md:w-80 space-y-6">
        <div className="border rounded p-4 space-y-4">
          <h3 className="font-medium">Order Summary</h3>
          {[1, 2].map((_, i) => (
            <div key={i} className="flex gap-4 items-center border-b pb-2">
              <img src="/cup.png" alt="cup" className="w-12 h-12 rounded" />
              <div className="text-sm">
                <div className="font-medium">Name of the cup</div>
                <div className="text-gray-500">Category</div>
                <div>Qty - 1</div>
              </div>
            </div>
          ))}
        </div>

        <div className="border rounded p-4 text-sm space-y-2">
          <h3 className="font-medium mb-2">Order Details</h3>
          <div className="flex justify-between">
            <span>Sub Total</span>
            <span>$119.69</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>-$13.40</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between font-bold pt-2 border-t">
            <span>Grand Total</span>
            <span>$108.29</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paiement;
