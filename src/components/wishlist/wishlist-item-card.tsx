"use client"

import Image from "next/image";
import Link from "next/link";
import type { WishlistItem } from "@/types";
import { Product } from "@/types"; // Import Product type
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useWishlistStore } from "@/hooks/use-wishlist";
import { useCartStore } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";

interface WishlistItemCardProps {
  item: WishlistItem;
}

export function WishlistItemCard({ item }: WishlistItemCardProps) {
  const { removeItem: removeFromWishlist } = useWishlistStore();
  const { addItem: addToCart } = useCartStore();
  const { toast } = useToast();

  const handleRemoveFromWishlist = () => {
    removeFromWishlist(item.productId);
  };

  const handleAddToCart = () => {
    // We need to construct a partial Product object or fetch it
    // For simplicity, using the WishlistItem data which matches CartItem structure
    addToCart({
      productId: item.productId,
      name: item.name,
      price: item.price,
      imageUrl: item.imageUrl,
      // quantity will be handled by the cart store
    });
    toast({
      title: "Added to Cart",
      description: `${item.name} has been added to your cart.`,
    });
    // Optionally remove from wishlist after adding to cart
    // removeFromWishlist(item.productId); 
  };
  
  // Helper function to generate a concise hint from category (max 2 words)
  // Since WishlistItem doesn't have category, we'll use a generic hint
  const getWishlistItemHint = (): string => {
    return "product image"; 
  };


  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <Link href={`/products/${item.productId}`} className="block">
        <CardHeader className="p-0 relative">
          <div className="aspect-[4/3] w-full overflow-hidden">
            <Image
              data-ai-hint={getWishlistItemHint()}
              src={item.imageUrl || "https://placehold.co/400x300.png"}
              alt={item.name}
              width={400}
              height={300}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </CardHeader>
      </Link>
      <CardContent className="p-4 flex-grow">
        <Link href={`/products/${item.productId}`} className="block">
          <CardTitle className="text-lg font-semibold hover:text-primary transition-colors">
            {item.name}
          </CardTitle>
        </Link>
        <p className="text-xl font-bold text-primary mt-3">KSH {item.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 border-t flex flex-col gap-2">
        <Button onClick={handleAddToCart} className="w-full">
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
        <Button variant="outline" onClick={handleRemoveFromWishlist} className="w-full text-destructive hover:text-destructive/80">
          <Trash2 className="mr-2 h-4 w-4" /> Remove
        </Button>
      </CardFooter>
    </Card>
  );
}
