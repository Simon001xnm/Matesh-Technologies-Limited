import { getAllSuppliers } from "@/lib/placeholder-data";
import { SupplierCard } from "@/components/suppliers/supplier-card";
import type { Supplier } from "@/types";

async function fetchSuppliers(): Promise<Supplier[]> {
  // In a real app, this would fetch from an API or database
  return getAllSuppliers();
}

export default async function SuppliersPage() {
  const suppliers = await fetchSuppliers();

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary">Our Suppliers</h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover the trusted partners who provide our high-quality networking and fiber optic accessories.
        </p>
      </header>

      {suppliers.length === 0 ? (
        <p className="text-center text-muted-foreground">No suppliers listed at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {suppliers.map((supplier) => (
            <SupplierCard key={supplier.id} supplier={supplier} />
          ))}
        </div>
      )}
    </div>
  );
}
