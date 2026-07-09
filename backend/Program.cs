using ApexSportApi.Data;
using ApexSportApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Builder;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact", policy =>
    {
        policy.WithOrigins(
                "http://localhost:3000",
                "http://localhost:5173",
                "https://apex-sport-alpha.vercel.app"
            )
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(connectionString)
);

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    dbContext.Database.EnsureCreated();

    if (!dbContext.Products.Any())
    {
        SeedData(dbContext);
    }
}

app.UseRouting();
app.UseCors("AllowReact");
app.MapControllers();
var port = Environment.GetEnvironmentVariable("PORT") ?? "80";
app.Urls.Add($"http://0.0.0.0:{port}");

app.Run();

static void SeedData(AppDbContext context)
{
    var products = new Product[]
{
    new Product
{
    Id = 1,
    Name = "Профі Кросівки Ultra",
    Gender = "men",
    Price = 4299m,
    OriginalPrice = 5999m,
    Image = "https://images.unsplash.com/photo-1761575074217-f6049a1cb0df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHJ1bm5pbmclMjBzaG9lcyUyMHByb2R1Y3QlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NzQ4NDE3NjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    Category = "Взуття",
    Sizes = new[] { "40", "41", "42", "43", "44" },
    IsNew = false,
    Discount = 28,
    Rating = 4.8m,
    Type = "Кросівки",
    Subcategory = "Біг",
},
new Product
{
    Id = 2,
    Name = "Компресійна Футболка Pro",
    Gender = "men",
    Price = 1899m,
    Image = "https://images.unsplash.com/photo-1610360373636-08dd2b883ea5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGNvbXByZXNzaW9uJTIwc2hpcnQlMjBhdGhsZXRpY3xlbnwxfHx8fDE3NzQ4NjgxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    Category = "Одяг",
    Sizes = new[] { "S", "M", "L", "XL", "XXL" },
    IsNew = true,
    Rating = 4.9m,
    Type = "Футболка",
    Subcategory = "Компресійний одяг",
},
new Product
{
    Id = 3,
    Name = "Спортивні Шорти Elite",
    Gender = "men",
    Price = 1499m,
    Image = "https://images.unsplash.com/photo-1695918428487-7934244c19ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmV5JTIwYXRobGV0aWMlMjBzaG9ydHMlMjBtZW5zfGVufDF8fHx8MTc3NDg2ODEzOXww&ixlib=rb-4.1.0&q=80&w=1080",
    Category = "Одяг",
    Sizes = new[] { "S", "M", "L", "XL" },
    IsNew = false,
    Rating = 4.6m,
    Type = "Шорти",
    Subcategory = "Тренування",
},
new Product
{
    Id = 4,
    Name = "Преміум Куртка Windproof",
    Gender = "men",
    Price = 3499m,
    OriginalPrice = 6999m,
    Image = "https://images.unsplash.com/photo-1702026672242-c79a52996dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHNwb3J0cyUyMGphY2tldCUyMHdpbmRicmVha2VyfGVufDF8fHx8MTc3NDg2ODE0MHww&ixlib=rb-4.1.0&q=80&w=1080",
    Category = "Одяг",
    Sizes = new[] { "M", "L", "XL", "XXL" },
    IsNew = false,
    Discount = 27,
    Rating = 4.9m,
    Type = "Куртка",
    Subcategory = "Вітрозахисний одяг",
},
new Product
{
    Id = 5,
    Name = "Смарт-Годинник Fitness Pro",
    Gender = "men",
    Price = 5999m,
    Image = "https://images.unsplash.com/photo-1745256375848-1d599594635d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwZml0bmVzcyUyMGJsYWNrJTIwbW9kZXJufGVufDF8fHx8MTc3NDg2ODE0MHww&ixlib=rb-4.1.0&q=80&w=1080",
    Category = "Аксесуари",
    Sizes = new[] { "One Size" },
    IsNew = true,
    Rating = 4.7m,
    Type = "Смарт-годинник",
    Subcategory = "Електроніка",
},
new Product
{
    Id = 6,
    Name = "Спортивна Сумка Premium",
    Gender = "men",
    Price = 2799m,
    Image = "https://images.unsplash.com/photo-1773846020151-c502a00abcfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGd5bSUyMGR1ZmZsZSUyMGJhZ3xlbnwxfHx8fDE3NzQ4NjgxNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    Category = "Аксесуари",
    Sizes = new[] { "One Size" },
    IsNew = false,
    Rating = 4.5m,
    Type = "Сумка",
    Subcategory = "Спортивні сумки",
},
new Product
{
    Id = 7,
    Name = "Майка для Бігу UltraLight",
    Gender = "men",
    Price = 1299m,
    Image = "https://images.unsplash.com/photo-1769867628187-40ba72111795?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwcnVubmluZyUyMHRhbmslMjB0b3AlMjBhdGhsZXRpY3xlbnwxfHx8fDE3NzQ4NjgxNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    Category = "Одяг",
    Sizes = new[] { "S", "M", "L", "XL" },
    IsNew = true,
    Rating = 4.8m,
    Type = "Майка",
    Subcategory = "Біг",
},
new Product
{
    Id = 8,
    Name = "Тренувальний Костюм Elite",
    Gender = "men",
    Price = 3999m,
    OriginalPrice = 5499m,
    Image = "https://images.unsplash.com/photo-1592860699405-482d621e2bb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHRyYWNrc3VpdCUyMHNwb3J0c3dlYXIlMjBtZW5zfGVufDF8fHx8MTc3NDg2ODE0MXww&ixlib=rb-4.1.0&q=80&w=1080",
    Category = "Одяг",
    Sizes = new[] { "M", "L", "XL", "XXL" },
    IsNew = false,
    Discount = 27,
    Rating = 4.9m,
    Type = "Костюм",
    Subcategory = "Тренування",
},

new Product
{
    Id = 9,
    Name = "Жіночі Кросівки AirFlow",
    Gender = "women",
    Price = 3899m,
    OriginalPrice = 5299m,
    Image = "https://images.unsplash.com/photo-1653179767393-381b3bfae1a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHdvbWVucyUyMHJ1bm5pbmclMjBzaG9lcyUyMHByb2R1Y3R8ZW58MXx8fHwxNzc1NzI2NTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    Category = "Взуття",
    Sizes = new[] { "36", "37", "38", "39", "40" },
    IsNew = false,
    Discount = 26,
    Rating = 4.9m,
    Type = "Кросівки",
    Subcategory = "Біг",
},
new Product
{
    Id = 10,
    Name = "Преміум Леггінси Performance",
    Gender = "women",
    Price = 1699m,
    Image = "https://images.unsplash.com/photo-1597586740716-27ca9e73029a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdvbWVucyUyMHNwb3J0cyUyMGxlZ2dpbmdzJTIwYXRobGV0aWN8ZW58MXx8fHwxNzc1NzI2NTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    Category = "Одяг",
    Sizes = new[] { "XS", "S", "M", "L", "XL" },
    IsNew = true,
    Rating = 4.8m,
    Type = "Леггінси",
    Subcategory = "Фітнес",
},
new Product
{
    Id = 11,
    Name = "Спортивний Топ FlexiFit",
    Gender = "women",
    Price = 1299m,
    Image = "https://images.unsplash.com/photo-1617085606187-ae5b079209a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwd29tZW5zJTIwc3BvcnRzJTIwYnJhJTIwZml0bmVzc3xlbnwxfHx8fDE3NzU3MjY1NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    Category = "Одяг",
    Sizes = new[] { "XS", "S", "M", "L" },
    IsNew = true,
    Rating = 4.7m,
    Type = "Топ",
    Subcategory = "Фітнес",
},
new Product
{
    Id = 12,
    Name = "Легка Куртка WindShield",
    Gender = "women",
    Price = 3999m,
    OriginalPrice = 5999m,
    Image = "https://images.unsplash.com/photo-1649242067383-5ddf5110f94e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjB3b21lbnMlMjBhdGhsZXRpYyUyMGphY2tldCUyMHdpbmRicmVha2VyfGVufDF8fHx8MTc3NTcyNjU2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    Category = "Одяг",
    Sizes = new[] { "XS", "S", "M", "L", "XL" },
    IsNew = false,
    Discount = 25,
    Rating = 4.9m,
    Type = "Куртка",
    Subcategory = "Вітрозахисний одяг",
},
new Product
{
    Id = 13,
    Name = "Смарт-Годинник Fitness Elite",
    Gender = "women",
    Price = 5499m,
    Image = "https://images.unsplash.com/photo-1560944015-aa03ca14b82e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyb3NlJTIwZ29sZCUyMHdvbWVucyUyMGZpdG5lc3MlMjBzbWFydHdhdGNofGVufDF8fHx8MTc3NTcyNjU2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    Category = "Аксесуари",
    Sizes = new[] { "One Size" },
    IsNew = false,
    Rating = 4.8m,
    Type = "Смарт-годинник",
    Subcategory = "Електроніка",
},
new Product
{
    Id = 14,
    Name = "Спортивна Сумка StyleBag",
    Gender = "women",
    Price = 2499m,
    Image = "https://images.unsplash.com/photo-1768929096133-1748d1fe5944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxwaW5rJTIwd29tZW5zJTIwc3BvcnRzJTIwYmFnJTIwYXRobGV0aWN8ZW58MXx8fHwxNzc1NzI2NTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    Category = "Аксесуари",
    Sizes = new[] { "One Size" },
    IsNew = true,
    Rating = 4.6m,
    Type = "Сумка",
    Subcategory = "Спортивні сумки",
},
new Product
{
    Id = 15,
    Name = "Майка Breathable Pro",
    Gender = "women",
    Price = 1199m,
    Image = "https://images.unsplash.com/photo-1663507897965-f55e4971582f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxibHVlJTIwd29tZW5zJTIwYXRobGV0aWMlMjB0YW5rJTIwdG9wfGVufDF8fHx8MTc3NTcyNjU2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    Category = "Одяг",
    Sizes = new[] { "XS", "S", "M", "L" },
    IsNew = false,
    Rating = 4.7m,
    Type = "Майка",
    Subcategory = "Фітнес",
},
new Product
{
    Id = 16,
    Name = "Килимок для Йоги Premium",
    Gender = "women",
    Price = 1799m,
    OriginalPrice = 2399m,
    Image = "https://images.unsplash.com/photo-1746796751590-a8c0f15d4900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxwdXJwbGUlMjB5b2dhJTIwbWF0JTIwZXhlcmNpc2UlMjBmaXRuZXNzfGVufDF8fHx8MTc3NTcyNjU2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    Category = "Аксесуари",
    Sizes = new[] { "One Size" },
    IsNew = false,
    Discount = 25,
    Rating = 4.8m,
    Type = "Килимок",
    Subcategory = "Йога",
},


new Product
{
    Id = 25,
    Name = "Гантелі Регульовані Pro",
    Gender = "equipment",
    Price = 4599m,
    OriginalPrice = 6299m,
    Image = "https://images.unsplash.com/photo-1725289767222-3444016c70ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGp1c3RhYmxlJTIwZHVtYmJlbGxzJTIwZml0bmVzcyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzU3MjcwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    Category = "Обладнання",
    Sizes = new[] { "2-24 кг" },
    IsNew = false,
    Discount = 27,
    Rating = 4.9m,
    Type = "Гантелі",
    Subcategory = "Силові тренування",
},
new Product
{
    Id = 26,
    Name = "Резинки для Фітнесу Set",
    Gender = "equipment",
    Price = 899m,
    Image = "https://images.unsplash.com/photo-1584827386916-b5351d3ba34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpc3RhbmNlJTIwYmFuZHMlMjBmaXRuZXNzJTIwY29sb3JmdWwlMjBzZXR8ZW58MXx8fHwxNzc2Njg3NDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    Category = "Аксесуари",
    Sizes = new[] { "5 рівнів" },
    IsNew = true,
    Rating = 4.7m,
    Type = "Резинки",
    Subcategory = "Фітнес-аксесуари",
},
new Product
{
    Id = 27,
    Name = "Ролик Масажний Elite",
    Gender = "equipment",
    Price = 1299m,
    Image = "https://images.unsplash.com/photo-1585076795621-7431cc05b271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb2FtJTIwcm9sbGVyJTIwZXhlcmNpc2UlMjByZWNvdmVyeXxlbnwxfHx8fDE3NzU3MjcwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    Category = "Відновлення",
    Sizes = new[] { "45 см" },
    IsNew = false,
    Rating = 4.8m,
    Type = "Масажний ролик",
    Subcategory = "Відновлення",
},
new Product
{
    Id = 28,
    Name = "М'яч для Фітнесу Pro",
    Gender = "equipment",
    Price = 1599m,
    OriginalPrice = 2199m,
    Image = "https://images.unsplash.com/photo-1522898467493-49726bf28798?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVyY2lzZSUyMGJhbGwlMjBzdGFiaWxpdHklMjBmaXRuZXNzfGVufDF8fHx8MTc3NTcyNzAwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    Category = "Аксесуари",
    Sizes = new[] { "65 см" },
    IsNew = false,
    Discount = 27,
    Rating = 4.6m,
    Type = "Фітбол",
    Subcategory = "Фітнес-аксесуари",
},
new Product
{
    Id = 29,
    Name = "Скакалка Швидкісна Elite",
    Gender = "equipment",
    Price = 499m,
    Image = "https://images.unsplash.com/photo-1520334298038-4182dac472e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdW1wJTIwcm9wZSUyMHNwZWVkJTIwZml0bmVzc3xlbnwxfHx8fDE3NzU3MjcwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    Category = "Кардіо",
    Sizes = new[] { "Регульована" },
    IsNew = true,
    Rating = 4.7m,
    Type = "Скакалка",
    Subcategory = "Кардіо",
},
new Product
{
    Id = 30,
    Name = "Пляшка Термо Premium",
    Gender = "equipment",
    Price = 799m,
    Image = "https://images.unsplash.com/photo-1602143407151-7111542de6e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjB3YXRlciUyMGJvdHRsZSUyMHN0YWlubGVzcyUyMHN0ZWVsfGVufDF8fHx8MTc3NTcyNzAwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    Category = "Аксесуари",
    Sizes = new[] { "750 мл" },
    IsNew = false,
    Rating = 4.8m,
    Type = "Пляшка",
    Subcategory = "Спортивне харчування",
},
new Product
{
    Id = 31,
    Name = "М'яч Медичний 5кг",
    Gender = "equipment",
    Price = 899m,
    Image = "https://images.unsplash.com/photo-1588906467694-022e823d4e4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2luZSUyMGJhbGwlMjB3ZWlnaHRlZCUyMGZpdG5lc3N8ZW58MXx8fHwxNzc1NzI3MDAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    Category = "Обладнання для сили",
    Sizes = new[] { "5 кг" },
    IsNew = true,
    Rating = 4.9m,
    Type = "Медбол",
    Subcategory = "Силові тренування",
},
new Product
{
    Id = 32,
    Name = "Гиря Професійна 16кг",
    Gender = "equipment",
    Price = 599m,
    OriginalPrice = 899m,
    Image = "https://images.unsplash.com/photo-1653927956711-f2222a45e040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3ZWlnaHQlMjB0cmFpbmluZyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzU3MjcwMDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    Category = "Обладнання для сили",
    Sizes = new[] { "16 кг" },
    IsNew = false,
    Discount = 24,
    Rating = 4.9m,
    Type = "Гиря",
    Subcategory = "Силові тренування",
}
};

    foreach (var product in products)
    {
        context.Products.Add(product);
    }

    context.SaveChanges();
}
