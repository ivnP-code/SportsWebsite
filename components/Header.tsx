import { ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import * as React from "react";
import { useCart } from "../context/CartContext";

export function Header() {
    const { items } = useCart();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="border-b border-border/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="container mx-auto px-6 py-6">
                <div className="flex items-center justify-between">

                    <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/30">
                            <span className="text-white font-black text-lg">A</span>
                        </div>
                        <span className="text-xl font-black tracking-tight text-foreground">
                            APEX SPORT
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center space-x-6">
                        <Link to="/products" className="hover:text-white transition-all duration-300 font-bold text-muted-foreground hover:scale-105 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 shadow-lg">
                            Всі товари
                        </Link>

                        <Link to="/men" className="hover:text-white transition-all duration-300 font-bold text-muted-foreground hover:scale-105 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 shadow-lg">
                            Чоловіки
                        </Link>

                        <Link to="/women" className="hover:text-white transition-all duration-300 font-bold text-muted-foreground hover:scale-105 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 shadow-lg">
                            Жінки
                        </Link>

                        <Link to="/equipment" className="hover:text-white transition-all duration-300 font-bold text-muted-foreground hover:scale-105 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 shadow-lg">
                            Обладнання
                        </Link>

                        <Link to="/about" className="hover:text-white transition-all duration-300 font-bold text-muted-foreground hover:scale-105 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 shadow-lg">
                            Про нас
                        </Link>
                    </nav>

                    <div className="flex items-center space-x-3">

                        <Link to="/checkout">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="relative h-12 w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg text-white cursor-pointer"
                            >
                                <ShoppingBag className="h-6 w-6" />

                                {totalCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                        {totalCount}
                                    </span>
                                )}
                            </Button>
                        </Link>

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleMenu}
                            className="md:hidden h-12 w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg text-white"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>

                    </div>
                </div>
            </div>

            {/* Мобільне меню */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-border/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <div className="container mx-auto px-6 py-4 flex flex-col space-y-2">
                        <Link
                            to="/products"
                            onClick={closeMenu}
                            className="hover:text-white transition-all duration-300 font-bold text-muted-foreground hover:scale-105 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 shadow-lg block"
                        >
                            Всі товари
                        </Link>

                        <Link
                            to="/men"
                            onClick={closeMenu}
                            className="hover:text-white transition-all duration-300 font-bold text-muted-foreground hover:scale-105 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 shadow-lg block"
                        >
                            Чоловіки
                        </Link>

                        <Link
                            to="/women"
                            onClick={closeMenu}
                            className="hover:text-white transition-all duration-300 font-bold text-muted-foreground hover:scale-105 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 shadow-lg block"
                        >
                            Жінки
                        </Link>

                        <Link
                            to="/equipment"
                            onClick={closeMenu}
                            className="hover:text-white transition-all duration-300 font-bold text-muted-foreground hover:scale-105 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 shadow-lg block"
                        >
                            Обладнання
                        </Link>

                        <Link
                            to="/about"
                            onClick={closeMenu}
                            className="hover:text-white transition-all duration-300 font-bold text-muted-foreground hover:scale-105 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 shadow-lg block"
                        >
                            Про нас
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}