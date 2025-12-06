import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { ArrowLeft, Minus, Plus, Trash2, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [promoCode, setPromoCode] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("apple-pay");
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const backendUrl = `${window.location.protocol}//${window.location.hostname.replace('3000-', '8000-')}`;
    fetch(`${backendUrl}/api/product/`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, []);

  const itemPrice = product ? product.price : 0;
  const shipping = 150;
  const discount = 0;
  const subtotal = itemPrice * quantity;
  const total = subtotal + shipping - discount;

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Order Summary - Left Side */}
          <div className="lg:col-span-2">
            <Link
              to="/rings"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-amber-600 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              <span className="font-medium text-xl tracking-wide">Review Your Selection</span>
            </Link>

            {/* Product Card */}
            {product && (
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg mb-8">
              <div className="flex gap-6">
                <div className="w-32 h-32 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-200/50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-2 tracking-wide">{product.name}</h3>
                  <p className="text-base text-gray-500 mb-3 tracking-wide">
                    {product.description}
                  </p>
                  <p className="text-3xl font-serif font-bold text-amber-600 mb-4 tracking-wide">
                    ₱{itemPrice.toLocaleString()}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-1">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium text-gray-800">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <button className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            )}

            {/* Promo Code */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg mb-8">
              <div className="flex gap-3">
                <Input
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter Gift Code or Promo"
                  className="flex-1 border-gray-300 focus:border-amber-500 h-12"
                />
                <Button className="bg-gray-800 hover:bg-black text-white px-8 h-12 text-lg tracking-wide">
                  Apply Code
                </Button>
              </div>
            </div>

            {/* Investment Summary */}
            <div className="bg-gradient-to-br from-amber-50 to-gray-50 border-2 border-amber-100 rounded-2xl p-6 shadow-xl">
              <h3 className="font-serif text-2xl font-bold mb-4 tracking-wide">Investment Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-lg">
                  <span className="text-gray-600 tracking-wide">Subtotal</span>
                  <span className="font-medium text-gray-800 tracking-wide">₱{subtotal.toLocaleString()}</span>
                </div>
                 <div className="flex justify-between text-lg">
                  <span className="text-gray-600 tracking-wide">White Glove Delivery</span>
                  <span className="font-medium text-green-600 tracking-wide">Complimentary</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-lg">
                    <span className="text-emerald-600 tracking-wide">Promotional Savings</span>
                    <span className="font-medium text-emerald-600 tracking-wide">-₱{discount}</span>
                  </div>
                )}
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-serif text-2xl font-bold tracking-wide">Total Investment</span>
                    <span className="font-serif text-3xl font-bold text-amber-600 tracking-wide">
                      ₱{total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Billing & Payment - Right Side */}
          <div className="lg:col-span-3">
            {/* Billing Information */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="font-serif text-3xl font-bold mb-6 tracking-wide">Your Billing Details</h2>
              <div className="space-y-5">
                <div>
                  <Label htmlFor="fullName" className="text-base font-medium text-gray-700 mb-2 block tracking-wide">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="e.g., Johnathan Doe"
                    className="h-12 border-gray-300 focus:border-amber-500"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-base font-medium text-gray-700 mb-2 block tracking-wide">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="e.g., johndoe@email.com"
                    className="h-12 border-gray-300 focus:border-amber-500"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-base font-medium text-gray-700 mb-2 block tracking-wide">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="For delivery coordination"
                    className="h-12 border-gray-300 focus:border-amber-500"
                  />
                </div>
                <div>
                  <Label htmlFor="address" className="text-base font-medium text-gray-700 mb-2 block tracking-wide">
                    Billing Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="address"
                    placeholder="Your complete billing address"
                    className="h-12 border-gray-300 focus:border-amber-500"
                  />
                </div>
                <div className="flex items-center space-x-3 pt-2">
                  <Checkbox
                    id="sameShipping"
                    checked={sameAsShipping}
                    onCheckedChange={(checked) => setSameAsShipping(Boolean(checked))}
                    className="w-5 h-5"
                  />
                  <label
                    htmlFor="sameShipping"
                    className="text-base font-medium text-gray-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer tracking-wide"
                  >
                    My billing and shipping address are the same.
                  </label>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="font-serif text-3xl font-bold mb-6 tracking-wide">Secure Payment Method</h2>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mb-6">
                {[
                  { id: "visa", label: "VISA" },
                  { id: "mastercard", label: "MASTERCARD" },
                  { id: "apple-pay", label: "APPLE PAY" },
                  { id: "paypal", label: "PAYPAL" },
                  { id: "google-pay", label: "GOOGLE PAY" },
                ].map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedPayment(method.id)}
                    className={`relative py-4 px-3 rounded-xl border-2 transition-all duration-200 font-medium tracking-wide ${
                      selectedPayment === method.id
                        ? "border-amber-500 bg-amber-50/50 shadow-md"
                        : "border-gray-300 hover:border-amber-400 hover:bg-amber-50/20"
                    }`}
                  >
                    {method.label}
                  </button>
                ))}
              </div>
              <div className="flex items-start space-x-3 pt-2">
                <Checkbox id="terms" className="w-5 h-5 mt-1" />
                <label
                  htmlFor="terms"
                  className="text-base text-gray-600 leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer tracking-wide"
                >
                  By proceeding, I acknowledge and agree to the VajraBox{" "}
                  <Link to="#" className="text-amber-600 hover:underline font-medium">
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link to="#" className="text-amber-600 hover:underline font-medium">
                    Privacy Policy
                  </Link>.
                </label>
              </div>
            </div>

            {/* Checkout Button */}
            <Button
              size="lg"
              className="w-full h-16 text-xl font-serif font-semibold bg-gray-900 hover:bg-black text-white shadow-xl hover:shadow-2xl transition-all duration-300 tracking-wide"
            >
              <Lock className="w-5 h-5 mr-3" />
              Securely Place Your Order
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
