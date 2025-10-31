import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiHeart, FiShoppingCart, FiUser, FiMenu, FiX, FiHome } from 'react-icons/fi';
import { useAppSelector } from '../store/hooks';
import MenuBar from './MenuBar';
import LoginSlider from './LoginSlider'; // (to be created)

const NavigationBar = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const panelRef = useRef(null);
  
  // Get cart and wishlist counts from Redux store
  const cartTotalQuantity = useAppSelector(state => state.cart.totalQuantity);
  const wishlistCount = useAppSelector(state => state.wishlist.items.length);
  const is_user_loggedin = useAppSelector(state => state.user.is_user_loggedin);
  const [isLoginSliderOpen, setIsLoginSliderOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleUserIconClick = () => {
    if (is_user_loggedin) {
      navigate('/profile');
    } else {
      setIsLoginSliderOpen(true);
    }
  };

return (
    <>
        <div className="h-14 sm:h-16 bg-white shadow-sm flex items-center px-2 sm:px-3 md:px-4 relative z-50">
            {/* Left - Menu Button */}
            <div className="flex items-center justify-start w-1/3 min-w-0">
                <button
                    className="p-2 text-gray-600 hover:text-amber-600 focus:outline-none"
                    onClick={() => setIsPanelOpen(!isPanelOpen)}
                    aria-label={isPanelOpen ? "Close menu" : "Open menu"}
                >
                    {isPanelOpen ? (
                        <FiX className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6" />
                    ) : (
                        <FiMenu className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6" />
                    )}
                </button>
            </div>

            {/* Center - Logo */}
            <div className="flex items-center justify-center w-1/3 min-w-0 absolute left-1/2 transform -translate-x-1/2">
                <Link to="/" className="text-decoration-none">
                    <h1 className="font-heading text-base sm:text-lg md:text-xl font-bold text-black-600 truncate">
                        LOGO
                    </h1>
                </Link>
            </div>

            {/* Right - Icons */}
            <div className="flex items-center justify-end w-1/3 min-w-0 ml-auto space-x-2 sm:space-x-3 md:space-x-4">
                <Link to="/" className="p-2 text-gray-600 hover:text-amber-600">
                    <FiHome className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" />
                </Link>
                <Link to="/wishlist" className="relative p-2 text-gray-600 hover:text-amber-600">
                    <FiHeart className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" />
                    {wishlistCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                            {wishlistCount}
                        </span>
                    )}
                </Link>
                <Link to="/cart" className="relative p-2 text-gray-600 hover:text-amber-600">
                    <FiShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" />
                    {cartTotalQuantity > 0 && (
                        <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                            {cartTotalQuantity}
                        </span>
                    )}
                </Link>
                <button className="p-2 text-gray-600 hover:text-amber-600" onClick={handleUserIconClick}>
                    <FiUser className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" />
                </button>
            </div>
        </div>

        {/* Left Panel Drawer */}
        {isPanelOpen && (
            <div className="fixed z-40 inset-0 flex pt-14 sm:pt-16">
                <div
                    className="w-96 my-8 sm:my-10 bg-white h-full shadow-lg relative animate-slide-in-left overflow-y-auto"
                    ref={panelRef}
                    onMouseLeave={handleMouseLeave}
                >
                    <MenuBar onClose={() => setIsPanelOpen(false)} />
                </div>
            </div>
        )}
      {/* Login Slider */}
      {isLoginSliderOpen && !is_user_loggedin && (
        <LoginSlider onClose={() => setIsLoginSliderOpen(false)} />
      )}
    </>
);
};

export default NavigationBar;
