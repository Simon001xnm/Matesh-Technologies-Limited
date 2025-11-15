
"use client"

import { useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ChevronDown, ListFilter } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Category, FilterOption } from "@/types";

interface ProductFiltersProps {
  categories: Category[];
  brands: FilterOption[];
}

export function ProductFilters({ categories, brands }: ProductFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const [selectedCategories, setSelectedCategories] = useState<string[]>(searchParams.get('category')?.split(',') || []);
  const [selectedBrands, setSelectedBrands] = useState<string[]>(searchParams.get('brand')?.split(',') || []);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    Number(searchParams.get('minPrice')) || 0,
    Number(searchParams.get('maxPrice')) || 50000
  ]);

  const handleCategoryChange = (slug: string) => {
    const newCategories = selectedCategories.includes(slug)
      ? selectedCategories.filter(c => c !== slug)
      : [...selectedCategories, slug];
    setSelectedCategories(newCategories);
  };
  
  const handleBrandChange = (value: string) => {
    const newBrands = selectedBrands.includes(value)
      ? selectedBrands.filter(b => b !== value)
      : [...selectedBrands, value];
    setSelectedBrands(newBrands);
  };

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams);
    
    if (selectedCategories.length > 0) {
      params.set('category', selectedCategories.join(','));
    } else {
      params.delete('category');
    }

    if (selectedBrands.length > 0) {
      params.set('brand', selectedBrands.join(','));
    } else {
      params.delete('brand');
    }

    params.set('minPrice', priceRange[0].toString());
    params.set('maxPrice', priceRange[1].toString());

    params.set('page', '1'); // Reset to first page on filter change

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <aside className="w-full lg:w-72 lg:sticky lg:top-20 self-start p-4 border rounded-lg shadow-sm bg-card">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Filters</h3>
        <Button variant="ghost" size="sm" className="lg:hidden" onClick={applyFilters}>
          <ListFilter className="h-4 w-4 mr-2" /> Apply
        </Button>
      </div>
      
      <Accordion type="multiple" defaultValue={['category', 'price', 'brand']} className="w-full">
        <AccordionItem value="category">
          <AccordionTrigger className="text-base font-medium">Category</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2 pt-2 max-h-60 overflow-y-auto">
              {categories.map((category) => (
                <li key={category.id} className="flex items-center">
                  <Input
                    type="checkbox"
                    id={`cat-${category.id}`}
                    className="h-4 w-4 mr-2"
                    checked={selectedCategories.includes(category.slug)}
                    onChange={() => handleCategoryChange(category.slug)}
                  />
                  <Label htmlFor={`cat-${category.id}`} className="text-sm font-normal cursor-pointer">
                    {category.name}
                  </Label>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger className="text-base font-medium">Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="pt-2">
              <Slider
                max={100000}
                step={1000}
                value={priceRange}
                onValueChange={(value: [number, number]) => setPriceRange(value)}
                className="my-4"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>KSH {priceRange[0]}</span>
                <span>KSH {priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="brand">
          <AccordionTrigger className="text-base font-medium">Brand</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2 pt-2 max-h-60 overflow-y-auto">
              {brands.map((brand) => (
                <li key={brand.value} className="flex items-center">
                  <Input
                    type="checkbox"
                    id={`brand-${brand.value}`}
                    className="h-4 w-4 mr-2"
                    checked={selectedBrands.includes(brand.value)}
                    onChange={() => handleBrandChange(brand.value)}
                  />
                  <Label htmlFor={`brand-${brand.value}`} className="text-sm font-normal cursor-pointer">
                    {brand.label}
                  </Label>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="w-full mt-6" onClick={applyFilters}>
         <ListFilter className="h-4 w-4 mr-2" /> Apply Filters
      </Button>
    </aside>
  );
}


export function ProductSortDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get('sort');

  const setSort = (sortValue: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort', sortValue);
    router.push(`${pathname}?${params.toString()}`);
  }

  const sortOptions = [
    { label: 'Relevance', value: 'relevance' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Rating', value: 'rating' },
    { label: 'Name: A-Z', value: 'name-asc' },
  ];

  const currentLabel = sortOptions.find(opt => opt.value === currentSort)?.label || 'Sort By';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="ml-auto">
          {currentLabel} <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Sort By</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {sortOptions.map(option => (
           <DropdownMenuItem key={option.value} onClick={() => setSort(option.value)}>
             {option.label}
           </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
