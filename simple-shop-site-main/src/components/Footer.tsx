import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-3">Maison</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Curated essentials for modern living. Thoughtfully sourced, beautifully crafted.
          </p>
        </div>
        <div>
          <h4 className="font-body text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Navigate</h4>
          <div className="space-y-2">
            {["/", "/products", "/about", "/contact"].map((path) => (
              <Link key={path} to={path} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-body text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Connect</h4>
          <p className="text-sm text-muted-foreground">hello@maison.com</p>
          <p className="text-sm text-muted-foreground mt-1">+1 (555) 123-4567</p>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">&copy; 2026 Maison. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
