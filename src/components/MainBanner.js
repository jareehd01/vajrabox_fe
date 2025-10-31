import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const bannerItems = [
  {
    title: 'Timeless Elegance',
    description: 'Discover our exquisite collection of handcrafted jewelry',
    buttonText: 'Explore Collection',
  },
  {
    title: 'A Style That Defines You',
    description: 'Find the perfect piece to express your unique personality',
    buttonText: 'Shop Now',
  },
  {
    title: 'Celebrate Your Moments',
    description: 'Mark your special occasions with a gift that lasts a lifetime',
    buttonText: 'View More',
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
    <div className="relative h-[500px] w-full mx-auto overflow-hidden">
      <div
        className="w-full h-full bg-gradient-to-r from-gray-400 to-gray-600"
      >
        <div className="w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-20">
           <div key={currentIndex} className="text-center text-white animate-fadeInUp">
              <h2 className="text-5xl font-bold mb-4">{bannerItems[currentIndex].title}</h2>
              <p className="text-xl mb-8">{bannerItems[currentIndex].description}</p>
              <button className="bg-amber-500 text-white font-bold py-2 px-6 rounded-full hover:bg-amber-600 transition duration-300">
                  {bannerItems[currentIndex].buttonText}
              </button>
            </div>
        </div>
      </div>

      {/* Left Arrow */}
      <div className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white cursor-pointer">
        <FiChevronLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white cursor-pointer">
        <FiChevronRight onClick={nextSlide} size={30} />
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bannerItems.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
              currentIndex === slideIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MainBanner;
