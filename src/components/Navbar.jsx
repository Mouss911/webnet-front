import { useState } from "react"
import Logo from "../assets/logo1.png"
import Cart from "./Cart"
import Tof from "../assets/prod.png"

// Icônes SVG inline pour une solution pure React
const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
)

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const ShoppingBagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
)

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
)

function Navbar() {
  // const [isInfoVisible, setIsInfoVisible] = useState(true)
  const [isAlertVisible, setIsAlertVisible] = useState(true);
  const [isCartVisible, setIsCartVisible] = useState(false);

  // Données temporaires du panier
  const cartItems = [
    { brand: "Coach", image: Tof, name: "Leather Coach Bag", price: 54.69, quantity: 1 },
    { brand: "Coach", image: Tof, name: "Leather Coach Bag", price: 54.69, quantity: 1 }
  ];

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <div className="text-[#1B4B66] font-bold text-xl flex items-center">
            <img 
              src={Logo} 
              alt="Webnet Logo" 
              className="mr-1 w-6 h-6 hover:brightness-110 transition-all"
            />
            WEBNET
          </div>
        </a>

        {/* Navigation Items */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm font-medium hover:text-[#1B4B66]">
            Item 1
          </a>
          <a href="#" className="text-sm font-medium hover:text-[#1B4B66]">
            Item 2
          </a>
          <a href="#" className="text-sm font-medium hover:text-[#1B4B66]">
            Item 3
          </a>
          <a href="#" className="text-sm font-medium hover:text-[#1B4B66]">
            Item 4
          </a>
          <a href="#" className="text-sm font-medium hover:text-[#1B4B66]">
            Item 5
          </a>
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block w-64">
            <div className="absolute left-2 top-2.5 h-4 w-4 text-gray-400">
              <SearchIcon />
            </div>
            <input
              type="search"
              placeholder="Search for products or brands..."
              className="w-full py-2 pl-8 pr-4 text-sm bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="p-2 text-gray-700 hover:text-[#1B4B66] cursor-pointer">
            <HeartIcon />
            <span className="sr-only">Wishlist</span>
          </button>
          <button className="p-2 text-gray-700 hover:text-[#1B4B66] cursor-pointer">
            <UserIcon />
            <span className="sr-only">Account</span>
          </button>
          <button 
            className="p-2 text-gray-700 hover:text-[#1B4B66] cursor-pointer"
            onClick={() => setIsCartVisible(!isCartVisible)}
          >
            <ShoppingBagIcon />
            <span className="sr-only">Cart</span>
          </button>

          {isCartVisible && (
            <>
              <div 
                className="fixed inset-0 bg-black/50 z-40" 
                onClick={() => setIsCartVisible(false)}
              />
              <Cart 
                items={cartItems} 
                onClose={() => setIsCartVisible(false)}
              />
            </>
          )}
        </div>
      </div>

      {/* Alert Banner */}
      {isAlertVisible && (
        <div className="w-full bg-gray-100 py-2 px-4 text-center text-sm">
          <p>
            We are currently experiencing local customs clearance delays. For the latest updates, please check your
            order status{" "}
            <a href="#" className="text-blue-700 underline">
              here
            </a>
          </p>
        </div>
      )}
    </div>
  )
}

export default Navbar