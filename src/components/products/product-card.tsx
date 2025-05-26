import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { AddToCartButton } from "./add-to-cart-button";
import { AddToWishlistButton } from "./add-to-wishlist-button"; // Added import

// Helper function to generate a concise hint from category (max 2 words)
const getProductCardHint = (categoryName: string): string => {
  if (!categoryName) return "product image"; // More descriptive default
  const words = categoryName.toLowerCase().split(' ');
  if (words.length > 1 && (words[0] === "fiber" || words[0] === "networking")) {
    return `${words[0]} ${words[1]}`;
  }
  return words[0] || "item image"; // More descriptive default
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <Link href={`/products/${product.id}`} className="block">
        <CardHeader className="p-0 relative">
           <div className="absolute top-2 right-2 z-10">
            <AddToWishlistButton product={product} size="sm" variant="ghost" className="bg-background/70 hover:bg-background/90" />
          </div>
          <div className="aspect-[4/3] w-full overflow-hidden">
            <Image
              data-ai-hint={getProductCardHint(product.category)}
              src={product.imageUrl || "https://placehold.co/400x300.png"}
              alt={product.name}
              width={400}
              height={300}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </CardHeader>
      </Link>
      <CardContent className="p-4 flex-grow">
        <Link href={`/products/${product.id}`} className="block">
          <CardTitle className="text-lg font-semibold hover:text-primary transition-colors">
            {product.name}
          </CardTitle>
        </Link>
        <p className="text-sm text-muted-foreground mt-1">{product.category}</p>
        {product.rating && (
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.round(product.rating!) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
              />
            ))}
            <span className="ml-1 text-xs text-muted-foreground">({product.reviewCount} reviews)</span>
          </div>
        )}
        <p className="text-xl font-bold text-primary mt-3">KSH {product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 border-t">
        <AddToCartButton product={product} />
      </CardFooter>
    </Card>
  );
}
