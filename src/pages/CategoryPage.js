import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { JEWELLERY_CATEGORIES, JEWELLERY_SAMPLE_DATA } from '../utils/constants';
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
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-10">
        {/* <Filters categoryType={categoryType} /> */}
        
        <div className="w-full">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-3 capitalize tracking-tight">
              The Art of {categoryType.replace(/-/g, " ")}
            </h1>
            <p className="text-lg text-gray-600">
              A curated selection of our finest pieces, each crafted to perfection.
            </p>
          </div>

          {/* Subcategory Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {subcategories.map(subcategory => (
              <button
                key={subcategory}
                onClick={() => setActiveSubcategory(subcategory)}
                className={`px-5 py-2 rounded-full text-base font-medium transition-all duration-300 ${
                  activeSubcategory === subcategory
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {subcategory}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Link 
                  key={product.id} 
                  to={`/item/${product.id}`}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow cursor-pointer transform hover:-translate-y-1 duration-300"
                >
                  <div className="h-56 bg-gray-100 rounded-md mb-5 flex items-center justify-center overflow-hidden">
                    {/* Placeholder for an image - using text for now */}
                    <span className="text-gray-400 text-lg">{product.name}</span>
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-800">{product.name}</h3>
                  <p className="text-amber-600 font-bold text-lg">${product.price.toLocaleString()}</p>
                </Link>
              ))
            ) : (
              <div className="col-span-3 text-center py-20 text-gray-500">
                <p className="text-2xl mb-2">Awaiting Masterpieces</p>
                <p>Our artisans are currently crafting new treasures for this collection. Please check back soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;