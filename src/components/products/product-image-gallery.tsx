"use client"

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0] || "https://placehold.co/600x400.png");

  if (!images || images.length === 0) {
    images = ["https://placehold.co/600x400.png"];
    setSelectedImage(images[0]);
  }


  return (
    <div className="flex flex-col gap-4">
      <Card className="overflow-hidden shadow-md">
        <CardContent className="p-0">
          <div className="aspect-[4/3] w-full">
            <Image
              data-ai-hint="product detail"
              src={selectedImage}
              alt={`Main image for ${productName}`}
              width={600}
              height={450}
              className="object-cover w-full h-full transition-opacity duration-300 hover:opacity-90"
              priority // Prioritize loading main image
            />
          </div>
        </CardContent>
      </Card>
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={cn(
                "overflow-hidden rounded-md aspect-square border-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                selectedImage === image ? "border-primary" : "border-transparent hover:border-muted-foreground/50"
              )}
            >
              <Image
                data-ai-hint="product thumbnail"
                src={image}
                alt={`Thumbnail ${index + 1} for ${productName}`}
                width={150}
                height={150}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
