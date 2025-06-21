import { useState } from "react";
import { JEWELLERY_CATEGORIES } from "../utils/constants";
import { FiChevronDown } from "react-icons/fi";

const MenuBar = () => {
  const [activeCategory, setActiveCategory] = useState(null);

return (
    <div className="relative border-b shadow-md">
        {/* Main Menu Bar */}
        <div className="flex justify-center items-center h-8 mx-auto" style={{ maxWidth: "80%" }}>
            {Object.keys(JEWELLERY_CATEGORIES).map((category) => (
                <div key={category} className="flex-1 text-center relative">
                    <button
                        className="flex items-center justify-center w-full py-2 font-body font-thin hover:text-amber-600 transition-colors"
                        onMouseEnter={() => setActiveCategory(category)}
                        onMouseLeave={() => setActiveCategory(null)}
                    >
                        {category.replace(/_/g, " ")}
                        <FiChevronDown className="ml-1" size={14} />
                    </button>
                    {/* Dropdown Modal - 70-80% width */}
                    {activeCategory === category && (
                        <div 
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
                                            <li 
                                                key={subcategory}
                                                className="hover:text-[] cursor-pointer transition-colors text-left"
                                            >
                                                {subcategory}
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