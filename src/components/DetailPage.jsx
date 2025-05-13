import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaCartPlus } from "react-icons/fa";
import Foto from '../assets/product-image.png';
import Thumb from '../assets/prod.png';

const DetailPage = () => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { key: "description", label: "Product Description" },
    { key: "related", label: "Related Products" },
    { key: "reviews", label: "Ratings and Reviews" },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto font-sans">
      {/* Breadcrumb */}
      <div className="text-sm mb-4">
        <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/products" className="text-blue-600 hover:text-blue-800">Mugs</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600">Customise</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Image & thumbnails */}
        <div>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img src={Foto} alt="Mug" className="w-full" />
          </div>

          {/* Thumbnails */}
          <div className="flex items-center justify-between mt-4">
            <FaChevronLeft className="text-gray-500 cursor-pointer" />
            <div className="flex space-x-2">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={Thumb} className="w-14 h-14 rounded border" alt={`thumb-${i}`} />
              ))}
            </div>
            <FaChevronRight className="text-gray-500 cursor-pointer" />
          </div>
        </div>

        {/* Right: Product Info */}
        <div>
          <h1 className="text-xl font-semibold mb-1">Fill me up with coffee</h1>
          <p className="text-sm text-gray-500 mb-2">Category 1</p>

          {/* Stars */}
          <div className="flex items-center space-x-2 mb-3">
            <div className="text-orange-400">★★★★☆</div>
            <span className="text-sm text-gray-400">(250) Ratings</span>
          </div>

          {/* Pricing */}
          <div className="mb-4">
            <span className="text-2xl font-bold text-gray-900">$54.69</span>
            <span className="line-through ml-3 text-gray-400">$78.66</span>
            <span className="text-red-600 ml-2 text-sm font-semibold">50% OFF</span>
          </div>

          {/* Tagline */}
          <div className="flex items-center mb-4">
            <input type="text" placeholder="Write Customised Tagline" className="border rounded p-2 flex-grow" />
            <button className="ml-2 px-3 py-2 bg-gray-200 rounded text-sm font-semibold">CHECK</button>
          </div>

          {/* Quantity */}
          <div className="mb-4">
            <span className="block font-medium text-sm mb-1">Quantity:</span>
            <div className="flex items-center gap-2">
              <button className="border px-3 py-1 rounded text-lg">−</button>
              <span className="px-3">1</span>
              <button className="border px-3 py-1 rounded text-lg">+</button>
            </div>
          </div>

          {/* Mug Color + Upload (same row) */}
          <div className="flex gap-4 mb-4">
            {/* Mug Color */}
            <div className="flex-1 border border-gray-200 shadow-sm rounded-md p-4">
              <p className="text-sm font-medium mb-2">Choose Mug Color</p>
              <div className="flex gap-2">
                <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-white cursor-pointer" />
                <div className="w-6 h-6 bg-black rounded-full border-2 border-white cursor-pointer" />
                <div className="w-6 h-6 bg-[#003F5E] rounded-full border-2 border-white cursor-pointer" />
                <button className="w-6 h-6 border-2 border-gray-400 rounded-full text-center text-sm font-bold text-gray-600">+</button>
              </div>
            </div>

            {/* Upload */}
            <div className="flex-1 border border-gray-200 shadow-sm rounded-md p-4 flex items-center justify-center text-sm text-gray-600 cursor-pointer hover:bg-gray-50">
              Upload Your Design / Picture
              <span className="ml-2">📤</span>
            </div>
          </div>

          {/* Mug Size + Gift Wrap (same row) */}
          <div className="flex gap-4 mb-4">
            {/* Mug Size */}
            <div className="flex-1 border border-gray-200 shadow-sm rounded-md p-4">
              <p className="text-sm font-medium mb-2">Choose Mug Size</p>
              <div className="flex gap-2">
                {["S", "M", "L", "XL"].map(size => (
                  <button key={size} className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">{size}</button>
                ))}
              </div>
            </div>

            {/* Gift Wrap */}
            <div className="flex-1 border border-gray-200 shadow-sm rounded-md p-4">
              <p className="text-sm font-medium mb-2">Wrap Your Mug As Gift</p>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-sm">100Rs Extra</span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="flex items-center justify-center cursor-pointer gap-2 px-6 py-3 bg-[#1B4B66] text-white rounded-md hover:bg-[#144A64] transition">
              <FaCartPlus /> Add to Cart
            </button>
            <button className="px-6 py-3 border border-[#1B4B66] cursor-pointer rounded-md hover:bg-gray-100">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Tabs at bottom */}
      <div className="mt-12">
        <div className="flex gap-4 border-b mb-4">
          {tabs.map(tab => (
            <button
              key={tab.key}
              className={`px-4 py-2 rounded-t-md ${
                activeTab === tab.key
                  ? "bg-[#1B4B66] text-white"
                  : "text-gray-600 hover:text-[#1B4B66]"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="text-sm text-gray-700">
          {activeTab === "description" && (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at erat vel nisi tempor facilisis. Vivamus pretium nisl ac purus porttitor, id dictum risus feugiat.
            </p>
          )}
          {activeTab === "related" && <p>Related product suggestions will go here.</p>}
          {activeTab === "reviews" && <p>Ratings and reviews from customers will be shown here.</p>}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
