import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router";

interface Collection {
  id: number;
  name: string;
  description: string;
  itemCount: number;
  image: string;
  category: string;
  isNew?: boolean;
  featured?: boolean;
}

const collections: Collection[] = [
  {
    id: 1,
    name: "Темна Елегантність",
    description: "Мінімалістична колекція преміального спортивного одягу в чорних відтінках для тих, хто цінує розкіш та продуктивність",
    itemCount: 24,
    image: "https://images.unsplash.com/photo-1768929096150-9a76dc1d6560?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhdGhsZXRpYyUyMHdlYXIlMjBjb2xsZWN0aW9uJTIwYmxhY2t8ZW58MXx8fHwxNzc2NjczMzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Одяг",
    isNew: true,
    featured: true,
  },
  {
    id: 2,
    name: "Подіумна Серія",
    description: "Високомодна спортивна колекція, що поєднує стиль та функціональність для сучасного атлета",
    itemCount: 18,
    image: "https://images.unsplash.com/photo-1762430815429-8c76105e52a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwc3BvcnRzd2VhciUyMHJ1bndheSUyMGZhc2hpb258ZW58MXx8fHwxNzc2NjczMzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Одяг",
    featured: true,
  },
  {
    id: 3,
    name: "Мінімалістичний Спорт",
    description: "Чисті лінії та сучасний дизайн для тренувань у найвищому стилі",
    itemCount: 32,
    image: "https://images.unsplash.com/photo-1760037034693-88d7db84158f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydCUyMGZpdG5lc3MlMjBtb2Rlcm4lMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc3NjY3MzM5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Аксесуари",
    isNew: true,
  },
  {
    id: 4,
    name: "Колекція Бігуна",
    description: "Спеціалізоване обладнання для серйозних бігунів, які прагнуть досконалості",
    itemCount: 28,
    image: "https://images.unsplash.com/photo-1768647417516-a58e45362709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwdHJhaW5pbmclMjBhdGhsZXRpYyUyMGdlYXJ8ZW58MXx8fHwxNzc2NjczMzkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Взуття",
  },
  {
    id: 5,
    name: "Продуктивність Pro",
    description: "Професійне обладнання для екстремальних тренувань та максимальних результатів",
    itemCount: 36,
    image: "https://images.unsplash.com/photo-1773848748085-bdc47f3c3cfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwdHJhaW5pbmclMjBvdXRkb29yJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzc2NjczMzk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Обладнання",
    featured: true,
  },
  {
    id: 6,
    name: "Wellness & Yoga",
    description: "Колекція для практик йоги та медитації з акцентом на комфорт та гармонію",
    itemCount: 22,
    image: "https://images.unsplash.com/photo-1552196634-24a18d82ac56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWF0JTIwZXhlcmNpc2UlMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NzY2NzMzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Аксесуари",
  },
];

export function Collections() {
  const featuredCollections = collections.filter((c) => c.featured);
  const regularCollections = collections.filter((c) => !c.featured);

  return (
    <div className="min-h-screen py-16 px-6">
      {/* Hero Section */}
      <div className="container mx-auto mb-16">
        <div className="bg-gradient-to-br from-purple-900/50 to-black rounded-[3rem] p-12 md:p-20 relative overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="relative z-10 text-center">
            <Badge className="mb-6 bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm px-6 py-2">
              <Sparkles className="mr-2 h-4 w-4 inline" />
              Ексклюзивні Колекції
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 text-white">
              Наші Колекції
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Відкрийте світ преміальних спортивних колекцій, створених для тих, хто не йде на компроміси
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        {/* Featured Collections */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl md:text-5xl text-white">
              Виділені Колекції
            </h2>
            <Badge className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              {featuredCollections.length} Колекцій
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCollections.map((collection) => (
              <div
                key={collection.id}
                className="group relative bg-white/5 backdrop-blur-md rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-white/20 backdrop-blur-md border-white/30 text-white">
                      {collection.category}
                    </Badge>
                    {collection.isNew && (
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 backdrop-blur-md text-white border-0">
                        Новинка
                      </Badge>
                    )}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl mb-3 text-white">
                    {collection.name}
                  </h3>
                  <p className="text-slate-300 text-lg mb-4 max-w-xl">
                    {collection.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">
                      {collection.itemCount} товарів
                    </span>
                    <Button className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white rounded-full group/btn">
                      Переглянути
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Collections */}
        <div>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl md:text-5xl text-white">
              Всі Колекції
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularCollections.map((collection) => (
              <div
                key={collection.id}
                className="group bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <ImageWithFallback
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {collection.isNew && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 backdrop-blur-md text-white border-0">
                        Новинка
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <Badge className="mb-3 bg-white/10 backdrop-blur-md border-white/20 text-white text-xs">
                    {collection.category}
                  </Badge>
                  
                  <h3 className="text-2xl mb-3 text-white">
                    {collection.name}
                  </h3>
                  <p className="text-slate-400 mb-4 line-clamp-2">
                    {collection.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-400 text-sm">
                      {collection.itemCount} товарів
                    </span>
                  </div>

                  <Button className="w-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white rounded-full group/btn">
                    Переглянути колекцію
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-900/50 via-purple-900/50 to-pink-900/50 rounded-[3rem] p-12 md:p-16 relative overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]" />
            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl mb-6 text-white">
                Не знайшли те, що шукали?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Підпишіться на розсилку та дізнавайтесь першими про нові колекції та ексклюзивні пропозиції
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Ваша електронна пошта"
                  className="flex-1 w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-slate-400 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button className="w-full sm:w-auto bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 font-bold">
                  Підписатися
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
