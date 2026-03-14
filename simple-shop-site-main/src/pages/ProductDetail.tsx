import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(0);

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

  return (
    <section className="container py-12 animate-fade-in">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg bg-muted">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                  selectedImage === i ? "border-primary" : "border-transparent hover:border-muted-foreground/30"
                }`}
              >
                <img src={img} alt={`${product.name} ${i + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              {product.category}
            </p>
            <h1 className="font-display text-4xl font-bold text-foreground">{product.name}</h1>
          </div>

          <p className="text-muted-foreground text-lg leading-relaxed">{product.description}</p>

          <p className="font-display text-3xl font-semibold text-foreground">${product.price}</p>

          {/* COD Banner */}
          <div className="flex items-center gap-3 bg-accent/10 border border-accent/20 rounded-lg px-5 py-4">
            <span className="text-2xl">💵</span>
            <div>
              <p className="font-medium text-foreground text-sm">Cash on Delivery Available</p>
              <p className="text-xs text-muted-foreground">Pay when your order arrives at your doorstep</p>
            </div>
          </div>

          <Button
            size="lg"
            className="w-full text-base gap-2"
            onClick={() => navigate(`/checkout/${product.id}`)}
          >
            <ShoppingBag className="h-5 w-5" />
            Order Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
