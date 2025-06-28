import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { JEWELLERY_CATEGORIES } from "../utils/constants";
import { FiChevronDown } from "react-icons/fi";

const MenuBar = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const menuBarRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleMouseLeave = (e) => {
    if (!e.relatedTarget || 
        (!menuBarRef.current.contains(e.relatedTarget) && 
        (!dropdownRef.current?.contains(e.relatedTarget)))) {
      setActiveCategory(null);
    }
  };

  return (
    <div 
      className="relative"
      ref={menuBarRef}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col justify-start items-start mx-2">
        {Object.keys(JEWELLERY_CATEGORIES).map((category) => (
          <div
            key={category}
            className="w-full text-left relative group"
          >
            <Link
              to={`/category/${category.toLowerCase()}`}
              className="flex items-center w-full py-2 px-4 hover:bg-gray-100 rounded transition-colors"
              onClick={() => {
                setActiveCategory(null);
                if (onClose) onClose();
              }}
            >
              {/* Gray square box */}
              <span className="flex-1 text-teal-900 font-body font-thin group-hover:text-amber-600 transition-colors">
                {category.replace(/_/g, " ")}
              </span>
              <div className="w-12 h-12 bg-gray-200 mr-3 rounded-sm"></div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuBar;