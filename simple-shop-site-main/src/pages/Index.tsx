import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const Index = () => {
  const featured = products.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Premium lifestyle products"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="container relative z-10">
          <div className="max-w-xl animate-fade-in">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground leading-tight">
              Curated for
              <br />
              Modern Living
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80 font-body">
              Thoughtfully sourced essentials that bring warmth and character to your everyday.
            </p>
            <Link
              to="/products"
              className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-body font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Shop Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display text-3xl font-semibold text-foreground">Featured</h2>
            <p className="mt-2 text-muted-foreground">Our most-loved pieces this season.</p>
          </div>
          <Link to="/products" className="text-sm font-medium text-primary hover:underline hidden md:block">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-card">
        <div className="container py-20 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            Quality that speaks for itself
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Every piece in our collection is crafted with care, designed to last, and made to be cherished.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 border border-foreground text-foreground px-8 py-3 rounded-md font-body font-medium text-sm hover:bg-foreground hover:text-background transition-colors"
          >
            Our Story
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
