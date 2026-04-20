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
  specs: string[];
  isNew?: boolean;
  discount?: number;
  rating: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Гантелі Регульовані Pro",
    price: 499,
    originalPrice: 699,
    image: "https://images.unsplash.com/photo-1725289767222-3444016c70ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGp1c3RhYmxlJTIwZHVtYmJlbGxzJTIwZml0bmVzcyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzU3MjcwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Обладнання для сили",
    specs: ["2-24 кг", "Швидке регулювання", "Компактні"],
    discount: 27,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Резинки для Фітнесу Set",
    price: 899,
    image: "https://images.unsplash.com/photo-1584827386916-b5351d3ba34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpc3RhbmNlJTIwYmFuZHMlMjBmaXRuZXNzJTIwY29sb3JmdWwlMjBzZXR8ZW58MXx8fHwxNzc2Njg3NDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Аксесуари",
    specs: ["5 рівнів", "Латекс преміум", "З сумкою"],
    isNew: true,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Ролик Масажний Elite",
    price: 1299,
    image: "https://images.unsplash.com/photo-1585076795621-7431cc05b271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb2FtJTIwcm9sbGVyJTIwZXhlcmNpc2UlMjByZWNvdmVyeXxlbnwxfHx8fDE3NzU3MjcwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Відновлення",
    specs: ["EVA матеріал", "45 см", "Високої щільності"],
    rating: 4.8,
  },
  {
    id: 4,
    name: "М'яч для Фітнесу Pro",
    price: 199,
    originalPrice: 299,
    image: "https://images.unsplash.com/photo-1522898467493-49726bf28798?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVyY2lzZSUyMGJhbGwlMjBzdGFiaWxpdHklMjBmaXRuZXNzfGVufDF8fHx8MTc3NTcyNzAwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Аксесуари",
    specs: ["65 см", "Антирозрив", "З насосом"],
    discount: 27,
    rating: 4.6,
  },
  {
    id: 5,
    name: "Скакалка Швидкісна Elite",
    price: 499,
    image: "https://images.unsplash.com/photo-1520334298038-4182dac472e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdW1wJTIwcm9wZSUyMHNwZWVkJTIwZml0bmVzc3xlbnwxfHx8fDE3NzU3MjcwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Кардіо",
    specs: ["Регулювання", "Підшипники", "Легка"],
    isNew: true,
    rating: 4.7,
  },
  {
    id: 6,
    name: "Пляшка Термо Premium",
    price: 799,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjB3YXRlciUyMGJvdHRsZSUyMHN0YWlubGVzcyUyMHN0ZWVsfGVufDF8fHx8MTc3NTcyNzAwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Аксесуари",
    specs: ["750 мл", "Нержавійка", "24 год холод"],
    rating: 4.8,
  },
  {
    id: 7,
    name: "М'яч Медичний 5кг",
    price: 899,
    image: "https://images.unsplash.com/photo-1588906467694-022e823d4e4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2luZSUyMGJhbGwlMjB3ZWlnaHRlZCUyMGZpdG5lc3N8ZW58MXx8fHwxNzc1NzI3MDAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Обладнання для сили",
    specs: ["5 кг", "Гума преміум", "Подвійна стінка"],
    isNew: true,
    rating: 4.9,
  },
  {
    id: 8,
    name: "Гиря Професійна 16кг",
    price: 599,
    originalPrice: 899,
    image: "https://images.unsplash.com/photo-1653927956711-f2222a45e040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3ZWlnaHQlMjB0cmFpbmluZyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzU3MjcwMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Обладнання для сили",
    specs: ["16 кг", "Чавун", "Ергономічна ручка"],
    discount: 24,
    rating: 4.9,
  },
];

export function EquipmentProducts() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 10000]);
  const [sortBy, setSortBy] = useState("popular");

  const categories = ["Обладнання для сили", "Кардіо", "Аксесуари", "Відновлення"];

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
        <div className="bg-gradient-to-br from-blue-900/50 to-black rounded-[3rem] p-12 md:p-16 relative overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />
          <div className="relative z-10">
            <Badge className="mb-4 bg-white/20 backdrop-blur-md border border-white/30 text-white">
              Професійне Обладнання
            </Badge>
            <h1 className="text-5xl md:text-7xl mb-4 text-white">Спортивне Обладнання</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Високоякісне спорядження для досягнення максимальних результатів у тренуваннях
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
                        className="flex-1 cursor-pointer text-white text-sm"
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
                                className="flex-1 cursor-pointer text-white text-sm"
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
                    <Badge className="mb-3 bg-white/10 backdrop-blur-md border-white/20 text-white text-xs">
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

                    {/* Specs */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.specs.map((spec, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm text-white bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                        >
                          {spec}
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