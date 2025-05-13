import React from 'react';
import Img1 from '../assets/collections/col1.png';
import Img2 from '../assets/collections/col2.png';
import Img3 from '../assets/collections/col3.png';
import Img4 from '../assets/collections/col4.png';

const collections = [
  {
    id: 1,
    title: 'Customized',
    image: Img1,
  },
  {
    id: 2,
    title: 'Hand Picked',
    image: Img2,
  },
  {
    id: 3,
    title: 'Top Sales',
    image: Img3,
  },
  {
    id: 4,
    title: 'Deals',
    image: Img4,
  },
];

const Collections = () => {
  return (
    <section className="bg-[#22556B] py-8 px-4 md:px-16" id="collections">
      <h2 className="text-white text-2xl font-semibold mb-6">Featured Collection</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {collections.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:scale-[1.02] hover:shadow-md transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-2 font-bold text-gray-800">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;
