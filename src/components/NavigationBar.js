import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi';
import MenuBar from './MenuBar';

const NavigationBar = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const panelRef = useRef(null);

  // Handle click outside
  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      panelRef.current &&
      event.target instanceof Node &&
      !panelRef.current.contains(event.target)
    ) {
      setIsPanelOpen(false);
    }
  };

  if (isPanelOpen) {
    document.addEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [isPanelOpen]);


  // Handle mouse leave on panel
  const handleMouseLeave = () => {
    setIsPanelOpen(false);
  };

  return (
    <>
      <div className="h-16 bg-white shadow-sm flex items-center px-4 relative z-50">
        {/* Left - Menu Button */}
        <div className="flex flex-1 min-w-0">
          <button
            className="p-2 text-gray-600 hover:text-amber-600 focus:outline-none"
            onClick={() => setIsPanelOpen(!isPanelOpen)}
            aria-label={isPanelOpen ? "Close menu" : "Open menu"}
          >
            {isPanelOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Center - Logo */}
        <div className="flex flex-1 justify-center min-w-0">
          <h1 className="font-heading text-2xl font-bold text-black-600 truncate">
            LOGO
          </h1>
        </div>

        {/* Right - Icons */}
        <div className="flex flex-1 justify-end space-x-6 min-w-0">
          <button className="relative p-2 text-gray-600 hover:text-amber-600">
            <FiHeart size={20} />
            <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </button>
          <button className="relative p-2 text-gray-600 hover:text-amber-600">
            <FiShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              5
            </span>
          </button>
          <button className="p-2 text-gray-600 hover:text-amber-600">
            <FiUser size={20} />
          </button>
        </div>
      </div>

      {/* Left Panel Drawer */}
      {isPanelOpen && (
        <div className="fixed z-40 inset-0 flex pt-16">
          <div
            className="w-64 my-10 bg-white h-full shadow-lg relative animate-slide-in-left overflow-y-auto"
            ref={panelRef}
            onMouseLeave={handleMouseLeave}
          >
            <MenuBar onClose={() => setIsPanelOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationBar;
