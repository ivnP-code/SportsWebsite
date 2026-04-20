import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Slider } from "../components/ui/slider";
import { Checkbox } from "../components/ui/checkbox";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet";
import { SlidersHorizontal, Heart, ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  sizes: string[];
  isNew?: boolean;
  discount?: number;
  rating: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Жіночі Кросівки AirFlow",
    price: 3899,
    originalPrice: 5299,
    image: "https://images.unsplash.com/photo-1653179767393-381b3bfae1a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHdvbWVucyUyMHJ1bm5pbmclMjBzaG9lcyUyMHByb2R1Y3R8ZW58MXx8fHwxNzc1NzI2NTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Взуття",
    sizes: ["36", "37", "38", "39", "40"],
    discount: 26,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Преміум Леггінси Performance",
    price: 1699,
    image: "https://images.unsplash.com/photo-1597586740716-27ca9e73029a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdvbWVucyUyMHNwb3J0cyUyMGxlZ2dpbmdzJTIwYXRobGV0aWN8ZW58MXx8fHwxNzc1NzI2NTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Одяг",
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: true,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Спортивний Топ FlexiFit",
    price: 1299,
    image: "https://images.unsplash.com/photo-1617085606187-ae5b079209a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwd29tZW5zJTIwc3BvcnRzJTIwYnJhJTIwZml0bmVzc3xlbnwxfHx8fDE3NzU3MjY1NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Одяг",
    sizes: ["XS", "S", "M", "L"],
    isNew: true,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Легка Куртка WindShield",
    price: 3999,
    originalPrice: 5999,
    image: "https://images.unsplash.com/photo-1649242067383-5ddf5110f94e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjB3b21lbnMlMjBhdGhsZXRpYyUyMGphY2tldCUyMHdpbmRicmVha2VyfGVufDF8fHx8MTc3NTcyNjU2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Одяг",
    sizes: ["XS", "S", "M", "L", "XL"],
    discount: 25,
    rating: 4.9,
  },
  {
    id: 5,
    name: "Смарт-Годинник Fitness Elite",
    price: 5499,
    image: "https://images.unsplash.com/photo-1560944015-aa03ca14b82e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlJTIwZ29sZCUyMHdvbWVucyUyMGZpdG5lc3MlMjBzbWFydHdhdGNofGVufDF8fHx8MTc3NTcyNjU2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Аксесуари",
    sizes: ["One Size"],
    rating: 4.8,
  },
  {
    id: 6,
    name: "Спортивна Сумка StyleBag",
    price: 2499,
    image: "https://images.unsplash.com/photo-1768929096133-1748d1fe5944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwd29tZW5zJTIwc3BvcnRzJTIwYmFnJTIwYXRobGV0aWN8ZW58MXx8fHwxNzc1NzI2NTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Аксесуари",
    sizes: ["One Size"],
    isNew: true,
    rating: 4.6,
  },
  {
    id: 7,
    name: "Майка Breathable Pro",
    price: 1199,
    image: "https://images.unsplash.com/photo-1663507897965-f55e4971582f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwd29tZW5zJTIwYXRobGV0aWMlMjB0YW5rJTIwdG9wfGVufDF8fHx8MTc3NTcyNjU2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Одяг",
    sizes: ["XS", "S", "M", "L"],
    rating: 4.7,
  },
  {
    id: 8,
    name: "Килимок для Йоги Premium",
    price: 1799,
    originalPrice: 2399,
    image: "https://images.unsplash.com/photo-1746796751590-a8c0f15d4900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjB5b2dhJTIwbWF0JTIwZXhlcmNpc2UlMjBmaXRuZXNzfGVufDF8fHx8MTc3NTcyNjU2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Аксесуари",
    sizes: ["One Size"],
    discount: 25,
    rating: 4.8,
  },
];

export function WomenProducts() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 10000]);
  const [sortBy, setSortBy] = useState("popular");

  const categories = ["Взуття", "Одяг", "Аксесуари"];

  const filteredProducts = products
    .filter((product) => {
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
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
      {/* Hero Section */}
      <div className="container mx-auto mb-12">
        <div className="bg-gradient-to-br from-purple-900/50 to-black rounded-[3rem] p-12 md:p-16 relative overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(219,112,147,0.15),transparent_50%)]" />
          <div className="relative z-10">
            <Badge className="mb-4 bg-white/20 backdrop-blur-md border border-white/30 text-white">
              Жіноча Колекція
            </Badge>
            <h1 className="text-5xl md:text-7xl mb-4 text-white">Жіночі Товари</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Елегантність та функціональність для досягнення ваших спортивних цілей
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filters */}
          <aside className="hidden lg:block w-80 shrink-0">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 sticky top-24">
              <h3 className="text-2xl mb-6 text-white">Фільтри</h3>

              {/* Categories */}
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

              {/* Price Range */}
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

              {/* Reset Button */}
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

          {/* Products Grid */}
          <div className="flex-1">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <p className="text-slate-300">
                Знайдено <span className="text-white">{filteredProducts.length}</span> товарів
              </p>

              <div className="flex gap-3 w-full sm:w-auto">
                {/* Mobile Filter Button */}
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
                      {/* Categories */}
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

                      {/* Price Range */}
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
                          <div className="flex justify-between text-sm">
                            <span>{priceRange[0]} ₴</span>
                            <span>{priceRange[1]} ₴</span>
                          </div>
                        </div>
                      </div>

                      {/* Reset Button */}
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
                  </SheetContent>
                </Sheet>

                {/* Sort Select */}
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

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02]"
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-slate-800">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Badges */}
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
                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="icon"
                        className="h-12 w-12 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-black border-0 shadow-lg"
                      >
                        <Heart className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <Badge className="mb-3 bg-white/10 backdrop-blur-md border-white/20 text-white">
                      {product.category}
                    </Badge>
                    <h3 className="text-xl mb-2 text-white">{product.name}</h3>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-yellow-400">
                        {"★".repeat(Math.floor(product.rating))}
                        {"☆".repeat(5 - Math.floor(product.rating))}
                      </div>
                      <span className="text-sm text-slate-400">{product.rating}</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="text-2xl text-white">{product.price} ₴</span>
                      {product.originalPrice && (
                        <span className="text-slate-500 line-through">
                          {product.originalPrice} ₴
                        </span>
                      )}
                    </div>

                    {/* Sizes */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.sizes.slice(0, 5).map((size) => (
                        <span
                          key={size}
                          className="px-3 py-1 text-sm text-white bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                        >
                          {size}
                        </span>
                      ))}
                    </div>

                    {/* Add to Cart Button */}
                    <Button className="w-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white rounded-full group/btn">
                      <ShoppingCart className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      Додати в кошик
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
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