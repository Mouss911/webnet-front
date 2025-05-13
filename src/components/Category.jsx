import { useState } from 'react';
import { ChevronDown, Star, Heart, Grid, List } from 'lucide-react';
import Back from '../assets/base.png';
import Cup from '../assets/product-image.png';
import { Link } from 'react-router-dom';

export default function Category() {
  const [activeFilters, setActiveFilters] = useState({
    size: false,
    color: true,
    brand: false,
    priceRange: false,
    discount: false
  });

  const toggleFilter = (filter) => {
    setActiveFilters({...activeFilters, [filter]: !activeFilters[filter]});
  };
  
  const mugs = [
    {
      id: 1,
      name: "Fill Me Up With Coffee/Tea Mug",
      category: "Category",
      rating: 4.5,
      reviews: 43,
      price: 39.49,
      originalPrice: 78.98,
      discount: "50% OFF",
      image: Cup
    },
    {
      id: 2,
      name: "Fill Me Up With Coffee/Tea Mug",
      category: "Category",
      rating: 4.3,
      reviews: 43,
      price: 39.49,
      originalPrice: 78.98,
      discount: "50% OFF",
      image: Cup
    },
    {
      id: 3,
      name: "Fill Me Up With Coffee/Tea Mug",
      category: "Category",
      rating: 4.6,
      reviews: 43,
      price: 39.49,
      originalPrice: 78.98,
      discount: "50% OFF",
      image: Cup
    },
    {
      id: 4,
      name: "Fill Me Up With Coffee/Tea Mug",
      category: "Category",
      rating: 4.6,
      reviews: 43,
      price: 39.49,
      originalPrice: 78.98,
      discount: "50% OFF",
      image: Cup
    },
    {
      id: 5,
      name: "Fill Me Up With Coffee/Tea Mug",
      category: "Category",
      rating: 4.6,
      reviews: 43,
      price: 39.49,
      originalPrice: 78.98,
      discount: "50% OFF",
      image: Cup
    },
    {
      id: 6,
      name: "Fill Me Up With Coffee/Tea Mug",
      category: "Category",
      rating: 4.6,
      reviews: 43,
      price: 39.49,
      originalPrice: 78.98,
      discount: "50% OFF",
      image: Cup
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i}
          size={16}
          fill={i < Math.floor(rating) ? "#ffc107" : "none"}
          color={i < Math.floor(rating) ? "#ffc107" : "#d1d5db"}
          className={i < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"}
        />
      );
    }
    return stars;
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      {/* Banner */}
      <div className="bg-gray-200 p-4 flex items-center mb-6">
        <div className="flex-1">
          <img src={Back} alt="Mugs" className="h-60 object-cover rounded-2xl" />
        </div>
        <div className="flex-1 text-right">
          <h1 className="text-4xl font-bold text-black">UPTO 70% OFF</h1>
          <h2 className="text-3xl text-black">BLACK FRIDAY</h2>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4">
        <div className="text-sm mb-4">
          <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-600">Mugs Category</span>
        </div>

        {/* Category Header */}
        <h1 className="text-2xl font-medium text-gray-800 mb-6">Category 1</h1>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters */}
          <div className="w-full md:w-1/4">
            {/* Size Filter */}
            <div className="mb-4 border border-gray-200 rounded">
              <div 
                className="flex justify-between items-center p-3 cursor-pointer"
                onClick={() => toggleFilter('size')}
              >
                <h3 className="font-medium">Size</h3>
                <ChevronDown size={20} className={`transform transition-transform ${activeFilters.size ? 'rotate-180' : ''}`} />
              </div>
              {activeFilters.size && (
                <div className="p-3 border-t border-gray-200">
                  {/* Size filter content would go here */}
                  <p className="text-gray-500">Size options...</p>
                </div>
              )}
            </div>

            {/* Color Filter */}
            <div className="mb-4 border border-gray-200 rounded">
              <div 
                className="flex justify-between items-center p-3 cursor-pointer"
                onClick={() => toggleFilter('color')}
              >
                <h3 className="font-medium">Color</h3>
                <ChevronDown size={20} className={`transform transition-transform ${activeFilters.color ? 'rotate-180' : ''}`} />
              </div>
              {activeFilters.color && (
                <div className="p-3 border-t border-gray-200">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="blue" className="mr-2" />
                      <label htmlFor="blue">Blue</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="maroon-red" className="mr-2" />
                      <label htmlFor="maroon-red">Maroon Red</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="crimson-red" className="mr-2" />
                      <label htmlFor="crimson-red">Crimson Red</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="selima-pink" className="mr-2" />
                      <label htmlFor="selima-pink">Selima Pink</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="teal" className="mr-2" />
                      <label htmlFor="teal">Teal</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="aquamarine" className="mr-2" />
                      <label htmlFor="aquamarine">Aquamarine</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="off-white" className="mr-2" />
                      <label htmlFor="off-white">Off-White</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="mauve-orange" className="mr-2" />
                      <label htmlFor="mauve-orange">Mauve Orange</label>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Brand Filter */}
            <div className="mb-4 border border-gray-200 rounded">
              <div 
                className="flex justify-between items-center p-3 cursor-pointer"
                onClick={() => toggleFilter('brand')}
              >
                <h3 className="font-medium">Brand</h3>
                <ChevronDown size={20} className={`transform transition-transform ${activeFilters.brand ? 'rotate-180' : ''}`} />
              </div>
              {activeFilters.brand && (
                <div className="p-3 border-t border-gray-200">
                  {/* Brand filter content would go here */}
                  <p className="text-gray-500">Brand options...</p>
                </div>
              )}
            </div>

            {/* Price Range Filter */}
            <div className="mb-4 border border-gray-200 rounded">
              <div 
                className="flex justify-between items-center p-3 cursor-pointer"
                onClick={() => toggleFilter('priceRange')}
              >
                <h3 className="font-medium">Price Range</h3>
                <ChevronDown size={20} className={`transform transition-transform ${activeFilters.priceRange ? 'rotate-180' : ''}`} />
              </div>
              {activeFilters.priceRange && (
                <div className="p-3 border-t border-gray-200">
                  {/* Price range filter content would go here */}
                  <p className="text-gray-500">Price slider...</p>
                </div>
              )}
            </div>

            {/* Discount Filter */}
            <div className="mb-4 border border-gray-200 rounded">
              <div 
                className="flex justify-between items-center p-3 cursor-pointer"
                onClick={() => toggleFilter('discount')}
              >
                <h3 className="font-medium">Discount</h3>
                <ChevronDown size={20} className={`transform transition-transform ${activeFilters.discount ? 'rotate-180' : ''}`} />
              </div>
              {activeFilters.discount && (
                <div className="p-3 border-t border-gray-200">
                  {/* Discount filter content would go here */}
                  <p className="text-gray-500">Discount options...</p>
                </div>
              )}
            </div>

            {/* Availability Filter */}
            <div className="mb-4 border border-gray-200 rounded">
              <div 
                className="flex justify-between items-center p-3 cursor-pointer"
                onClick={() => toggleFilter('availability')}
              >
                <h3 className="font-medium">Availability</h3>
                <ChevronDown size={20} className={`transform transition-transform ${activeFilters.availability ? 'rotate-180' : ''}`} />
              </div>
              {activeFilters.availability && (
                <div className="p-3 border-t border-gray-200">
                  {/* Availability filter content would go here */}
                  <p className="text-gray-500">Availability options...</p>
                </div>
              )}
            </div>
          </div>

          {/* Products */}
          <div className="w-full md:w-3/4">
            {/* Controls */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <button className="p-1 bg-blue-100 rounded">
                  <Grid size={20} className="text-blue-600" />
                </button>
                <button className="p-1">
                  <List size={20} className="text-gray-400" />
                </button>
                <span className="text-sm text-gray-600 ml-2">Showing 1 - 40 of 145 items</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <span className="text-sm text-gray-600 mr-2">To Show:</span>
                  <input type="number" value="0" className="w-12 p-1 border border-gray-300 rounded" />
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-gray-600 mr-2">Sort By:</span>
                  <select className="p-2 border border-gray-300 rounded">
                    <option>Position</option>
                    <option>Price</option>
                    <option>Rating</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mugs.map(mug => (
                <Link to="/detail" key={mug.id} className="cursor-pointer">
                  <div className="border border-gray-200 rounded-md p-4 relative mb-2">
                    <div className="relative mb-4">
                      <img 
                        src={mug.image} 
                        alt={mug.name} 
                        className="w-full h-48 object-contain"
                      />
                      <button 
                        className="absolute top-2 right-2 p-1 rounded-full bg-white"
                        onClick={(e) => {
                          e.preventDefault(); // Empêche la navigation lors du clic sur le coeur
                          // Logique pour ajouter aux favoris
                        }}
                      >
                        <Heart size={20} className="text-gray-500" />
                      </button>
                    </div>
                    <div>
                      <h3 className="font-medium">{mug.name}</h3>
                      <p className="text-sm text-gray-500">{mug.category}</p>
                      <div className="flex items-center mt-1 mb-2">
                        {renderStars(mug.rating)}
                        <span className="text-sm text-gray-500 ml-1">{mug.reviews} Ratings</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-bold mr-2">${mug.price}</span>
                        <span className="text-gray-500 line-through text-sm mr-2">${mug.originalPrice}</span>
                        <span className="text-red-500 text-sm">{mug.discount}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}