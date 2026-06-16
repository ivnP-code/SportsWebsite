import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 to-black text-white overflow-hidden">
      {/* Curved top edge */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-background" 
           style={{clipPath: 'ellipse(100% 100% at 50% 0%)'}} />
      
      <div className="container mx-auto px-6 py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/30">
                  <span className="text-white font-black text-lg">A</span>
                </div>
                <span className="text-xl font-black tracking-tight">APEX SPORT</span>
              </div>
              <p className="text-slate-300 mb-8 font-bold leading-relaxed">
                Преміальне спортивне спорядження для чемпіонів. Де продуктивність зустрічається з розкішшю.
              </p>
              <div className="flex space-x-4">
                <Button size="icon" className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg text-white hover:text-white">
                  <Facebook className="h-6 w-6" />
                </Button>
                <Button size="icon" className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg text-white hover:text-white">
                  <Instagram className="h-6 w-6" />
                </Button>
                <Button size="icon" className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg text-white hover:text-white">
                  <Twitter className="h-6 w-6" />
                </Button>
                <Button size="icon" className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg text-white hover:text-white">
                  <Youtube className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
            <h4 className="mb-6 font-black text-lg">Підтримка</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-white transition-all duration-300 font-bold hover:translate-x-2 block px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 shadow-lg">Зв'язатись з нами</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 font-bold hover:translate-x-2 block px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 shadow-lg">Таблиця розмірів</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 font-bold hover:translate-x-2 block px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 shadow-lg">Доставка та повернення</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 font-bold hover:translate-x-2 block px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 shadow-lg">Питання та відповіді</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 font-bold hover:translate-x-2 block px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 shadow-lg">Інструкція з догляду</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
            <h4 className="mb-6 font-black text-lg">Будьте в курсі</h4>
            <p className="text-slate-300 mb-6 font-bold leading-relaxed">
              Отримуйте найновіші продукти та ексклюзивні пропозиції на вашу електронну пошту.
            </p>
            <div className="flex gap-3">
              <Input 
                placeholder="Введіть вашу пошту" 
                className="bg-white/20 backdrop-blur-md border-white/30 text-white placeholder:text-slate-400 font-medium rounded-full shadow-lg"
              />
              <Button className="bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 hover:text-white font-bold rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Підписатись
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm font-bold">
            © 2026 Apex Sport. Всі права захищені.
          </p>
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white text-sm font-bold transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 shadow-lg">Політика конфіденційності</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm font-bold transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 shadow-lg">Умови використання</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm font-bold transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 shadow-lg">Політика файлів cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
}