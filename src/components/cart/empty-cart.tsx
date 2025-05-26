import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export function EmptyCart() {
  return (
    <div className="text-center py-16">
      <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground mb-6" />
      <h2 className="text-2xl font-semibold mb-3">Your Cart is Empty</h2>
      <p className="text-muted-foreground mb-6">
        Looks like you haven't added any products to your cart yet.
      </p>
      <Button asChild size="lg">
        <Link href="/products">Start Shopping</Link>
      </Button>
    </div>
  );
}
