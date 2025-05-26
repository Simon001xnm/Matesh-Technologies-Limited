"use client"

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  totalStars?: number;
  size?: number;
  className?: string;
  starClassName?: string;
}

export function RatingStars({
  rating,
  totalStars = 5,
  size = 16, // Corresponds to h-4 w-4
  className,
  starClassName
}: RatingStarsProps) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);

  return (
    <div className={cn("flex items-center", className)}>
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          className={cn(`text-yellow-400 fill-yellow-400`, starClassName)}
          style={{ width: size, height: size }}
        />
      ))}
      {/* Placeholder for half star, could be a different icon or SVG manipulation */}
      {/* For simplicity, rounding to nearest full star for now */}
       {[...Array(totalStars - fullStars)].map((_, i) => (
        <Star
          key={`empty-${i}`}
          className={cn("text-gray-300", starClassName)}
          style={{ width: size, height: size }}
        />
      ))}
    </div>
  );
}
