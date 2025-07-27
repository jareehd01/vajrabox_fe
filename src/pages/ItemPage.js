import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addToCart } from '../store/slices/cartSlice';
import { addToWishlist, removeFromWishlist } from '../store/slices/wishlistSlice';
import { JEWELLERY_SAMPLE_DATA } from '../utils/constants';

const ItemPage = () => {
  const { itemId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const wishlistItems = useAppSelector(state => state.wishlist.items);
  
  const item = JEWELLERY_SAMPLE_DATA.find((product) => product.id === itemId);
  const isInWishlist = wishlistItems.some(wishItem => wishItem.id === itemId);

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    if (item) {
      dispatch(addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: quantity,
        image: item.image || '',
      }));
      // You can add a toast notification here
      alert('Item added to cart!');
    }
  };

  const handleWishlistToggle = () => {
    if (item) {
      if (isInWishlist) {
        dispatch(removeFromWishlist(item.id));
      } else {
        dispatch(addToWishlist({
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image || '',
        }));
      }
    }
  };

  if (!item) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Item not found</h2>
        <p className="text-gray-600">The item you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image Section */}
        <div className="md:w-1/2">
          <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
            <span className="text-gray-400 text-3xl">{item.name}</span>
          </div>
        </div>

        {/* Product Info Section */}
        <div className="md:w-1/2">
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-2">{item.name}</h1>
            <div className="flex items-center mb-4">
              <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm mr-4">
                BEST SELLER
              </span>
              <span className="text-gray-600">5K+ Reviews</span>
            </div>

            <div className="space-y-3 mb-6">
              <ul className="list-disc pl-5 space-y-2">
                <li>Energy-efficient LED system</li>
                <li>Voice-activated + app controlled</li>
                <li>Easy installation, no hub required</li>
                <li>Custom scene presets & scheduling</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex items-center">
                <span className="text-3xl font-bold mr-4">${item.price.toLocaleString()}</span>
                <span className="text-gray-500 line-through mr-4">$650.00</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                  20% OFF
                </span>
              </div>
            </div>

            <div className="text-sm text-gray-600 mb-6">
              <p>This setup may require Wi-Fi connectivity and a compatible voice assistant (Alexa, Google Home).</p>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <span className="text-green-600">In stock</span>
              <span className="text-gray-600">Free shipping from $99</span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center mb-8">
              <span className="mr-4 font-medium">Quantity</span>
              <div className="flex items-center border rounded">
                <button 
                  onClick={decrementQuantity}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-1 border-x">{quantity}</span>
                <button 
                  onClick={incrementQuantity}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button 
              onClick={handleAddToCart}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-4 rounded-lg font-medium mb-4 flex items-center justify-center"
            >
              <FiShoppingCart className="mr-2" />
              ADD TO CART
            </button>

            {/* Wishlist Button */}
            <button 
              onClick={handleWishlistToggle}
              className={`w-full border ${isInWishlist ? 'border-red-300 bg-red-50 text-red-800' : 'border-gray-300 hover:bg-gray-50 text-gray-800'} py-3 px-4 rounded-lg font-medium flex items-center justify-center`}
            >
              <FiHeart className={`mr-2 ${isInWishlist ? 'fill-current' : ''}`} />
              {isInWishlist ? 'REMOVE FROM WISHLIST' : 'ADD TO WISHLIST'}
            </button>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="mt-12 border-t pt-8">
        <h3 className="text-xl font-bold mb-4">Description</h3>
        <p className="text-gray-700 mb-8">
          A plug-and-play smart lighting kit that transforms your home's atmosphere. 
          Adjust brightness, color temperature, and mood scenes using your phone or voice. 
          Engineered for convenience, elegance, and energy savings.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold mb-3">Compatibility</h4>
            <p className="text-gray-600">Works with Alexa, Google Home, and SmartThings</p>
          </div>
          <div>
            <h4 className="font-bold mb-3">Shipping</h4>
            <p className="text-gray-600">2-3 business days delivery</p>
          </div>
          <div>
            <h4 className="font-bold mb-3">Safety & Warranty</h4>
            <p className="text-gray-600">2-year manufacturer warranty</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;