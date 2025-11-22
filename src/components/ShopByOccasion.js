import React, { useRef } from 'react';

const occasions = [
  {
    name: "Father's Day",
    hook: "Honor His Legacy: A token of appreciation for the man who has everything.",
  },
  {
    name: "Mother's Day",
    hook: "Celebrate Her Radiance: A gift that mirrors her inner sparkle.",
  },
  {
    name: "Rakshabandhan",
    hook: "The Unbreakable Bond: A timeless symbol of sibling love and protection.",
  },
  {
    name: "Christmas",
    hook: "A Season of Splendor: Gifts that capture the magic of the holidays.",
  },
  {
    name: "Valentine's Day",
    hook: "Eternal Devotion: Express your love with a gift that lasts forever.",
  },
  {
    name: "Anniversary",
    hook: "A Milestone in Brilliance: Commemorate your journey with a treasure to be cherished.",
  },
  {
    name: "Birthday",
    hook: "A Year of You: A personal indulgence to celebrate your own unique story.",
  },
  {
    name: "Graduation",
    hook: "The Dawn of a New Era: Mark their achievement with a symbol of their bright future.",
  },
  {
    name: "Marriage",
    hook: "A Vow of Forever: The ultimate expression of a love that knows no bounds.",
  },
  {
    name: "Engagement",
    hook: "The Promise of a Lifetime: Begin your forever with a diamond that speaks volumes.",
  },
];

const ShopByOccasion = () => {
  const scrollContainer = useRef(null);

  const scroll = (scrollOffset) => {
    scrollContainer.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
  };

  return (
    <div className="py-12 relative">
      <h2 className="text-4xl font-bold text-center mb-10 tracking-tight text-gray-800">Curated for Life's Defining Moments</h2>
      <div className="flex items-center justify-center">
        <button
          onClick={() => scroll(-300)}
          className="absolute left-0 z-10 bg-white bg-opacity-75 rounded-full p-2 shadow-lg hover:bg-gray-200 active:bg-gray-300 transition-colors duration-300"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div
          className="flex overflow-x-auto space-x-8 pb-6 w-full"
          ref={scrollContainer}
          style={{ scrollbarWidth: 'none' }}
        >
          {occasions.map((occasion) => (
            <div
              key={occasion.name}
              className="flex-shrink-0 w-96 h-96 bg-gray-300 rounded-lg p-8 flex flex-col justify-end text-white shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
              style={{
                backgroundColor: 'rgba(0,0,0,0.5)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // You might want to add background images for each occasion here
              }}
            >
              <h3 className="text-3xl font-semibold mb-2">{occasion.name}</h3>
              <p className="text-lg">{occasion.hook}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll(300)}
          className="absolute right-0 z-10 bg-white bg-opacity-75 rounded-full p-2 shadow-lg hover:bg-gray-200 active:bg-gray-300 transition-colors duration-300"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ShopByOccasion;