import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { removeFromCart, updateQuantity, clearCart } from '../store/slices/cartSlice';
import { clearWishlist } from '../store/slices/wishlistSlice';
import { FiTrash2, FiMinus, FiPlus, FiArrowLeft, FiHeart, FiShoppingBag, FiCheck } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cartItems = useAppSelector(state => state.cart.items);
  const wishlistItems = useAppSelector(state => state.wishlist.items);
  
  // Combine cart and wishlist items for checkout
  const checkoutItems = [...cartItems, ...wishlistItems.map(item => ({ ...item, quantity: 1, totalPrice: item.price }))];
  
  const [billingInfo, setBillingInfo] = useState({
    fullName: 'Fahatmah Mabang',
    email: '',
    phone: '',
    address: '',
    billingSameAsShipping: true
  });
  
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('apple-pay');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoDiscount, setPromoDiscount] = useState(0);

  const shippingCost = 150;
  const subtotal = checkoutItems.reduce((sum, item) => sum + (item.totalPrice || item.price), 0);
  const discount = promoApplied ? promoDiscount : 0;
  const total = subtotal + shippingCost - discount;

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
    } else {
      dispatch(removeFromCart(itemId));
    }
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleInputChange = (field, value) => {
    setBillingInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handlePromoCodeApply = () => {
    if (promoCode.trim() === 'WELCOME10') {
      setPromoApplied(true);
      setPromoDiscount(500);
      alert('Promo code applied successfully!');
    } else if (promoCode.trim() !== '') {
      alert('Invalid promo code. Please try again.');
    }
  };

  const handleCheckout = () => {
    if (!agreedToTerms) {
      alert('Please agree to the Terms & Conditions');
      return;
    }
    
    // Process checkout
    dispatch(clearCart());
    dispatch(clearWishlist());
    alert('Order placed successfully!');
    navigate('/');
  };

  const formatPrice = (price) => {
    return `P${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section - Order Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-6">
              <button 
                onClick={() => navigate(-1)}
                className="text-gray-600 hover:text-gray-800 mr-2"
              >
                <FiArrowLeft size={16} />
              </button>
              <h2 className="text-xl font-bold">Order Summary</h2>
            </div>

            {/* Product List */}
            <div className="space-y-4 mb-6">
              {checkoutItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 text-xs">{item.name}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <p className="text-gray-500 text-xs">39 EU (US 8/PH 8.5) White/Beige Accents</p>
                    <p className="font-bold text-orange-600">{formatPrice(item.price)}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center border rounded-lg">
                      <button 
                        onClick={() => handleQuantityChange(item.id, (item.quantity || 1) - 1)}
                        className="p-2 hover:bg-gray-100"
                      >
                        <FiMinus size={12} />
                      </button>
                      <span className="px-3 py-1 text-sm">{item.quantity || 1}</span>
                      <button 
                        onClick={() => handleQuantityChange(item.id, (item.quantity || 1) + 1)}
                        className="p-2 hover:bg-gray-100"
                      >
                        <FiPlus size={12} />
                      </button>
                    </div>
                    <button 
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Promo Code */}
            <div className="p-4 bg-gray-50 rounded-lg mb-4">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter promo code"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button
                  onClick={handlePromoCodeApply}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm"
                >
                  Apply
                </button>
              </div>
              {promoApplied && (
                <div className="flex items-center justify-between mt-2">
                  <span className="font-medium text-green-600">WELCOME10</span>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">Applied</span>
                </div>
              )}
            </div>

            {/* Shipping */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-6">
              <div>
                <p className="font-medium">Shipping</p>
                <p className="text-sm text-gray-600">Standard Via J&T Express, Metro Manila only</p>
              </div>
              <span className="font-bold">{formatPrice(shippingCost)}</span>
            </div>

            {/* Price Breakdown */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 mb-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Discount (Promo Code: {promoCode})</span>
                  <span>-{formatPrice(discount)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </div>


          </div>

          {/* Right Section - Billing & Payment */}
          <div className="space-y-6">
            {/* Billing Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-6">Billing Information</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={billingInfo.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                      <FiCheck className="text-green-500" size={16} />
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={billingInfo.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="e.g. johndoewilliams@gmail.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={billingInfo.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="e.g. 0912 345 6789"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Billing Address *
                  </label>
                  <input
                    type="text"
                    value={billingInfo.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="Enter full address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="billingSameAsShipping"
                    checked={billingInfo.billingSameAsShipping}
                    onChange={(e) => handleInputChange('billingSameAsShipping', e.target.checked)}
                    className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                  />
                  <label htmlFor="billingSameAsShipping" className="ml-2 text-sm text-gray-700">
                    Billing address same as shipping
                  </label>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-6">Payment Method</h2>
              
              <div className="flex space-x-4 mb-6">
                {['visa', 'mastercard', 'apple-pay', 'paypal', 'google-pay'].map((method) => (
                  <button
                    key={method}
                    onClick={() => handlePaymentMethodChange(method)}
                    className={`p-3 rounded-lg border-2 transition-colors ${
                      selectedPaymentMethod === method
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-xs font-medium">{method.toUpperCase()}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex items-start mb-6">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500 mt-1"
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                  I agree to the{' '}
                  <a href="#" className="text-orange-600 hover:text-orange-700 underline">
                    Terms & Conditions
                  </a>
                  {' '}and{' '}
                  <a href="#" className="text-orange-600 hover:text-orange-700 underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                onClick={handleCheckout}
                disabled={!agreedToTerms || checkoutItems.length === 0}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-lg transition-colors"
              >
                Pay {formatPrice(total)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage; 