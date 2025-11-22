import { useAppSelector, useAppDispatch } from '../store/hooks';
import { removeFromCart, updateQuantity, clearCart, addToCart } from '../store/slices/cartSlice';
import { FiTrash2, FiMinus, FiPlus, FiCreditCard, FiPlus as FiPlusIcon, FiShoppingBag } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { addDemoDataToCart } from '../utils/demoData';

const Cart = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { items, totalQuantity, totalAmount } = useAppSelector(state => state.cart);

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      alert('Your collection is empty.'); // This should be a more elegant notification
      return;
    }
    navigate('/checkout');
  };

  const handleAddDemoData = () => {
    addDemoDataToCart(dispatch, addToCart);
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <FiShoppingBag className="mx-auto text-gray-300 w-24 h-24 mb-6" />
        <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">Your Collection is Awaiting a Masterpiece</h2>
        <p className="text-gray-600 text-lg">
          The most beautiful jewels are yet to be discovered. Begin your journey and find the piece that speaks to you.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-serif font-bold text-gray-800">Your Collection ({totalQuantity} {totalQuantity > 1 ? 'Treasures' : 'Treasure'})</h2>
        <div className="flex space-x-4">
          <button
            onClick={handleAddDemoData}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center transition-all duration-300"
          >
            <FiPlusIcon className="mr-2" size={16} />
            Add Demo Items
          </button>
          <button
            onClick={handleClearCart}
            className="text-red-600 hover:bg-red-50 rounded-lg p-2 font-medium transition-colors"
          >
            Empty Collection
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b border-gray-200 pb-6">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-gray-100 rounded-lg shadow-sm">
                 {/* Placeholder for item image */}
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-800">{item.name}</h3>
                <p className="text-gray-600 text-base">${item.price}</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                  className="p-3 text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  <FiMinus size={16} />
                </button>
                <span className="px-5 py-2 border-x border-gray-300 font-semibold">{item.quantity}</span>
                <button
                  onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                  className="p-3 text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  <FiPlus size={16} />
                </button>
              </div>

              <p className="font-semibold text-lg text-gray-800 w-24 text-right">${item.totalPrice.toFixed(2)}</p>

              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-red-500 hover:bg-red-50 p-3 rounded-full transition-colors"
              >
                <FiTrash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t border-gray-200 pt-6">
        <div className="flex justify-between items-center">
           <div>
             <span className="text-gray-600 text-lg">Total Investment</span>
             <span className="ml-4 text-3xl font-serif font-bold text-gray-900">${totalAmount.toFixed(2)}</span>
           </div>
          <button 
            onClick={handleCheckout}
            className="bg-gray-900 hover:bg-black text-white py-4 px-8 rounded-lg flex items-center font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FiCreditCard className="mr-3" size={20} />
            Proceed to Secure Acquisition
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
