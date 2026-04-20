import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative h-[85vh] overflow-hidden">
      {/* Background with elegant overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury sports equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />
      </div>
      
      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-background" 
           style={{clipPath: 'ellipse(100% 100% at 50% 100%)'}} />
      
      <div className="relative container mx-auto px-6 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h1 className="mb-8 tracking-tighter font-black">
              <span className="block text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">СТАНЬ</span>
              <span className="block text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-slate-300 to-white bg-clip-text text-transparent">КРАЩЕ</span>
            </h1>
            <p className="mb-10 text-xl md:text-2xl text-slate-200 max-w-2xl font-bold leading-relaxed">
              Преміальне спортивне спорядження для чемпіонів. Де продуктивність зустрічається з розкішшю в кожній деталі.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 hover:text-white font-bold text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Переглянути колекцію
              </Button>
              <Button size="lg" className="bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 hover:text-white font-bold text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Дивитись лукбук
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}