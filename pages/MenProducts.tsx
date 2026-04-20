import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Select } from "../components/ui/select";
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
    name: "Профі Кросівки Ultra",
    price: 4299,
    originalPrice: 5999,
    image: "https://images.unsplash.com/photo-1761575074217-f6049a1cb0df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHJ1bm5pbmclMjBzaG9lcyUyMHByb2R1Y3QlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NzQ4NDE3NjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Взуття",
    sizes: ["40", "41", "42", "43", "44"],
    discount: 28,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Компресійна Футболка Pro",
    price: 1899,
    image: "https://images.unsplash.com/photo-1610360373636-08dd2b883ea5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGNvbXByZXNzaW9uJTIwc2hpcnQlMjBhdGhsZXRpY3xlbnwxfHx8fDE3NzQ4NjgxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Одяг",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
    rating: 4.9,
  },
  {
    id: 3,
    name: "Спортивні Шорти Elite",
    price: 1499,
    image: "https://images.unsplash.com/photo-1695918428487-7934244c19ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmV5JTIwYXRobGV0aWMlMjBzaG9ydHMlMjBtZW5zfGVufDF8fHx8MTc3NDg2ODEzOXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Одяг",
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
  },
  {
    id: 4,
    name: "Преміум Куртка Windproof",
    price: 3499,
    originalPrice: 6999,
    image: "https://images.unsplash.com/photo-1702026672242-c79a52996dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHNwb3J0cyUyMGphY2tldCUyMHdpbmRicmVha2VyfGVufDF8fHx8MTc3NDg2ODE0MHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Одяг",
    sizes: ["M", "L", "XL", "XXL"],
    discount: 27,
    rating: 4.9,
  },
  {
    id: 5,
    name: "Смарт-Годинник Fitness Pro",
    price: 5999,
    image: "https://images.unsplash.com/photo-1745256375848-1d599594635d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwZml0bmVzcyUyMGJsYWNrJTIwbW9kZXJufGVufDF8fHx8MTc3NDg2ODE0MHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Аксесуари",
    sizes: ["One Size"],
    isNew: true,
    rating: 4.7,
  },
  {
    id: 6,
    name: "Спортивна Сумка Premium",
    price: 2799,
    image: "https://images.unsplash.com/photo-1773846020151-c502a00abcfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGd5bSUyMGR1ZmZsZSUyMGJhZ3xlbnwxfHx8fDE3NzQ4NjgxNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Аксесуари",
    sizes: ["One Size"],
    rating: 4.5,
  },
  {
    id: 7,
    name: "Майка для Бігу UltraLight",
    price: 1299,
    image: "https://images.unsplash.com/photo-1769867628187-40ba72111795?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwcnVubmluZyUyMHRhbmslMjB0b3AlMjBhdGhsZXRpY3xlbnwxfHx8fDE3NzQ4NjgxNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Одяг",
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    rating: 4.8,
  },
  {
    id: 8,
    name: "Тренувальний Костюм Elite",
    price: 3999,
    originalPrice: 5499,
    image: "https://images.unsplash.com/photo-1592860699405-482d621e2bb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHRyYWNrc3VpdCUyMHNwb3J0c3dlYXIlMjBtZW5zfGVufDF8fHx8MTc3NDg2ODE0MXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Одяг",
    sizes: ["M", "L", "XL", "XXL"],
    discount: 27,
    rating: 4.9,
  },
];

export function MenProducts() {
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
        <div className="bg-gradient-to-br from-slate-900 to-black rounded-[3rem] p-12 md:p-16 relative overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="relative z-10">
            <Badge className="mb-4 bg-white/20 backdrop-blur-md border border-white/30 text-white">
              Чоловіча Колекція
            </Badge>
            <h1 className="text-5xl md:text-7xl text-white mb-4">Чоловічі Товари</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Преміальне спортивне спорядження, створене для максимальної продуктивності та стилю
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
              <h3 className="text-2xl mb-6">Фільтри</h3>

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
                <div className="p-6 text-white rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
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
                        className="w-full bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 rounded-full  text-white"
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
                  <Button className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white rounded-full"
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