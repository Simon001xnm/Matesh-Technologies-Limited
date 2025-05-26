"use client"

import { useState } from "react";
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
import { placeholderCategories } from "@/lib/placeholder-data"; // Using placeholder for now

// Placeholder filter options
const brandOptions: FilterOption[] = [
  { label: "CablePro", value: "cablepro" },
  { label: "NetTool", value: "nettool" },
  { label: "RackMaster", value: "rackmaster" },
  { label: "TransceiveX", value: "transceivex" },
];


export function ProductFilters() {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  // TODO: Implement actual filtering logic

  return (
    <aside className="w-full lg:w-72 lg:sticky lg:top-20 self-start p-4 border rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Filters</h3>
        <Button variant="ghost" size="sm" className="lg:hidden">
          <ListFilter className="h-4 w-4 mr-2" /> Apply
        </Button>
      </div>
      
      <Accordion type="multiple" defaultValue={['category', 'price', 'brand']} className="w-full">
        <AccordionItem value="category">
          <AccordionTrigger className="text-base font-medium">Category</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2 pt-2">
              {placeholderCategories.map((category) => (
                <li key={category.id} className="flex items-center">
                  <Input
                    type="checkbox"
                    id={`cat-${category.id}`}
                    className="h-4 w-4 mr-2"
                    checked={selectedCategories.includes(category.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedCategories([...selectedCategories, category.id]);
                      } else {
                        setSelectedCategories(selectedCategories.filter(id => id !== category.id));
                      }
                    }}
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
                defaultValue={[0, 500]}
                max={1000}
                step={10}
                value={priceRange}
                onValueChange={(value: [number, number]) => setPriceRange(value)}
                className="my-4"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="brand">
          <AccordionTrigger className="text-base font-medium">Brand</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2 pt-2">
              {brandOptions.map((brand) => (
                <li key={brand.value} className="flex items-center">
                  <Input
                    type="checkbox"
                    id={`brand-${brand.value}`}
                    className="h-4 w-4 mr-2"
                    checked={selectedBrands.includes(brand.value)}
                     onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedBrands([...selectedBrands, brand.value]);
                      } else {
                        setSelectedBrands(selectedBrands.filter(id => id !== brand.value));
                      }
                    }}
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

      <Button className="w-full mt-6 hidden lg:flex">
         <ListFilter className="h-4 w-4 mr-2" /> Apply Filters
      </Button>
    </aside>
  );
}


export function ProductSortDropdown() {
  // TODO: Implement sort logic
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="ml-auto">
          Sort By <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Sort By</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
        <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
        <DropdownMenuItem>Rating</DropdownMenuItem>
        <DropdownMenuItem>Newest</DropdownMenuItem>
        <DropdownMenuItem>Name: A-Z</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
