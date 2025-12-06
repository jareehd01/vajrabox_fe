import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORY_IMAGE_MAPPING } from '../utils/constants';

const CategoryCarouselItem = ({ category }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageUrl = CATEGORY_IMAGE_MAPPING[category.name.toUpperCase()];

  useEffect(() => {
    if (imageUrl) {
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => setIsLoaded(true);
    } else {
      setIsLoaded(true);
    }
  }, [imageUrl]);

  const categoryName = category.name.replace(/_/g, ' ').replace(/"/g, '');

  return (
    <Link
      to={`/category/${category.name.toLowerCase().replace(/ /g, '-')}`}
      className="relative flex-shrink-0 w-64 h-96 bg-gray-200 rounded-t-full p-8 flex flex-col justify-end text-white transform hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden"
    >
      {!isLoaded ? (
        <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
      ) : (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
      <h3 className="relative z-10 text-2xl font-semibold mb-2">{categoryName}</h3>
    </Link>
  );
};

const ShopByCategory = () => {
  const [categories, setCategories] = useState([]);
  const scrollContainer = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories/');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const scroll = (scrollOffset) => {
    scrollContainer.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
  };

  return (
    <div className="py-12 relative">
      <h2 className="text-4xl font-bold text-center tracking-tight text-gray-800">Explore Our Collections</h2>
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
          className="flex overflow-x-auto overflow-y-auto space-x-16 pb-6 pt-6 w-full"
          ref={scrollContainer}
          style={{ scrollbarWidth: 'none' }}
        >
          {categories.length > 0 ? (
            categories.map((category) => (
              <CategoryCarouselItem key={category.id} category={category} />
            ))
          ) : (
            Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="relative flex-shrink-0 w-64 h-96 bg-gray-300 rounded-t-full p-8 animate-pulse"></div>
            ))
          )}
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
