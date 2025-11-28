
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ShoppingCart } from 'lucide-react';

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

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="p-0 border-primary border-2 max-w-md overflow-hidden">
        <DialogHeader className="sr-only">
          <DialogTitle>Santa's Router Deals Have Arrived!</DialogTitle>
          <DialogDescription>
            Don't miss out on our biggest sale of the year. Get the best prices on top-rated routers and accessories.
          </DialogDescription>
        </DialogHeader>
        <div className="relative">
          <Image
            src="https://picsum.photos/seed/holiday-ad/600/300"
            alt="Holiday Promotion"
            width={600}
            height={300}
            data-ai-hint="christmas sale"
            className="w-full h-auto object-cover"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        <div className="p-6 text-center bg-background -mt-16 relative z-10 space-y-3">
          <h2 className="text-2xl font-bold text-primary">Santa's Router Deals Have Arrived!</h2>
          <p className="text-muted-foreground">
            Don't miss out on our biggest sale of the year. Get the best prices on top-rated routers and accessories.
          </p>
          <Button asChild size="lg" className="w-full" onClick={() => setIsOpen(false)}>
            <Link href="/products?category=routers">
              Shop Holiday Deals <ShoppingCart className="ml-2 h-5 w-5" />
            </Link>
          </Button>
           <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="w-full text-muted-foreground">
            Continue Shopping
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
