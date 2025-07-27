import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { JEWELLERY_CATEGORIES, JEWELLERY_SAMPLE_DATA } from '../utils/constants';
import Filters from '../components/Filters';
import { useLocation } from 'react-router-dom';

const CategoryPage = () => {
  // Helper function to capitalize first letter
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const { categoryType } = useParams();
  const location = useLocation();
  const [activeSubcategory, setActiveSubcategory] = useState(`All ${capitalizeFirstLetter(categoryType)}`);

  useEffect(() => {
    // Check for subcategory in URL state (passed from MenuBar)
    const stateSubcategory = location.state?.subcategory;
    
    if (stateSubcategory && JEWELLERY_CATEGORIES[categoryType?.toUpperCase()]?.includes(stateSubcategory)) {
      setActiveSubcategory(stateSubcategory);
    } else {
      setActiveSubcategory(`All ${capitalizeFirstLetter(categoryType)}`);
    }
  }, [categoryType, location.state]);

  const subcategories = JEWELLERY_CATEGORIES[categoryType?.toUpperCase()] || [];

  const filteredProducts = activeSubcategory.startsWith('All ')
    ? JEWELLERY_SAMPLE_DATA.filter(
        product => product.category.toLowerCase() === categoryType
      )
    : JEWELLERY_SAMPLE_DATA.filter(
        product => product.category.toLowerCase() === categoryType && 
                  product.subcategory === activeSubcategory
      );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* <Filters categoryType={categoryType} /> */}
        
        <div className="w-full">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 capitalize">
              {categoryType.replace(/-/g, " ")} Collection
            </h1>
            <p className="text-gray-600">
              {activeSubcategory} Collection
            </p>
          </div>

          {/* Subcategory Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-6">
            {subcategories.map(subcategory => (
              <button
                key={subcategory}
                onClick={() => setActiveSubcategory(subcategory)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSubcategory === subcategory
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {subcategory}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => window.location.href = `/item/${product.id}`}
                >
                  <div className="h-48 bg-gray-100 rounded mb-4 flex items-center justify-center">
                    <span className="text-gray-400">{product.name}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <p className="text-amber-600 font-bold">${product.price.toLocaleString()}</p>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-12 text-gray-500">
                No products found in this category
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;