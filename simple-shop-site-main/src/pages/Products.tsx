import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

const Products = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section className="container py-16">
      <div className="mb-10">
        <h1 className="font-display text-4xl font-bold text-foreground">All Products</h1>
        <p className="mt-2 text-muted-foreground">Browse our complete collection.</p>
      </div>

      {/* Filter */}
      <div className="flex gap-3 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              active === cat
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-primary/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
