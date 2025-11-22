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
      // This should be replaced with a more elegant notification system
      alert('A new treasure has been added to your cart.');
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
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">A Masterpiece Awaits</h2>
        <p className="text-gray-600">The piece you are searching for is a whisper in the wind, a dream yet to be crafted.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Product Image Section */}
        <div className="md:w-1/2">
          <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center shadow-xl">
             {/* Placeholder for a high-resolution product image */}
            <span className="text-gray-400 text-4xl font-serif">{item.name}</span>
          </div>
        </div>

        {/* Product Info Section */}
        <div className="md:w-1/2">
          <div className="mb-6">
            <h1 className="text-5xl font-serif font-bold text-gray-800 mb-3">{item.name}</h1>
            <div className="flex items-center mb-5">
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold mr-4">
                SIGNATURE COLLECTION
              </span>
              <span className="text-gray-500">Over 5,000 discerning collectors</span>
            </div>

            <div className="space-y-3 mb-6 text-gray-700">
              <ul className="list-disc pl-5 space-y-2">
                <li>Exquisitely crafted with ethically sourced diamonds</li>
                <li>Personalized to reflect your unique story</li>
                <li>Sealed with a promise of authenticity and purity</li>
                <li>Delivered with our signature White Glove service</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex items-center">
                <span className="text-4xl font-bold text-amber-600 mr-4">${item.price.toLocaleString()}</span>
                <span className="text-gray-400 line-through mr-4 text-xl">$650.00</span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                  An Exclusive Offer
                </span>
              </div>
            </div>

            <div className="text-sm text-gray-600 mb-6">
              <p>Your masterpiece will be meticulously packaged and shipped with our complimentary White Glove service, ensuring its safe and swift arrival.</p>
            </div>

            <div className="flex items-center space-x-6 mb-8">
              <span className="text-green-600 font-semibold">Ready for You</span>
              <span className="text-gray-600">Complimentary shipping on all orders</span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center mb-8">
              <span className="mr-6 font-medium text-gray-800">Quantity</span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button 
                  onClick={decrementQuantity}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  -
                </button>
                <span className="px-5 py-2 border-x border-gray-300 font-semibold">{quantity}</span>
                <button 
                  onClick={incrementQuantity}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4">
              <button 
                onClick={handleAddToCart}
                className="w-full bg-gray-900 hover:bg-black text-white py-4 px-6 rounded-lg font-semibold text-lg flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FiShoppingCart className="mr-3" />
                Acquire Now
              </button>

              <button 
                onClick={handleWishlistToggle}
                className={`w-full border ${isInWishlist ? 'border-red-300 bg-red-50 text-red-800' : 'border-gray-300 hover:bg-gray-100 text-gray-800'} py-4 px-6 rounded-lg font-medium text-lg flex items-center justify-center transition-all duration-300`}
              >
                <FiHeart className={`mr-3 ${isInWishlist ? 'fill-current' : ''}`} />
                {isInWishlist ? 'Remove from Your Collection' : 'Add to Your Collection'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="mt-16 border-t border-gray-200 pt-12">
        <h3 className="text-3xl font-serif font-bold text-gray-800 mb-6">The Heart of the Masterpiece</h3>
        <p className="text-gray-700 mb-10 max-w-4xl">
          This is more than just jewelry; it is a testament to the artistry of our master craftsmen. Each diamond is hand-selected for its exceptional brilliance and fire, then meticulously set in a design that is both timeless and contemporary. It is a piece that will not only adorn you but will also become a cherished part of your legacy.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="font-bold text-xl mb-3 text-gray-800">A Promise of Purity</h4>
            <p className="text-gray-600">Each VajraBox diamond is certified and guaranteed, a testament to our unwavering commitment to quality and your peace of mind.</p>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-3 text-gray-800">White Glove Delivery</h4>
            <p className="text-gray-600">Your treasure will be delivered with the utmost care, a seamless and secure journey from our hands to yours, typically within 2-3 business days.</p>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-3 text-gray-800">An Enduring Legacy</h4>
            <p className="text-gray-600">Your masterpiece is protected by a comprehensive 2-year manufacturer warranty, ensuring its beauty and brilliance for years to come.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
