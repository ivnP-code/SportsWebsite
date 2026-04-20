import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

export function Categories() {
  return (
    <section className="py-20 relative">
      {/* Curved top edge */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-background" 
           style={{clipPath: 'ellipse(100% 100% at 50% 0%)'}} />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl tracking-tighter font-black bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            СПОРТ НА ВИБІР
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg font-bold leading-relaxed">
            Кожна категорія представляє обладнання, ретельно виготовлене для максимальної продуктивності та стилю.
          </p>
        </div>
        
        {/* Categories section removed */}
      </div>
    </section>
  );
}