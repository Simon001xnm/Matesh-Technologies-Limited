
"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/hooks/use-cart";
import Link from "next/link";
import { OrderViaWhatsAppButton } from "@/components/products/OrderViaWhatsAppButton"; // Added import

export function CartSummary() {
  const { items, totalPrice, totalItems } = useCartStore();
  const subtotal = totalPrice();
  const shippingEstimate = 500.00; // Placeholder in KSH
  const taxEstimate = subtotal * 0.16; // Placeholder 16% tax (VAT in Kenya)
  const orderTotal = subtotal + shippingEstimate + taxEstimate;

  if (items.length === 0) {
    return null; // Don't show summary if cart is empty
  }

  return (
    <Card className="sticky top-24 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between text-sm">
          <span>Subtotal ({totalItems()} items)</span>
          <span>KSH {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Shipping estimate</span>
          <span>KSH {shippingEstimate.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Tax estimate (16%)</span>
          <span>KSH {taxEstimate.toFixed(2)}</span>
        </div>
        <Separator />
        <div className="flex justify-between font-semibold text-lg">
          <span>Order total</span>
          <span>KSH {orderTotal.toFixed(2)}</span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button className="w-full" size="lg" asChild>
          <Link href="/checkout"> {/* Placeholder for checkout page */}
            Proceed to Checkout
          </Link>
        </Button>
        <OrderViaWhatsAppButton 
            cartItems={items} 
            buttonText="Order All via WhatsApp" 
            size="lg" 
            className="w-full" 
        />
      </CardFooter>
    </Card>
  );
}
