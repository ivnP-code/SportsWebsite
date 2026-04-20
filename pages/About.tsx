import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Target, Award, Globe, Heart, Sparkles, TrendingUp, Users, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Досконалість",
    description: "Ми прагнемо до найвищої якості в кожній деталі нашої продукції та сервісу",
  },
  {
    icon: Award,
    title: "Інновації",
    description: "Використовуємо найсучасніші технології для створення продуктів майбутнього",
  },
  {
    icon: Globe,
    title: "Сталий розвиток",
    description: "Відповідальне виробництво та турбота про навколишнє середовище",
  },
  {
    icon: Heart,
    title: "Пристрасть",
    description: "Любов до спорту та активного способу життя надихає нас щодня",
  },
];

const stats = [
  { number: "50K+", label: "Задоволених клієнтів" },
  { number: "200+", label: "Преміальних продуктів" },
  { number: "15+", label: "Років досвіду" },
  { number: "4.9", label: "Рейтинг якості" },
];



export function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_50%)]" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm px-6 py-2">
              <Sparkles className="mr-2 h-4 w-4 inline" />
              Про APEX SPORT
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 text-white">
              Де Спорт Зустрічає Розкіш
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8">
              Ми створюємо не просто спортивне обладнання — ми творимо досвід преміальної якості для тих, хто прагне досконалості
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-black to-slate-950">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-3 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                Наша Місія
              </Badge>
              <h2 className="text-4xl md:text-6xl text-white">
                Надихаємо на нові вершини
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                APEX SPORT народився з простої ідеї: спортивне обладнання має бути не лише функціональним, а й витонченим. Ми віримо, що кожен атлет заслуговує на інструменти, які відображають їхню відданість та пристрасть.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                Наша місія — створювати продукти преміальної якості, які допомагають спортсменам розкрити свій повний потенціал, поєднуючи передові технології з неперевершеним дизайном.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <Badge className="bg-purple-500/20 backdrop-blur-md border-purple-500/30 text-purple-300 text-base px-4 py-2">
                  <TrendingUp className="mr-2 h-4 w-4 inline" />
                  Прогрес
                </Badge>
                <Badge className="bg-blue-500/20 backdrop-blur-md border-blue-500/30 text-blue-300 text-base px-4 py-2">
                  <Zap className="mr-2 h-4 w-4 inline" />
                  Енергія
                </Badge>
                <Badge className="bg-pink-500/20 backdrop-blur-md border-pink-500/30 text-pink-300 text-base px-4 py-2">
                  <Users className="mr-2 h-4 w-4 inline" />
                  Спільнота
                </Badge>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-[3rem] blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative overflow-hidden rounded-[3rem] border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1769981653696-5ce5a59263bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmFuZCUyMHN0b3JlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc2NjczNzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="APEX SPORT Store"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-white/10 backdrop-blur-md border-white/20 text-white">
              Наші Цінності
            </Badge>
            <h2 className="text-4xl md:text-6xl text-white mb-6">
              У що ми віримо
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Наші цінності визначають кожне рішення, яке ми приймаємо, та кожен продукт, який ми створюємо
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors">
                    <Icon className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-500 rounded-[3rem] blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative overflow-hidden rounded-[3rem] border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1769418809810-de06e099776e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGVjbyUyMGZyaWVuZGx5JTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NzY2NzM3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Sustainable Production"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <Badge className="bg-green-500/20 backdrop-blur-md border-green-500/30 text-green-300">
                <Globe className="mr-2 h-4 w-4 inline" />
                Сталий розвиток
              </Badge>
              <h2 className="text-4xl md:text-6xl text-white">
                Відповідальність перед майбутнім
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Ми розуміємо нашу відповідальність перед планетою. Тому використовуємо екологічні матеріали, мінімізуємо викиди та прагнемо до zero-waste виробництва.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4 bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">85% переробних матеріалів</h4>
                    <p className="text-slate-400 text-sm">У виробництві наших продуктів</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Вуглецева нейтральність</h4>
                    <p className="text-slate-400 text-sm">До 2028 року</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Етичне виробництво</h4>
                    <p className="text-slate-400 text-sm">Сертифіковані партнери по всьому світу</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-pink-900/50 rounded-[3rem] p-12 md:p-20 relative overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]" />
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl mb-6 text-white">
                Приєднуйтесь до нашої спільноти
              </h2>
              <p className="text-xl text-slate-300 mb-10">
                Будьте частиною руху, який змінює спортивну індустрію. Отримуйте ексклюзивний доступ до новинок та спеціальних пропозицій.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white rounded-full px-8 py-6 text-lg">
                  Зв'язатися з нами
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
