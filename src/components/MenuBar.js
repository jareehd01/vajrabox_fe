import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { JEWELLERY_CATEGORIES } from "../utils/constants";
import { FiChevronDown } from "react-icons/fi";

const MenuBar = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const menuBarRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleMouseLeave = (e) => {
    // Check if mouse left the menu bar completely (not just moving to dropdown)
    if (!e.relatedTarget || 
        (!menuBarRef.current.contains(e.relatedTarget) && 
        (!dropdownRef.current?.contains(e.relatedTarget)))) {
      setActiveCategory(null);
    }
  };

  return (
    <div 
      className="relative border-b shadow-md"
      ref={menuBarRef}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Menu Bar */}
      <div className="flex justify-center items-center h-8 mx-auto" style={{ maxWidth: "80%" }}>
        {Object.keys(JEWELLERY_CATEGORIES).map((category) => (
          <div 
            key={category} 
            className="flex-1 text-center relative"
            onMouseEnter={() => setActiveCategory(category)}
          >
            <Link
              to={`/category/${category.toLowerCase()}`}
              className="flex items-center justify-center w-full py-2 text-teal-900 font-body font-thin hover:text-amber-600 transition-colors"
            >
              {category.replace(/_/g, " ")}
              <FiChevronDown className="ml-1" size={14} />
            </Link>

            {/* Dropdown Modal */}
            {activeCategory === category && (
              <div 
                ref={dropdownRef}
                className="fixed left-1/2 transform -translate-x-1/2 w-[80vw] max-w-8xl bg-white shadow-xl z-50 border-t border-gray-100"
                onMouseEnter={() => setActiveCategory(category)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <div className="grid grid-cols-4 p-8 gap-8">
                  <div className="col-span-1">
                    <h3 className="font-bold text-lg mb-4 text-gold-1 border-b pb-2">
                      {category.replace(/_/g, " ")}
                    </h3>
                    <ul className="space-y-3">
                      {JEWELLERY_CATEGORIES[category].map((subcategory) => (
                        <li key={subcategory}>
                          <Link
                            to={`/category/${category.toLowerCase()}`}
                            state={{ subcategory }} // Pass the subcategory as state
                            onClick={() => setActiveCategory(null)}
                            className="hover:text-amber-600 cursor-pointer transition-colors text-left"
                          >
                            {subcategory}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-span-3">
                    <div className="bg-gray-50 h-64 rounded-lg flex items-center justify-center text-gray-400">
                      Featured {category.replace(/_/g, " ")} collection
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuBar;