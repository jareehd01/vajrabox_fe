import React, { useRef } from 'react';

const occasions = [
  {
    name: "Father's Day",
    hook: "For the hero in your life",
  },
  {
    name: "Mother's Day",
    hook: "A gift as special as she is",
  },
  {
    name: "Rakshabandhan",
    hook: "Celebrate the sibling bond",
  },
  {
    name: "Christmas",
    hook: "Holiday sparkle for your loved ones",
  },
  {
    name: "Valentine's Day",
    hook: "A token of your love",
  },
  {
    name: "Anniversary",
    hook: "Mark your special milestone",
  },
  {
    name: "Birthday",
    hook: "Make a wish come true",
  },
  {
    name: "Graduation",
    hook: "A gift for a new beginning",
  },
  {
    name: "Marriage",
    hook: "A symbol of your everlasting love",
  },
  {
    name: "Engagement",
    hook: "The perfect start to forever",
  },
];

const ShopByOccasion = () => {
  const scrollContainer = useRef(null);

  const scroll = (scrollOffset) => {
    scrollContainer.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
  };

  return (
    <div className="py-8 relative">
      <h2 className="text-3xl font-bold text-center mb-6">Shop by Occasion</h2>
      <div className="flex items-center justify-center">
        <button
          onClick={() => scroll(-300)}
          className="absolute left-0 z-10 bg-white bg-opacity-75 rounded-full p-2 shadow-md hover:bg-gray-200 active:bg-gray-300 transition-colors duration-300"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div
          className="flex overflow-x-auto space-x-6 pb-4 w-full"
          ref={scrollContainer}
          style={{ scrollbarWidth: 'none' }}
        >
          {occasions.map((occasion) => (
            <div
              key={occasion.name}
              className="flex-shrink-0 w-80 h-96 bg-gray-200 rounded-lg p-6 flex flex-col justify-end text-white bg-opacity-50 shadow-lg"
              style={{
                backgroundColor: 'rgba(0,0,0,0.4)',
              }}
            >
              <h3 className="text-2xl font-semibold">{occasion.name}</h3>
              <p className="text-sm">{occasion.hook}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll(300)}
          className="absolute right-0 z-10 bg-white bg-opacity-75 rounded-full p-2 shadow-md hover:bg-gray-200 active:bg-gray-300 transition-colors duration-300"
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

export default ShopByOccasion;
