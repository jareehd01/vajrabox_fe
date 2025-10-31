import { useRef } from "react";
import { Link } from "react-router-dom";
import { JEWELLERY_CATEGORIES } from "../utils/constants";

const MenuBar = ({ onClose }) => {
  const menuBarRef = useRef(null);
  const dropdownRef = useRef(null);

  return (
    <div 
      className="relative w-96"
      ref={menuBarRef}
    >
      <div className="flex flex-col justify-start items-start mx-2">
        {Object.keys(JEWELLERY_CATEGORIES).map((category) => (
          <div
            key={category}
            className="w-full text-left relative group"
          >
            <Link
              to={`/category/${category.toLowerCase()}`}
              className="flex items-center justify-between w-full py-2 px-4 hover:bg-gray-100 rounded transition-colors"
              onClick={() => {
                if (onClose) onClose();
              }}
            >
              {/* Gray square box */}
              <span className="text-teal-900 font-body group-hover:text-amber-600 transition-colors">
                {category.replace(/_/g, " ")}
              </span>
              <div className="w-12 h-12 bg-gray-200 rounded-sm"></div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuBar;