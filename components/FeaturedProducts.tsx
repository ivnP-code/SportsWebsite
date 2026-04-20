import { ProductCard } from "./ProductCard";

const featuredProducts = [
  {
    name: "Елітні бігові кросівки Performance",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    category: "ВЗУТТЯ",
    onSale: true
  },
  {
    name: "Преміальні бездротові навушники",
    price: 449,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    category: "АУДІО",
    isNew: true
  },
  {
    name: "Професійна ракетка з карбону",
    price: 589,
    image: "https://images.unsplash.com/photo-1775720724581-6e6ba7eb395f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByYWNrZXQlMjBzcG9ydCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzY2MDk2NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "ОБЛАДНАННЯ"
  },
  {
    name: "Розумний годинник для спорту",
    price: 799,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    category: "ГАДЖЕТИ",
    isNew: true
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Curved top edge */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-background" 
           style={{clipPath: 'ellipse(100% 100% at 50% 0%)'}} />
      
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 to-slate-800/20" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-block bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl tracking-tighter font-black bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              ВИБРАНА КОЛЕКЦІЯ
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg font-bold leading-relaxed">
              Відкрийте для себе нашу підібрану колекцію преміального спортивного спорядження, 
              розробленого для атлетів, які вимагають досконалості в кожній деталі.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
      
      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-background" 
           style={{clipPath: 'ellipse(100% 100% at 50% 100%)'}} />
    </section>
  );
}