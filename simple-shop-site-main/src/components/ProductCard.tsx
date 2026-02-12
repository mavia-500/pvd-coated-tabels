import { Link } from "react-router-dom";
import { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => (
  <Link to={`/product/${product.id}`} className="group cursor-pointer animate-fade-in block">
    <div className="aspect-square overflow-hidden rounded-lg bg-muted mb-4">
      <img
        src={product.image}
        alt={product.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>
    <div className="space-y-1">
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{product.category}</p>
      <h3 className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors">
        {product.name}
      </h3>
      <p className="text-sm text-muted-foreground">{product.description}</p>
      <p className="font-body text-base font-semibold text-foreground pt-1">${product.price}</p>
    </div>
  </Link>
);

export default ProductCard;
