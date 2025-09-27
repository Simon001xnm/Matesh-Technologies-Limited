
"use client"

import Image from "next/image";
import Link from "next/link";
import type { CartItem as CartItemType } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCartStore } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";

interface CartItemProps {
  item: CartItemType;
}

export function CartItemCard({ item }: CartItemProps) {
  const { updateItemQuantity, removeItem } = useCartStore();
  const { toast } = useToast();

  const handleQuantityChange = (newQuantity: number) => {
    updateItemQuantity(item.productId, newQuantity);
  };

  const handleRemoveItem = () => {
    removeItem(item.productId);
    toast({
      title: "Item removed",
      description: `${item.name} has been removed from your cart.`,
    });
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 border-b py-4 last:border-b-0">
      <Link href={`/products/${item.productId}`} className="shrink-0">
        <Image
          data-ai-hint="product thumbnail"
          src={item.imageUrl}
          alt={item.name}
          width={80}
          height={80}
          className="rounded-md object-cover border w-24 h-24 sm:w-20 sm:h-20"
        />
      </Link>
      <div className="flex-grow w-full">
        <Link href={`/products/${item.productId}`} className="hover:text-primary">
          <h3 className="font-semibold text-base text-center sm:text-left">{item.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground text-center sm:text-left">Price: KSH {item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => handleQuantityChange(item.quantity - 1)} disabled={item.quantity <= 1}>
          <Minus className="h-4 w-4" />
        </Button>
        <Input
          type="number"
          value={item.quantity}
          onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10) || 1)}
          className="h-8 w-14 text-center px-1"
          min="1"
        />
        <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => handleQuantityChange(item.quantity + 1)}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <p className="font-semibold w-24 text-center sm:text-right">KSH {(item.price * item.quantity).toFixed(2)}</p>
      <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive/80" onClick={handleRemoveItem}>
        <Trash2 className="h-5 w-5" />
      </Button>
    </div>
  );
}
