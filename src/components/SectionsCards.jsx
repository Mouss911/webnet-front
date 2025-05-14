// src/components/SectionBanners.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image1 from '../assets/sections/section1.png';
import Image2 from '../assets/sections/section2.png';

const sections = [
  {
    id: 1,
    title: 'Lorem Ipsum\nSection 1',
    bgImage: Image1,
    textColor: 'text-pink-700',
  },
  {
    id: 2,
    title: 'Lorem Ipsum\nSection 2',
    bgImage: Image2,
    textColor: 'text-blue-800',
  },
];

const SectionCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-8">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`rounded-xl flex items-center justify-between p-4 bg-cover bg-center`}
          style={{ backgroundImage: `url(${section.bgImage})`, minHeight: '130px' }}
        >
          <div className="flex-1 text-right">
            <p className={`whitespace-pre-line text-lg font-bold ${section.textColor}`}>
              {section.title}
            </p>
            <div className="mt-4 ml-auto w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md">
              <ArrowRight className={`w-4 h-4 cursor-pointer ${section.textColor}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionCards;
