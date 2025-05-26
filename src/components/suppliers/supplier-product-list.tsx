import type { Product } from "@/types";
import { ProductCard } from "@/components/products/product-card";

interface SupplierProductListProps {
  products: Product[];
}

export function SupplierProductList({ products }: SupplierProductListProps) {
  if (!products || products.length === 0) {
    return <p className="text-muted-foreground mt-8 text-center">This supplier has no products listed yet.</p>;
  }

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-6 tracking-tight">Products from this Supplier</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
