import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const bannerItems = [
  {
    title: 'Experience Extravagance',
    description: 'Indulge in our opulent selection of meticulously crafted jewels, designed to elevate your every moment.',
    buttonText: 'Unveil the Collection',
  },
  {
    title: 'Define Your Legacy',
    description: 'Forge your own path with a statement piece that embodies your singular spirit and refined taste.',
    buttonText: 'Curate Your Style',
  },
  {
    title: 'Immortalize Your Milestones',
    description: "Commemorate life's most precious occasions with a timeless treasure that will be cherished for generations.",
    buttonText: 'Discover Heirlooms',
  },
];

const MainBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? bannerItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === bannerItems.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <div className="relative h-[600px] w-full mx-auto overflow-hidden">
      <div
        className="w-full h-full bg-gradient-to-r from-gray-800 to-black"
      >
        <div className="w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-30">
           <div key={currentIndex} className="text-center text-white animate-fadeInUp px-4">
              <h2 className="text-6xl font-bold mb-4 tracking-tight">{bannerItems[currentIndex].title}</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">{bannerItems[currentIndex].description}</p>
              <button className="bg-amber-500 text-white font-bold py-3 px-8 rounded-full hover:bg-amber-600 transition duration-300 text-lg">
                  {bannerItems[currentIndex].buttonText}
              </button>
            </div>
        </div>
      </div>

      {/* Left Arrow */}
      <div className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white cursor-pointer p-2 bg-black bg-opacity-25 rounded-full hover:bg-opacity-50 transition-all">
        <FiChevronLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white cursor-pointer p-2 bg-black bg-opacity-25 rounded-full hover:bg-opacity-50 transition-all">
        <FiChevronRight onClick={nextSlide} size={30} />
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {bannerItems.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-500 ${
              currentIndex === slideIndex ? 'bg-white scale-125' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MainBanner;
