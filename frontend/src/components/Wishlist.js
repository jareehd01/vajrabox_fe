import { useAppSelector, useAppDispatch } from '../store/hooks';
import { removeFromWishlist, clearWishlist, addToWishlist } from '../store/slices/wishlistSlice';
import { addToCart } from '../store/slices/cartSlice';
import { FiTrash2, FiShoppingCart, FiCreditCard, FiPlus, FiHeart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { addDemoDataToWishlist } from '../utils/demoData';

const Wishlist = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const wishlistItems = useAppSelector(state => state.wishlist.items);

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist(id));
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image,
    }));
    // Optionally remove from wishlist after adding to cart
    dispatch(removeFromWishlist(item.id));
    // This should be replaced with a more elegant notification
    alert('Your selected treasure has been moved to your cart.');
  };

  const handleClearWishlist = () => {
    dispatch(clearWishlist());
  };

  const handleCheckout = () => {
    if (wishlistItems.length === 0) {
      alert('Your collection is empty.');
      return;
    }
    // Move all items to cart before checkout
    wishlistItems.forEach(item => {
      dispatch(addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
        image: item.image,
      }));
    });
    dispatch(clearWishlist());
    navigate('/checkout');
  };

  const handleAddDemoData = () => {
    addDemoDataToWishlist(dispatch, addToWishlist);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <FiHeart className="mx-auto text-gray-300 w-24 h-24 mb-6" />
        <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">Your Private Collection Awaits</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          This is where your future heirlooms will reside. Curate a collection of treasures that tells your unique story.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-serif font-bold text-gray-800">Your Private Collection ({wishlistItems.length} {wishlistItems.length > 1 ? 'Treasures' : 'Treasure'})</h2>
        <div className="flex space-x-4">
          <button
            onClick={handleAddDemoData}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center transition-all duration-300"
          >
            <FiPlus className="mr-2" size={16} />
            Add Demo Items
          </button>
          <button
            onClick={handleClearWishlist}
            className="text-red-600 hover:bg-red-50 rounded-lg p-3 font-medium transition-colors"
          >
            Empty Collection
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {wishlistItems.map((item) => (
          <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="h-56 bg-gray-100 flex items-center justify-center">
              {/* Placeholder for item image */}
              <span className="text-gray-400 font-serif text-2xl">{item.name}</span>
            </div>
            
            <div className="p-6">
              <h3 className="font-semibold text-xl text-gray-800 mb-3">{item.name}</h3>
              <p className="text-2xl font-bold font-serif text-amber-600 mb-5">${item.price.toLocaleString()}</p>
              
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="w-full bg-gray-900 hover:bg-black text-white py-3 px-5 rounded-lg font-semibold flex items-center justify-center transition-all duration-300"
                >
                  <FiShoppingCart className="mr-2" size={18} />
                  Acquire This Piece
                </button>
                
                <button
                  onClick={() => handleRemoveFromWishlist(item.id)}
                  className="w-full text-gray-600 hover:bg-gray-100 py-3 px-5 rounded-lg flex items-center justify-center border border-gray-300 transition-colors"
                >
                  <FiTrash2 className="mr-2" size={16} />
                  Release from Collection
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
       <div className="mt-12 border-t border-gray-200 pt-8 flex justify-end">
          <button 
            onClick={handleCheckout}
            className="bg-amber-600 hover:bg-amber-700 text-white py-4 px-10 rounded-lg flex items-center font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <FiCreditCard className="mr-3" size={20} />
            Proceed to Acquisition
          </button>
        </div>
    </div>
  );
};

export default Wishlist;
