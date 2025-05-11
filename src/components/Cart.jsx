import React from 'react';
import { ChevronLeft, X } from 'lucide-react';

const Cart = ({ items, onClose }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = 2.0;
  const total = subtotal + tax;

  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg z-50 p-4 overflow-y-auto">
      {/* Back button */}
      <div className="flex items-center space-x-2 mb-6 cursor-pointer text-sm font-medium text-gray-700 hover:text-black">
        <ChevronLeft size={20} />
        <span>Back</span>
      </div>

      {/* Items */}
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between border-b pb-4">
            {/* Left: Image */}
            <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>

            {/* Middle: Infos */}
            <div className="flex-1 px-3">
              <h3 className="font-semibold text-sm">{item.brand}</h3>
              <p className="text-xs text-gray-500">{item.name}</p>
              <div className="flex items-center mt-2 border rounded w-fit">
                <button className="px-2">−</button>
                <span className="px-2">{item.quantity}</span>
                <button className="px-2">+</button>
              </div>
            </div>

            {/* Right: Price and close */}
            <div className="flex flex-col items-end justify-between">
              <button className="text-gray-400 hover:text-red-500">
                <X size={16} />
              </button>
              <span className="text-sm font-semibold">${item.price.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Tax:</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-base">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Coupon + buttons */}
      <div className="mt-6 space-y-3">
        <div className="flex">
          <input
            type="text"
            placeholder="Apply Coupon Code"
            className="flex-1 border rounded-l px-3 py-2 text-sm"
          />
          <button className="bg-gray-200 text-sm px-4 py-2 rounded-r hover:bg-gray-300 cursor-pointer">
            CHECK
          </button>
        </div>

        <button className="w-full bg-[#003F5E] cursor-pointer text-white py-2 rounded font-semibold text-sm hover:bg-[#002c43]">
          Place Order
        </button>
        <button className="w-full text-sm cursor-pointer text-[#003F5E] underline hover:text-[#002c43]">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Cart;
