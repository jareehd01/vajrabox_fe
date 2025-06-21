import { FiSearch, FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';

const NavigationBar = () => {
    return (
        <div className="h-16 bg-white flex items-center px-4">
            <div className="flex flex-1 min-w-0">
                <div className="relative w-full">
                    <input 
                        type="text" 
                        placeholder="Search Jewellery..." 
                        className="w-full py-2 px-4 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c19a42] focus:border-transparent"
                    />
                    <FiSearch className="absolute left-3 top-3 text-gray-400" />
                </div>
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
    );
}

export default NavigationBar;