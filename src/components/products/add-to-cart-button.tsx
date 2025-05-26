"use client"

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/hooks/use-cart";
import type { Product } from "@/types";
import { useToast } from "@/hooks/use-toast";

interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
  showIcon?: boolean;
  fullWidth?: boolean;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive" | null | undefined;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
  className?: string;
  children?: React.ReactNode;
}

export function AddToCartButton({
  product,
  quantity = 1,
  showIcon = true,
  fullWidth = true,
  variant = "default",
  size= "default",
  className,
  children
}: AddToCartButtonProps) {
  const { addItem } = useCartStore();
  const { toast } = useToast();

  const handleAddToCart = () => {
    // For simplicity, quantity is handled in the store on multiple adds
    // For specific quantity, an input would be needed.
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Button 
      onClick={handleAddToCart} 
      className={fullWidth ? `w-full ${className}` : className}
      variant={variant}
      size={size}
    >
      {showIcon && <ShoppingCart className="mr-2 h-4 w-4" />}
      {children || "Add to Cart"}
    </Button>
  );
}
