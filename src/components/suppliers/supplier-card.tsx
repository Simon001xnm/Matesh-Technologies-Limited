import Image from "next/image";
import Link from "next/link";
import type { Supplier } from "@/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import { RatingStars } from "@/components/shared/rating-stars";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


interface SupplierCardProps {
  supplier: Supplier;
}

export function SupplierCard({ supplier }: SupplierCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <Link href={`/suppliers/${supplier.id}`} className="block">
        {supplier.bannerUrl && (
          <div className="h-32 w-full overflow-hidden relative">
            <Image
              data-ai-hint="supplier banner"
              src={supplier.bannerUrl}
              alt={`${supplier.name} banner`}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
      </Link>
      <CardHeader className="items-center text-center pt-4 -mt-12 relative z-10">
        <Link href={`/suppliers/${supplier.id}`} className="block">
          <Image
            data-ai-hint="company logo"
            src={supplier.logoUrl}
            alt={`${supplier.name} logo`}
            width={80}
            height={80}
            className="rounded-full border-4 border-background bg-background shadow-md mx-auto"
          />
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <Link href={`/suppliers/${supplier.id}`} className="block">
            <CardTitle className="text-xl font-semibold hover:text-primary transition-colors">
              {supplier.name}
            </CardTitle>
          </Link>
           {supplier.isVerified && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <ShieldCheck className="h-5 w-5 text-blue-500" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Verified Supplier</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
         {supplier.rating !== undefined && supplier.reviewCount !== undefined && supplier.reviewCount > 0 && (
          <div className="flex items-center text-sm text-muted-foreground mt-1">
            <RatingStars rating={supplier.rating} size={16} />
            <span className="ml-1.5">({supplier.reviewCount})</span>
          </div>
        )}
      </CardHeader>
      <CardContent className="p-4 text-center flex-grow">
        <CardDescription className="text-sm text-muted-foreground line-clamp-3">
          {supplier.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4 border-t">
        <Button asChild className="w-full" variant="outline">
          <Link href={`/suppliers/${supplier.id}`}>
            View Profile <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
