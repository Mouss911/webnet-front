import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/hero.jpg';

const HeroBanner = () => {
  return (
    <div
      id='hero'
      className="relative w-full h-screen bg-center bg-cover flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-transparent p-6 rounded-md text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">BLACK FRIDAY</h1>
        <p className="text-lg md:text-xl mb-6">
          We know how large objects will act, but things on a <br /> small scale just do not act that way.
        </p>
        <Link to="/products">
          <button className="bg-white text-gray-900 font-semibold px-6 py-2 rounded cursor-pointer hover:bg-gray-100 border border-blue-600">
            See All Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;
