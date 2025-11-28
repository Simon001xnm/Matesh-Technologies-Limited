
import { Mail, MapPin, Phone } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground text-xs md:text-sm py-2 px-4 border-b overflow-hidden">
      <div className="relative flex items-center">
         <div className="animate-marquee whitespace-nowrap flex items-center gap-x-6">
            <span className="font-semibold">🎄 MERRY CHRISTMAS SALE! 🎁 Unbeatable deals on all networking gear!</span>
            <span className="font-semibold">🎅 Free shipping on orders over KSH 10,000! 🚚</span>
            <span className="font-semibold">✨ Find the perfect tech gifts for your loved ones! ✨</span>
         </div>
         <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-x-6">
            <span className="font-semibold">🎄 MERRY CHRISTMAS SALE! 🎁 Unbeatable deals on all networking gear!</span>
            <span className="font-semibold">🎅 Free shipping on orders over KSH 10,000! 🚚</span>
            <span className="font-semibold">✨ Find the perfect tech gifts for your loved ones! ✨</span>
         </div>
      </div>
    </div>
  );
}
