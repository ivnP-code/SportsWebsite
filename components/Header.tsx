import { ShoppingBag, Search, Menu, User } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Link } from "react-router";

export function Header() {
  return (
    <header className="border-b border-border/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/30">
              <span className="text-white font-black text-lg">A</span>
            </div>
            <span className="text-xl font-black tracking-tight text-foreground">APEX SPORT</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/men" className="hover:text-white transition-all duration-300 font-bold text-muted-foreground hover:scale-105 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 shadow-lg">Чоловіки</Link>
            <Link to="/women" className="hover:text-white transition-all duration-300 font-bold text-muted-foreground hover:scale-105 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 shadow-lg">Жінки</Link>
            <Link to="/equipment" className="hover:text-white transition-all duration-300 font-bold text-muted-foreground hover:scale-105 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 shadow-lg">Обладнання</Link>
            <Link to="/collections" className="hover:text-white transition-all duration-300 font-bold text-muted-foreground hover:scale-105 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 shadow-lg">Колекції</Link>
            <Link to="/about" className="hover:text-white transition-all duration-300 font-bold text-muted-foreground hover:scale-105 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 shadow-lg">Про нас</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="hidden md:flex h-12 w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg text-white hover:text-white">
              <Search className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg text-white hover:text-white">
              <User className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="relative h-12 w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg text-white hover:text-white">
              <ShoppingBag className="h-6 w-6" />
              <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs font-bold bg-white/20 backdrop-blur-md text-white border border-white/30">
                3
              </Badge>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden h-12 w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg text-white hover:text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}