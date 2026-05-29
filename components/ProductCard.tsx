import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import * as React from "react";

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  onSale?: boolean;
}

export function ProductCard({ 
  name, 
  price, 
  originalPrice, 
  image, 
  category, 
  isNew, 
  onSale 
}: ProductCardProps) {
  return (
    <div className="group relative bg-card rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-border/20 hover:border-white/20 hover:-translate-y-2">
      <div className="relative aspect-square overflow-hidden rounded-3xl">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isNew && <Badge className="bg-white/20 backdrop-blur-md text-white font-black rounded-full px-4 py-1 shadow-lg border border-white/30">СКОРО</Badge>}
          {onSale && <Badge className="bg-white/20 backdrop-blur-md text-white font-black rounded-full px-4 py-1 shadow-lg border border-white/30">ЕКСКЛЮЗИВ</Badge>}
        </div>

      </div>

      <div className="p-6">
        <p className="text-sm text-muted-foreground mb-2 font-bold tracking-wider uppercase">{category}</p>
        <h3 className="mb-3 line-clamp-2 font-bold text-foreground">{name}</h3>
        <div className="flex items-center gap-3">
          <span className="text-xl font-black text-white">${price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through font-medium">
              ${originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}