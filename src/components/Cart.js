import { useAppSelector, useAppDispatch } from '../store/hooks';
import { removeFromCart, updateQuantity, clearCart } from '../store/slices/cartSlice';
import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi';

const Cart = () => {
  const dispatch = useAppDispatch();
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

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <p className="text-gray-600">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Your Cart ({totalQuantity} items)</h2>
        <button
          onClick={handleClearCart}
          className="text-red-600 hover:text-red-800"
        >
          Clear Cart
        </button>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded"></div>
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded">
                <button
                  onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                  className="p-2 hover:bg-gray-100"
                >
                  <FiMinus size={16} />
                </button>
                <span className="px-4 py-2 border-x">{item.quantity}</span>
                <button
                  onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                  className="p-2 hover:bg-gray-100"
                >
                  <FiPlus size={16} />
                </button>
              </div>

              <p className="font-medium">${item.totalPrice.toFixed(2)}</p>

              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-red-600 hover:text-red-800 p-2"
              >
                <FiTrash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t pt-4">
        <div className="flex justify-between items-center text-xl font-bold">
          <span>Total: ${totalAmount.toFixed(2)}</span>
          <button className="bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
