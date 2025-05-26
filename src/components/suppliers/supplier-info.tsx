import Image from "next/image";
import type { Supplier } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Mail, Star } from "lucide-react";
import { RatingStars } from "@/components/shared/rating-stars";

interface SupplierInfoProps {
  supplier: Supplier;
}

export function SupplierInfo({ supplier }: SupplierInfoProps) {
  return (
    <Card className="overflow-hidden shadow-lg">
      {supplier.bannerUrl && (
        <div className="h-48 w-full overflow-hidden relative">
          <Image
            data-ai-hint="store banner"
            src={supplier.bannerUrl}
            alt={`${supplier.name} banner`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <CardHeader className="flex flex-col items-center text-center pt-6 relative -mt-16">
        <div className="relative mb-2">
          <Image
            data-ai-hint="company logo"
            src={supplier.logoUrl}
            alt={`${supplier.name} logo`}
            width={120}
            height={120}
            className="rounded-full border-4 border-background bg-background shadow-md"
          />
        </div>
        <CardTitle className="text-2xl font-bold text-primary">{supplier.name}</CardTitle>
        {supplier.rating !== undefined && supplier.reviewCount !== undefined && (
          <div className="flex items-center mt-1">
            <RatingStars rating={supplier.rating} size={18} />
            <span className="ml-2 text-sm text-muted-foreground">
              ({supplier.reviewCount} reviews)
            </span>
          </div>
        )}
      </CardHeader>
      <CardContent className="p-6 text-center">
        <p className="text-muted-foreground leading-relaxed mb-6">{supplier.description}</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {supplier.website && (
            <a
              href={supplier.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-primary hover:underline"
            >
              <Globe className="h-4 w-4 mr-1" /> Website
            </a>
          )}
          {supplier.contactEmail && (
            <a
              href={`mailto:${supplier.contactEmail}`}
              className="flex items-center text-primary hover:underline"
            >
              <Mail className="h-4 w-4 mr-1" /> Contact
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
