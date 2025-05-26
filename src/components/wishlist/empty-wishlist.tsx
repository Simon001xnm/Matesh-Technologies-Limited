import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function EmptyWishlist() {
  return (
    <div className="text-center py-16">
      <Heart className="mx-auto h-16 w-16 text-muted-foreground mb-6" strokeWidth={1} />
      <h2 className="text-2xl font-semibold mb-3">Your Wishlist is Empty</h2>
      <p className="text-muted-foreground mb-6">
        Looks like you haven't added any products to your wishlist yet.
      </p>
      <Button asChild size="lg">
        <Link href="/products">Discover Products</Link>
      </Button>
    </div>
  );
}
