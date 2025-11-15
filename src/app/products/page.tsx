
import { ProductCard } from "@/components/products/product-card";
import { ProductFilters, ProductSortDropdown } from "@/components/products/product-filters";
import { placeholderProducts, placeholderCategories } from "@/lib/placeholder-data";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import type { Product } from "@/types";
import { SearchBar } from "@/components/products/search-bar";
import { Suspense } from "react";

const ITEMS_PER_PAGE = 12;

interface ProductsPageProps {
  searchParams: {
    search?: string;
    category?: string;
    brand?: string;
    minPrice?: string;
    maxPrice?: string;
    page?: string;
    sort?: string;
  };
}

const getBrandOptions = (products: Product[]) => {
  const brands = new Set(products.map(p => p.brand).filter(Boolean) as string[]);
  return Array.from(brands).map(brand => ({ label: brand, value: brand.toLowerCase().replace(/ /g, '-') }));
};


export default function ProductsPage({ searchParams }: ProductsPageProps) {
  const { search, category, brand, minPrice, maxPrice, page = '1', sort } = searchParams;

  let filteredProducts = placeholderProducts;

  // Search filter
  if (search) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Category filter
  if (category) {
      const categoryName = placeholderCategories.find(c => c.slug === category)?.name || category;
      filteredProducts = filteredProducts.filter(
          product => product.category.toLowerCase().replace(/ /g, '-') === categoryName.toLowerCase().replace(/ /g, '-')
      );
  }

  // Brand filter
  if (brand) {
    const brandNames = brand.split(',');
    filteredProducts = filteredProducts.filter(product => 
      product.brand && brandNames.includes(product.brand.toLowerCase().replace(/ /g, '-'))
    );
  }

  // Price filter
  if (minPrice) {
    filteredProducts = filteredProducts.filter(p => p.price >= Number(minPrice));
  }
  if (maxPrice) {
    filteredProducts = filteredProducts.filter(p => p.price <= Number(maxPrice));
  }

  // Sorting
  if (sort) {
    switch (sort) {
      case 'price-asc':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filteredProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'name-asc':
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
  }


  // Pagination
  const currentPage = Number(page);
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const brandOptions = getBrandOptions(placeholderProducts);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `/products?${params.toString()}`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">Our Products</h1>
        <p className="mt-2 text-base sm:text-lg text-muted-foreground">
          Browse our extensive collection of networking and fiber optic accessories.
        </p>
      </header>

      <div className="mb-8">
        <div className="relative max-w-lg mx-auto">
          <Suspense fallback={<div className="h-10 w-full bg-muted rounded-lg" />}>
             <SearchBar />
          </Suspense>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <Suspense fallback={<div className="w-full lg:w-72 h-96 bg-muted rounded-lg" />}>
          <ProductFilters 
            categories={placeholderCategories}
            brands={brandOptions} 
          />
        </Suspense>
        <main className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <p className="text-sm text-muted-foreground">{filteredProducts.length} products found</p>
            <Suspense fallback={<div className="h-10 w-32 bg-muted rounded-lg" />}>
               <ProductSortDropdown />
            </Suspense>
          </div>
          
          {paginatedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
             <div className="text-center py-16">
              <Search className="mx-auto h-16 w-16 text-muted-foreground mb-6" />
              <h2 className="text-2xl font-semibold mb-3">No Products Found</h2>
              <p className="text-muted-foreground">
                We couldn't find any products matching your criteria. Try adjusting your filters.
              </p>
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  {currentPage > 1 && (
                    <PaginationItem>
                      <PaginationPrevious href={createPageURL(currentPage - 1)} />
                    </PaginationItem>
                  )}
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink href={createPageURL(index + 1)} isActive={currentPage === index + 1}>
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                   {currentPage < totalPages && (
                    <PaginationItem>
                      <PaginationNext href={createPageURL(currentPage + 1)} />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
