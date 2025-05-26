"use client"

import { CartItemCard } from "@/components/cart/cart-item";
import { CartSummary } from "@/components/cart/cart-summary";
import { EmptyCart } from "@/components/cart/empty-cart";
import { useCartStore } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function CartPage() {
  const { items, clearCart } = useCartStore();

  return (
    <div className="container mx-auto px-4 py-8">
       <div className="mb-6">
        <Link href="/products" className="text-sm text-primary hover:underline flex items-center">
          <ChevronLeft className="h-4 w-4 mr-1" /> Continue Shopping
        </Link>
      </div>

      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-primary">Your Shopping Cart</h1>
      </header>

      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-2 space-y-4 bg-card p-6 rounded-lg shadow-sm border">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Cart Items ({items.reduce((acc, item) => acc + item.quantity, 0)})</h2>
                <Button variant="outline" size="sm" onClick={clearCart} className="text-destructive hover:text-destructive/80">Clear Cart</Button>
            </div>
            {items.map((item) => (
              <CartItemCard key={item.productId} item={item} />
            ))}
          </div>
          <div className="lg:col-span-1">
            <CartSummary />
          </div>
        </div>
      )}
    </div>
  );
}
