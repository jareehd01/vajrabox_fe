import { useState } from 'react';
import { JEWELLERY_CATEGORIES } from '../utils/constants';
import Filters from '../components/Filters';

const CategoryPage = () => {
  console.log("Selected page");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <Filters/>
        {/* Products Grid */}
        <div className="w-full md:w-3/4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Diamond Jewellery</h1>
            <p className="text-gray-600">
              Explore our exquisite collection of diamond jewellery, featuring a variety of cuts, 
              clarities, and colors to suit every style and occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product Cards */}
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-100 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-400">Classic Solitaire Diamond Ring</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">Classic Solitaire Diamond Ring</h3>
              <p className="text-amber-600 font-bold">$1,200</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-100 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-400">Elegant Diamond Pendant Necklace</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">Elegant Diamond Pendant Necklace</h3>
              <p className="text-amber-600 font-bold">$850</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-100 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-400">Sparkling Diamond Stud Earrings</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">Sparkling Diamond Stud Earrings</h3>
              <p className="text-amber-600 font-bold">$600</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-100 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-400">Luxury Diamond Tennis Bracelet</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">Luxury Diamond Tennis Bracelet</h3>
              <p className="text-amber-600 font-bold">$2,500</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-100 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-400">Modern Diamond Band Ring</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">Modern Diamond Band Ring</h3>
              <p className="text-amber-600 font-bold">$1,500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;