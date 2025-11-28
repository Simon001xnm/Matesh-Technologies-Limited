
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ShoppingCart, X } from 'lucide-react';

const POPUP_SEEN_KEY = 'holidayPopupSeen';

export function HolidayPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Only run on the client
    const hasSeenPopup = localStorage.getItem(POPUP_SEEN_KEY);
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem(POPUP_SEEN_KEY, 'true');
      }, 2500); // Show popup after 2.5 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const featuredProduct = {
    id: "prod15",
    name: "Tenda N301 Easy Setup Router",
    price: 1300,
    imageUrl: "https://ctcsolutions.co.ke/wp-content/uploads/2024/07/20154111119587310-400x400.jpg"
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="p-0 border-primary border-2 max-w-sm sm:max-w-md overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Holiday Special Deal!</DialogTitle>
          <DialogDescription>
            Check out this special offer on the Tenda N301 Easy Setup Router, available now for just KSH 1300.
          </DialogDescription>
        </DialogHeader>

        <div className="relative h-48 md:h-full">
          <Image
            src={featuredProduct.imageUrl}
            alt={featuredProduct.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint="router sale"
            className="w-full h-full"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        </div>

        <div className="p-6 text-center md:text-left flex flex-col justify-center">
          <h2 className="text-xl font-bold text-primary">Holiday Special Deal!</h2>
          <p className="text-muted-foreground text-sm mt-1">Don't miss out on this limited-time offer.</p>
          
          <div className="my-4">
            <p className="text-base font-medium">{featuredProduct.name}</p>
            <p className="text-2xl font-bold text-foreground">KSH {featuredProduct.price.toFixed(2)}</p>
          </div>

          <Button asChild size="lg" className="w-full" onClick={() => setIsOpen(false)}>
            <Link href={`/products/${featuredProduct.id}`}>
              View Deal <ShoppingCart className="ml-2 h-5 w-5" />
            </Link>
          </Button>
           <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="w-full text-muted-foreground mt-2">
            Continue Shopping
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
