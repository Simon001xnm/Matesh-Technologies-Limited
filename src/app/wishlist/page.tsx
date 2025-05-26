"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useWishlistStore } from "@/hooks/use-wishlist";
import { WishlistItemCard } from "@/components/wishlist/wishlist-item-card";
import { EmptyWishlist } from "@/components/wishlist/empty-wishlist";
import { ChevronLeft } from "lucide-react";

export default function WishlistPage() {
  const { items, clearWishlist, totalItems } = useWishlistStore();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/products" className="text-sm text-primary hover:underline flex items-center">
          <ChevronLeft className="h-4 w-4 mr-1" /> Continue Shopping
        </Link>
      </div>

      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight text-primary">Your Wishlist</h1>
        {items.length > 0 && (
           <Button variant="outline" onClick={clearWishlist} className="text-destructive hover:text-destructive/80">
            Clear Wishlist
          </Button>
        )}
      </header>

      {items.length === 0 ? (
        <EmptyWishlist />
      ) : (
        <div>
          <p className="text-muted-foreground mb-6">{totalItems()} item(s) in your wishlist.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <WishlistItemCard key={item.productId} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
