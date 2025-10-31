import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { ArrowLeft, Minus, Plus, Trash2, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const CheckoutPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [promoCode, setPromoCode] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("apple-pay");
  const [sameAsShipping, setSameAsShipping] = useState(true);

  const itemPrice = 1200;
  const shipping = 150;
  const discount = 0;
  const subtotal = itemPrice * quantity;
  const total = subtotal + shipping - discount;

  return (
    <div className="min-h-screen bg-background">      
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Order Summary - Left Side */}
          <div className="lg:col-span-2">
            <Link 
              to="/rings" 
              className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="font-medium">Order Summary</span>
            </Link>

            {/* Product Card */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-lg mb-6">
              <div className="flex gap-6">
                <div className="w-32 h-32 rounded-xl overflow-hidden bg-muted flex-shrink-0 border border-border/50">
                  <img
                    src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop"
                    alt="Classic Solitaire"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-xl font-semibold mb-2">Classic Solitaire</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    .99 ET (US 6)/14 8.5) White/Beige Accents
                  </p>
                  <p className="text-2xl font-serif font-bold text-primary mb-4">
                    ₱{itemPrice.toLocaleString()}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 border border-border rounded-lg p-1">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 flex items-center justify-center hover:bg-accent rounded transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-accent rounded transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <button className="text-destructive hover:bg-destructive/10 p-2 rounded-lg transition-colors">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Promo Code */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-lg mb-6">
              <div className="flex gap-3">
                <Input
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter promo code"
                  className="flex-1 border-border focus:border-primary"
                />
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6">
                  Apply
                </Button>
              </div>
            </div>

            {/* Shipping */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-lg mb-6">
              <h3 className="font-serif text-lg font-semibold mb-3">Shipping</h3>
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  Standard Via J&T Express, Metro Manila only
                </p>
                <p className="font-semibold">₱{shipping}</p>
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 rounded-2xl p-6 shadow-xl">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">₱{subtotal.toLocaleString()}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-emerald-600">Discount (Promo Code)</span>
                    <span className="text-emerald-600 font-medium">-₱{discount}</span>
                  </div>
                )}
                <div className="border-t border-border/50 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-serif text-xl font-bold">Total</span>
                    <span className="font-serif text-2xl font-bold text-primary">
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
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg mb-6">
              <h2 className="font-serif text-2xl font-bold mb-6">Billing Information</h2>
              
              <div className="space-y-5">
                <div>
                  <Label htmlFor="fullName" className="text-sm font-medium mb-2 block">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="Faharmah Mabang"
                    className="border-border focus:border-primary"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="e.g. johndoewilliams@gmail.com"
                    className="border-border focus:border-primary"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-medium mb-2 block">
                    Phone Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="e.g. 0912 345 6789"
                    className="border-border focus:border-primary"
                  />
                </div>

                <div>
                  <Label htmlFor="address" className="text-sm font-medium mb-2 block">
                    Billing Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="address"
                    placeholder="Enter full address"
                    className="border-border focus:border-primary"
                  />
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <Checkbox
                    id="sameShipping"
                    checked={sameAsShipping}
                    onCheckedChange={(checked) => setSameAsShipping(Boolean(checked))}
                  />
                  <label
                    htmlFor="sameShipping"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    Billing address same as shipping
                  </label>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg mb-6">
              <h2 className="font-serif text-2xl font-bold mb-6">Payment Method</h2>
              
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-6">
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
                    className={`relative py-4 px-3 rounded-xl border-2 transition-all duration-200 ${
                      selectedPayment === method.id
                        ? "border-accent bg-accent/10 shadow-md"
                        : "border-border hover:border-accent/50 hover:bg-accent/5"
                    }`}
                  >
                    <span className="text-xs font-semibold block text-center">
                      {method.label}
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex items-start space-x-2 pt-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  I agree to the{" "}
                  <Link to="#" className="text-accent hover:underline font-medium">
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link to="#" className="text-accent hover:underline font-medium">
                    Privacy Policy
                  </Link>
                </label>
              </div>
            </div>

            {/* Checkout Button */}
            <Button
              size="lg"
              className="w-full h-14 text-lg font-serif font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <CreditCard className="w-5 h-5 mr-2" />
              Pay ₱{total.toLocaleString()}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
