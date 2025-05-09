import React from 'react';
import Image1 from '../assets/arrivals/image1.png';
import Image2 from '../assets/arrivals/image2.png';
import Image3 from '../assets/arrivals/image3.png';
import Image4 from '../assets/arrivals/image4.png';

const products = [
  {
    id: 1,
    name: 'Grande',
    desc: 'Blossom Pouch',
    price: '$39.49',
    image: Image1,
  },
  {
    id: 2,
    name: 'Coach',
    desc: 'Leather Coach Bag',
    price: '$54.69',
    image: Image2,
  },
  {
    id: 3,
    name: 'Remus',
    desc: 'Brown Strap Bag',
    price: '$57.00',
    image: Image3,
  },
  {
    id: 4,
    name: 'Boujee',
    desc: 'Black Bag',
    price: '$56.49',
    image: Image4,
  },
];

const NewArrivals = () => {
  return (
    <section className="py-10 px-4 md:px-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">New Arrivals</h2>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          View All →
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow rounded-md overflow-hidden group relative">
            <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-sm font-semibold">{product.name}</h3>
              <p className="text-gray-500 text-sm">{product.desc}</p>
              <p className="mt-1 font-medium">{product.price}</p>
            </div>
            <button className="absolute bottom-17 right-3 text-gray-400 hover:text-red-500">
              ♥
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
