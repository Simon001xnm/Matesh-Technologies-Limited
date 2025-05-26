"use client"

import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useWishlistStore } from "@/hooks/use-wishlist";
import type { Product } from "@/types";
import { cn } from "@/lib/utils";

interface AddToWishlistButtonProps {
  product: Product;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  showText?: boolean;
}

export function AddToWishlistButton({
  product,
  className,
  size = "icon",
  variant = "ghost",
  showText = false,
}: AddToWishlistButtonProps) {
  const { addItem, isWishlisted } = useWishlistStore();
  const inWishlist = isWishlisted(product.id);

  const handleToggleWishlist = () => {
    addItem(product); // The addItem logic in the store handles both adding and removing
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleToggleWishlist}
      className={cn(
        "p-2",
        inWishlist ? "text-red-500 hover:text-red-600" : "text-muted-foreground hover:text-primary",
        className
      )}
      aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
    >
      <Heart className={cn("h-5 w-5", inWishlist && "fill-current")} />
      {showText && <span className="ml-2">{inWishlist ? "Wishlisted" : "Add to Wishlist"}</span>}
    </Button>
  );
}
