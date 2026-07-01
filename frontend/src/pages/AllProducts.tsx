import { useState, useEffect } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Slider } from "../components/ui/slider";
import { Checkbox } from "../components/ui/checkbox";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet";
import { SlidersHorizontal, Heart, ShoppingCart } from "lucide-react";
import * as React from "react";
import { useCart } from "../context/CartContext";

interface Product {
    id: number;
    name: string;
    gender: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: string;
    sizes: string[];
    isNew?: boolean;
    discount?: number;
    rating: number;
    type: string;
    subcategory: string;
    specs: string;
}



export function AllProducts() {
    const { addToCart } = useCart();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/products`)

            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("API error:", err);
                setLoading(false);
            });
    }, []);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<number[]>([0, 10000]);
    const [sortBy, setSortBy] = useState("popular");

    const categories = ["Взуття", "Одяг", "Аксесуари", "Обладнання для сили", "Кардіо", "Відновлення"];
    const subcategories = [];

    const filteredProducts = products
        .filter((product) => {
            if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
                return false;
            }
            if (selectedSubcategories.length > 0 && !selectedSubcategories.includes(product.subcategory)) {
                return false;
            }
            if (product.price < priceRange[0] || product.price > priceRange[1]) {
                return false;
            }
            return true;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case "price-asc":
                    return a.price - b.price;
                case "price-desc":
                    return b.price - a.price;
                case "rating":
                    return b.rating - a.rating;
                default:
                    return 0;
            }
        });

    const toggleCategory = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };

    return (
        <div className="min-h-screen py-16 px-6">
            <div className="container mx-auto mb-12">
                <div className="bg-gradient-to-br from-purple-900/50 via-black to-blue-900/50 rounded-[3rem] p-12 md:p-16 relative overflow-hidden border border-white/10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.2),transparent_50%)]" />
                    <div className="relative z-10">
                        <Badge className="mb-4 bg-white/20 backdrop-blur-md border border-white/30 text-white">
                            Вся Колекція
                        </Badge>
                        <h1 className="text-5xl md:text-7xl text-white mb-4">Всі Товари</h1>
                        <p className="text-xl text-slate-300 max-w-2xl">
                            Повна колекція преміального спортивного спорядження для чоловіків, жінок та професійних атлетів
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-8">
                    <aside className="hidden lg:block w-80 shrink-0">
                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 sticky top-24">
                            <h3 className="text-2xl mb-6 text-white">Фільтри</h3>

                            <div className="mb-8">
                                <h4 className="mb-4 text-slate-300">Категорії</h4>
                                <div className="space-y-3">
                                    {categories.map((category) => (
                                        <div key={category} className="flex items-center space-x-3 p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                                            <Checkbox
                                                id={category}
                                                checked={selectedCategories.includes(category)}
                                                onCheckedChange={() => toggleCategory(category)}
                                                className="border-white/30"
                                            />
                                            <label
                                                htmlFor={category}
                                                className="flex-1 cursor-pointer text-white"
                                            >
                                                {category}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>


                            <div className="mb-8">
                                <h4 className="mb-4 text-slate-300">Ціна</h4>
                                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <Slider
                                        value={priceRange}
                                        onValueChange={setPriceRange}
                                        max={10000}
                                        step={100}
                                        className="mb-4"
                                    />
                                    <div className="flex justify-between text-sm text-white">
                                        <span>{priceRange[0]} ₴</span>
                                        <span>{priceRange[1]} ₴</span>
                                    </div>
                                </div>
                            </div>

                            <Button
                                variant="outline"
                                className="w-full bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 rounded-full"
                                onClick={() => {
                                    setSelectedCategories([]);
                                    setPriceRange([0, 10000]);
                                }}
                            >
                                Скинути фільтри
                            </Button>
                        </div>
                    </aside>

                    <div className="flex-1">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                            <p className="text-slate-300">
                                Знайдено <span className="text-white">{filteredProducts.length}</span> товарів
                            </p>

                            <div className="flex gap-3 w-full sm:w-auto">
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button className="lg:hidden flex-1 sm:flex-initial bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 rounded-full">
                                            <SlidersHorizontal className="mr-2 h-4 w-4" />
                                            Фільтри
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent side="left" className="bg-slate-900 border-white/10 text-white overflow-y-auto">
                                        <SheetHeader>
                                            <SheetTitle className="text-white">Фільтри</SheetTitle>
                                            <SheetDescription className="text-slate-400">
                                                Оберіть параметри для пошуку
                                            </SheetDescription>
                                        </SheetHeader>

                                        <div className="mt-8">
                                            <div className="mb-8">
                                                <h4 className="mb-4 text-slate-300">Категорії</h4>
                                                <div className="space-y-3">
                                                    {categories.map((category) => (
                                                        <div key={category} className="flex items-center space-x-3 p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                                            <Checkbox
                                                                id={`mobile-${category}`}
                                                                checked={selectedCategories.includes(category)}
                                                                onCheckedChange={() => toggleCategory(category)}
                                                                className="border-white/30"
                                                            />
                                                            <label
                                                                htmlFor={`mobile-${category}`}
                                                                className="flex-1 cursor-pointer text-white"
                                                            >
                                                                {category}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                           
                                            <div className="mb-8">
                                                <h4 className="mb-4 text-slate-300">Ціна</h4>
                                                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                                    <Slider
                                                        value={priceRange}
                                                        onValueChange={setPriceRange}
                                                        max={10000}
                                                        step={100}
                                                        className="mb-4"
                                                    />
                                                    <div className="flex justify-between text-sm text-white">
                                                        <span>{priceRange[0]} ₴</span>
                                                        <span>{priceRange[1]} ₴</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <Button
                                                variant="outline"
                                                className="w-full bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 rounded-full"
                                                onClick={() => {
                                                    setSelectedCategories([]);
                                                    setSelectedSubcategories([]);
                                                    setPriceRange([0, 10000]);
                                                }}
                                            >
                                                Скинути фільтри
                                            </Button>
                                        </div>
                                    </SheetContent>
                                </Sheet>

                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="flex-1 sm:flex-initial px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-white/50"
                                >
                                    <option value="popular" className="bg-slate-900">Популярні</option>
                                    <option value="price-asc" className="bg-slate-900">Ціна: низька - висока</option>
                                    <option value="price-desc" className="bg-slate-900">Ціна: висока - низька</option>
                                    <option value="rating" className="bg-slate-900">Рейтинг</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            {filteredProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="group bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02]"
                                >
                                    <div className="relative aspect-square overflow-hidden bg-slate-800">
                                        <ImageWithFallback
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />

                                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                                            {product.isNew && (
                                                <Badge className="bg-white/90 backdrop-blur-md text-black border-0">
                                                    Новинка
                                                </Badge>
                                            )}
                                            {product.discount && (
                                                <Badge className="bg-red-500/90 backdrop-blur-md text-white border-0">
                                                    -{product.discount}%
                                                </Badge>
                                            )}
                                        </div>

                                    </div>

                                    <div className="p-6">
                                        <div className="flex gap-2 mb-3">
                                            <Badge className="bg-white/10 backdrop-blur-md border-white/20 text-white text-xs">
                                                {product.category}
                                            </Badge>
                                            <Badge className="bg-white/10 backdrop-blur-md border-white/20 text-white text-xs">
                                                {product.subcategory}
                                            </Badge>
                                        </div>
                                        <h3 className="text-xl mb-2 text-white">{product.name}</h3>

                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="flex items-center text-yellow-400">
                                                {"★".repeat(Math.floor(product.rating))}
                                                {"☆".repeat(5 - Math.floor(product.rating))}
                                            </div>
                                            <span className="text-sm text-slate-400">{product.rating}</span>
                                        </div>

                                        <div className="flex items-baseline gap-3 mb-4">
                                            <span className="text-2xl text-white">{product.price} ₴</span>
                                            {product.originalPrice && (
                                                <span className="text-slate-500 line-through">
                                                    {product.originalPrice} ₴
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {product.sizes?.slice(0, 5).map((size) => (
                                                <span
                                                    key={size}
                                                    className="px-3 py-1 text-sm text-white bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                                                >
                                                    {size}
                                                </span>
                                            ))}
                                            {product.specs?.slice(0, 3).map((spec, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 text-sm text-white bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                                                >
                                                    {spec}
                                                </span>
                                            ))}
                                        </div>

                                        <Button
                                            className="cursor-pointer w-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white rounded-full group/btn"
                                            onClick={() => addToCart({
                                                id: product.id,
                                                name: product.name,
                                                price: product.price,
                                                image: product.image,
                                            })}
                                        >
                                            <ShoppingCart className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                                            Додати в кошик
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredProducts.length === 0 && (
                            <div className="text-center py-20">
                                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/10">
                                    <p className="text-2xl text-slate-300 mb-4">
                                        Товарів не знайдено
                                    </p>
                                    <p className="text-slate-400 mb-6">
                                        Спробуйте змінити фільтри пошуку
                                    </p>
                                    <Button
                                        className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white rounded-full"
                                        onClick={() => {
                                            setSelectedCategories([]);
                                            setPriceRange([0, 10000]);
                                        }}
                                    >
                                        Скинути всі фільтри
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
