import React, { useState, useEffect, useRef } from 'react';

const occasions = [
  {
    name: "Father's Day",
    imageUrl: "https://i.pinimg.com/1200x/62/21/6a/62216aa3ba8d585cdb165679a70a7574.jpg",
    hook: "Honor His Legacy: A token of appreciation for the man who has everything.",
  },
  {
    name: "Mother's Day",
    imageUrl: "https://i.pinimg.com/1200x/27/3a/87/273a8786a7bf7d81e7ba5e113d0855b8.jpg",
    hook: "Celebrate Her Radiance: A gift that mirrors her inner sparkle.",
  },
  {
    name: "Rakshabandhan",
    imageUrl: "https://i.pinimg.com/736x/04/94/e1/0494e15847f77ef1925a9a83f44da9cf.jpg",
    hook: "The Unbreakable Bond: A timeless symbol of sibling love and protection.",
  },
  {
    name: "Christmas",
    imageUrl: "https://i.pinimg.com/1200x/53/ef/91/53ef91733471fe484dabef11a06c8611.jpg",
    hook: "A Season of Splendor: Gifts that capture the magic of the holidays.",
  },
  {
    name: "Valentine's Day",
    imageUrl: "https://i.pinimg.com/736x/e4/87/e8/e487e8fa8c7c7e0f9bc5e27920a6c00b.jpg",
    hook: "Eternal Devotion: Express your love with a gift that lasts forever.",
  },
  {
    name: "Anniversary",
    imageUrl: "https://i.pinimg.com/736x/21/aa/aa/21aaaab38b3ada5a2c8d596a93d36c49.jpg",
    hook: "A Milestone in Brilliance: Commemorate your journey with a treasure to be cherished.",
  },
  {
    name: "Birthday",
    imageUrl: "https://i.pinimg.com/1200x/13/85/c3/1385c3fa10c92c4da00626cd970e160e.jpg",
    hook: "A Year of You: A personal indulgence to celebrate your own unique story.",
  },
  {
    name: "Marriage",
    imageUrl: "https://i.pinimg.com/736x/2b/c3/00/2bc3007b326698cb1efba6561e657cf5.jpg",
    hook: "A Vow of Forever: The ultimate expression of a love that knows no bounds.",
  },
  {
    name: "Engagement",
    imageUrl: "https://i.pinimg.com/736x/f9/99/d0/f999d07667cb6f593bea7b22eb5e5df4.jpg",
    hook: "The Promise of a Lifetime: Begin your forever with a diamond that speaks volumes.",
  },
];

const OccasionCarouselItem = ({ occasion }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (occasion.imageUrl) {
      const img = new Image();
      img.src = occasion.imageUrl;
      img.onload = () => setIsLoaded(true);
    } else {
      setIsLoaded(true);
    }
  }, [occasion.imageUrl]);

  return (
    <div className="relative flex-shrink-0 w-96 h-96 bg-gray-300 rounded-lg p-8 flex flex-col justify-end text-white transform hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden">
      {!isLoaded ? (
        <div className="absolute inset-0 bg-gray-400 animate-pulse"></div>
      ) : (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${occasion.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
      <div className="relative z-10">
        <h3 className="text-3xl font-semibold mb-2">{occasion.name}</h3>
        <p className="text-lg">{occasion.hook}</p>
      </div>
    </div>
  );
};

const ShopByOccasion = () => {
  const scrollContainer = useRef(null);

  const scroll = (scrollOffset) => {
    scrollContainer.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
  };

  return (
    <div className="py-12 relative">
      <h2 className="text-4xl font-bold text-center tracking-tight text-gray-800">Curated for Life's Defining Moments</h2>
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
          className="flex overflow-x-auto space-x-8 pb-6 pt-6 w-full"
          ref={scrollContainer}
          style={{ scrollbarWidth: 'none' }}
        >
          {occasions.length > 0 ? (
            occasions.map((occasion) => (
              <OccasionCarouselItem key={occasion.name} occasion={occasion} />
            ))
          ) : (
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="relative flex-shrink-0 w-96 h-96 bg-gray-400 rounded-lg p-8 animate-pulse"></div>
            ))
          )}
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
