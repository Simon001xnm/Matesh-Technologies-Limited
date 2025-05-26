
import { getProductById, placeholderProducts } from "@/lib/placeholder-data";
import type { Product } from "@/types";
import { ProductImageGallery } from "@/components/products/product-image-gallery";
import { ProductReviewSummary } from "@/components/products/product-review-summary";
import { AddToCartButton } from "@/components/products/add-to-cart-button";
import { AddToWishlistButton } from "@/components/products/add-to-wishlist-button";
import { ContactSupplierDialog } from "@/components/products/contact-supplier-dialog";
import { OrderViaWhatsAppButton } from "@/components/products/OrderViaWhatsAppButton"; // New import
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlertCircle, ChevronLeft, Tag, Truck, MessageSquare } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


interface ProductDetailPageProps {
  params: { id: string };
}

async function fetchProduct(id: string): Promise<Product | null> {
  const product = getProductById(id);
  if (!product) return null;
  if (!product.reviews || product.reviews.length === 0) {
    product.reviews = placeholderProducts.find(p => p.id === id)?.reviews || [];
  }
  return product;
}


export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = await fetchProduct(params.id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <AlertCircle className="mx-auto h-12 w-12 text-destructive mb-4" />
        <h1 className="text-2xl font-semibold mb-2">Product Not Found</h1>
        <p className="text-muted-foreground mb-6">Sorry, we couldn't find the product you're looking for.</p>
        <Button asChild>
          <Link href="/products">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Products
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/products" className="text-sm text-primary hover:underline flex items-center">
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to Products
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <ProductImageGallery images={product.images || [product.imageUrl]} productName={product.name} />
        </div>
        <div className="py-4">
          <Badge variant="outline" className="mb-2">{product.category}</Badge>
          {product.brand && <Badge variant="secondary" className="mb-2 ml-2">{product.brand}</Badge>}
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-3">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            {/* Placeholder for rating */}
          </div>

          <p className="text-3xl font-bold text-foreground mb-6">KSH {product.price.toFixed(2)}</p>
          
          <p className="text-base text-muted-foreground leading-relaxed mb-6">{product.description}</p>

          <div className="flex flex-col gap-3 mb-6">
            <div className="flex flex-col sm:flex-row gap-3">
                <AddToCartButton product={product} size="lg" className="w-full sm:w-auto flex-grow" />
                <AddToWishlistButton product={product} size="lg" variant="outline" className="w-full sm:w-auto" showText={true} />
            </div>
            <OrderViaWhatsAppButton productName={product.name} className="w-full" />
          </div>
           {product.supplierName && product.supplierId && (
            <ContactSupplierDialog
              productName={product.name}
              supplierName={product.supplierName}
              trigger={
                <Button variant="outline" className="w-full md:w-auto mb-6">
                  <MessageSquare className="mr-2 h-4 w-4" /> Contact Supplier
                </Button>
              }
            />
          )}
          
          <div className="space-y-3 text-sm">
            <div className="flex items-center">
              <Tag className="h-5 w-5 mr-2 text-muted-foreground" />
              <span>Category: <Link href={`/products?category=${product.category}`} className="text-primary hover:underline">{product.category}</Link></span>
            </div>
            {product.supplierName && (
            <div className="flex items-center">
              <Truck className="h-5 w-5 mr-2 text-muted-foreground" />
              <span>Sold by: <Link href={`/suppliers/${product.supplierId}`} className="text-primary hover:underline">{product.supplierName}</Link></span>
            </div>
            )}
            <div className="flex items-center">
              <span className={`h-3 w-3 rounded-full mr-2 ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></span>
              <span>{product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}</span>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-10" />
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
            <Accordion type="single" collapsible defaultValue="description" className="w-full">
              <AccordionItem value="description">
                <AccordionTrigger className="text-xl font-semibold">Product Details</AccordionTrigger>
                <AccordionContent>
                  <div className="prose prose-sm max-w-none text-foreground/80 leading-relaxed py-2" dangerouslySetInnerHTML={{ __html: product.longDescription || product.description }}></div>
                </AccordionContent>
              </AccordionItem>
              {product.specifications && Object.keys(product.specifications).length > 0 && (
                <AccordionItem value="specifications">
                  <AccordionTrigger className="text-xl font-semibold">Specifications</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1 text-foreground/80 py-2">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <li key={key}><strong>{key}:</strong> {value}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
        </div>
      </div>

      <ProductReviewSummary productName={product.name} reviews={product.reviews || []} />
    </div>
  );
}
