import React, { useRef } from 'react';
import { JEWELLERY_CATEGORIES } from '../utils/constants';
import { Link } from 'react-router-dom';

const categories = Object.keys(JEWELLERY_CATEGORIES);

const ShopByCategory = () => {
  const scrollContainer = useRef(null);

  const scroll = (scrollOffset) => {
    scrollContainer.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
  };

  return (
    <div className="py-12 relative h-112">
      <h2 className="text-4xl font-bold text-center mb-10 tracking-tight text-gray-800">Explore Our Collections</h2>
      <div className="flex items-center justify-center">
        <button
          onClick={() => scroll(-300)}
          className="absolute left-0 z-10 bg-white bg-opacity-75 rounded-full p-2 shadow-lg hover:bg-gray-200 active:bg-gray-300 transition-colors duration-300"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div
          className="flex overflow-x-auto space-x-16 pb-6 w-full"
          ref={scrollContainer}
          style={{ scrollbarWidth: 'none' }}
        >
          {categories.map((category) => (
            <Link to={`/category/${category.toLowerCase().replace(/ /g, '-')}`} key={category} className="flex-shrink-0 w-52 h-96 bg-gray-200 rounded-t-full p-8 flex flex-col justify-end text-white shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
              style={{
                backgroundColor: 'rgba(0,0,0,0.5)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h3 className="text-2xl font-semibold mb-2">{category.replace(/_/g, ' ').replace(/\" /g, '')}</h3>
            </Link>
          ))}
        </div>
        <button
          onClick={() => scroll(300)}
          className="absolute right-0 z-10 bg-white bg-opacity-75 rounded-full p-2 shadow-lg hover:bg-gray-200 active:bg-gray-300 transition-colors duration-300"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ShopByCategory;