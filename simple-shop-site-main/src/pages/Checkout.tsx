import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { products } from "@/lib/products";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Checkout = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    province: "",
    contactNumber: "",
  });

  if (!product) {
    return (
      <section className="container py-20 text-center">
        <h1 className="font-display text-3xl font-bold text-foreground">Product not found</h1>
        <Link to="/products" className="mt-4 inline-block text-primary hover:underline">
          ← Back to products
        </Link>
      </section>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.address || !form.city || !form.province || !form.contactNumber) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Order placed successfully!");
  };

  if (submitted) {
    return (
      <section className="container py-20 text-center animate-fade-in">
        <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1 className="font-display text-3xl font-bold text-foreground mb-3">Order Confirmed!</h1>
        <p className="text-muted-foreground mb-2">
          Your order for <span className="font-semibold text-foreground">{product.name}</span> has been placed.
        </p>
        <p className="text-muted-foreground mb-8">You will pay <span className="font-semibold text-foreground">${product.price}</span> on delivery.</p>
        <Link to="/products" className="text-primary hover:underline font-medium">
          Continue Shopping →
        </Link>
      </section>
    );
  }

  return (
    <section className="container py-12 animate-fade-in max-w-3xl mx-auto">
      <Link to={`/product/${product.id}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft className="h-4 w-4" />
        Back to product
      </Link>

      <h1 className="font-display text-3xl font-bold text-foreground mb-8">Checkout</h1>

      {/* COD Banner */}
      <div className="flex items-center gap-3 bg-accent/10 border border-accent/20 rounded-lg px-5 py-4 mb-8">
        <span className="text-2xl">💵</span>
        <div>
          <p className="font-medium text-foreground text-sm">Cash on Delivery</p>
          <p className="text-xs text-muted-foreground">No online payment needed — pay when your order arrives</p>
        </div>
      </div>

      {/* Order Summary */}
      <div className="flex items-center gap-4 bg-card rounded-lg p-4 border border-border mb-8">
        <img src={product.image} alt={product.name} className="h-20 w-20 rounded-lg object-cover" />
        <div className="flex-1">
          <h3 className="font-display font-semibold text-foreground">{product.name}</h3>
          <p className="text-sm text-muted-foreground">{product.category}</p>
        </div>
        <p className="font-display text-xl font-semibold text-foreground">${product.price}</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input id="fullName" name="fullName" value={form.fullName} onChange={handleChange} placeholder="John Doe" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address <span className="text-muted-foreground text-xs">(optional)</span></Label>
          <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Address *</Label>
          <Input id="address" name="address" value={form.address} onChange={handleChange} placeholder="123 Main Street" required />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">City *</Label>
            <Input id="city" name="city" value={form.city} onChange={handleChange} placeholder="Lahore" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="province">Province *</Label>
            <Input id="province" name="province" value={form.province} onChange={handleChange} placeholder="Punjab" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="contactNumber">Contact Number *</Label>
          <Input id="contactNumber" name="contactNumber" type="tel" value={form.contactNumber} onChange={handleChange} placeholder="+92 300 1234567" required />
        </div>

        <Button type="submit" size="lg" className="w-full text-base mt-4">
          Place Order — ${product.price}
        </Button>
      </form>
    </section>
  );
};

export default Checkout;
