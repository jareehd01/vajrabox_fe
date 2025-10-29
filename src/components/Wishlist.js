import { useAppSelector, useAppDispatch } from '../store/hooks';
import { removeFromWishlist, clearWishlist, addToWishlist } from '../store/slices/wishlistSlice';
import { addToCart } from '../store/slices/cartSlice';
import { FiTrash2, FiShoppingCart, FiCreditCard, FiPlus } from 'react-icons/fi';
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
    alert('Item moved to cart!');
  };

  const handleClearWishlist = () => {
    dispatch(clearWishlist());
  };

  const handleCheckout = () => {
    if (wishlistItems.length === 0) {
      alert('Your wishlist is empty');
      return;
    }
    navigate('/checkout');
  };

  const handleAddDemoData = () => {
    addDemoDataToWishlist(dispatch, addToWishlist);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
        <p className="text-gray-600">Your wishlist is empty</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Your Wishlist ({wishlistItems.length} items)</h2>
        <div className="flex space-x-4">
          <button
            onClick={handleAddDemoData}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center"
          >
            <FiPlus className="mr-2" size={16} />
            Add Demo Items
          </button>
          <button
            onClick={handleCheckout}
            className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded flex items-center"
          >
            <FiCreditCard className="mr-2" size={16} />
            Checkout
          </button>
          <button
            onClick={handleClearWishlist}
            className="text-red-600 hover:text-red-800"
          >
            Clear Wishlist
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistItems.map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">{item.name}</span>
            </div>
            
            <div className="p-4">
              <h3 className="font-medium mb-2">{item.name}</h3>
              <p className="text-xl font-bold text-amber-600 mb-4">${item.price}</p>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded flex items-center justify-center"
                >
                  <FiShoppingCart className="mr-2" size={16} />
                  Add to Cart
                </button>
                
                <button
                  onClick={() => handleRemoveFromWishlist(item.id)}
                  className="text-red-600 hover:text-red-800 p-2"
                >
                  <FiTrash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
