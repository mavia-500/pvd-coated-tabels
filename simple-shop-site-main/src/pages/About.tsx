const About = () => (
  <section className="container py-16">
    <div className="max-w-2xl mx-auto">
      <h1 className="font-display text-4xl font-bold text-foreground mb-6">About Maison</h1>
      <div className="space-y-5 text-muted-foreground leading-relaxed font-body">
        <p>
          Maison was born from a simple belief: the objects we surround ourselves with should be
          made with intention. We curate a collection of everyday essentials that are thoughtfully
          designed, responsibly sourced, and built to last.
        </p>
        <p>
          We partner with independent artisans and small-batch makers who share our values — quality
          materials, honest craftsmanship, and timeless design. Every piece has a story, and we're
          here to share it with you.
        </p>
        <p>
          From our ceramic workshops in Portugal to weaving studios in Morocco, we travel the world
          to find products that bring warmth and character to modern living spaces.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-3 gap-6 text-center">
        {[
          { value: "200+", label: "Artisan Partners" },
          { value: "15", label: "Countries Sourced" },
          { value: "50k+", label: "Happy Customers" },
        ].map((stat) => (
          <div key={stat.label} className="animate-fade-in">
            <p className="font-display text-3xl font-bold text-primary">{stat.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
