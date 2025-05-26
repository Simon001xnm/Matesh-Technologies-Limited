import { getSupplierById, getProductsBySupplierId, placeholderSuppliers } from "@/lib/placeholder-data";
import type { Supplier, Product } from "@/types";
import { SupplierInfo } from "@/components/suppliers/supplier-info";
import { SupplierProductList } from "@/components/suppliers/supplier-product-list";
import { SupplierReviewSummary } from "@/components/suppliers/supplier-review-summary";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, AlertCircle } from "lucide-react";

interface SupplierPageProps {
  params: { id: string };
}

// Simulate fetching supplier data
async function fetchSupplierData(id: string): Promise<{ supplier: Supplier | null; products: Product[] }> {
  const supplier = getSupplierById(id);
  if (!supplier) return { supplier: null, products: [] };

  // Simulate reviews if not present
  if (!supplier.reviews || supplier.reviews.length === 0) {
    supplier.reviews = placeholderSuppliers.find(s => s.id === id)?.reviews || [];
  }

  const products = getProductsBySupplierId(id);
  return { supplier, products };
}

export default async function SupplierPage({ params }: SupplierPageProps) {
  const { supplier, products } = await fetchSupplierData(params.id);

  if (!supplier) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <AlertCircle className="mx-auto h-12 w-12 text-destructive mb-4" />
        <h1 className="text-2xl font-semibold mb-2">Supplier Not Found</h1>
        <p className="text-muted-foreground mb-6">Sorry, we couldn't find the supplier you're looking for.</p>
        <Button asChild>
          <Link href="/">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
       <div className="mb-6">
        <Link href="/" className="text-sm text-primary hover:underline flex items-center">
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to Home
        </Link>
      </div>
      <SupplierInfo supplier={supplier} />
      <SupplierProductList products={products} />
      <SupplierReviewSummary supplierName={supplier.name} reviews={supplier.reviews || []} />
    </div>
  );
}
