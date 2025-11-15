import type { LucideIcon } from "lucide-react";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: LucideIcon;
  label?: string;
  description?: string;
  children?: NavItem[]; // Added for sub-menus
}

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  price: number;
  category: string;
  imageUrl: string;
  images?: string[];
  stock: number;
  rating?: number;
  reviewCount?: number;
  reviews?: Review[];
  brand?: string;
  specifications?: Record<string, string>;
}

export interface Review {
  id: string;
  author: string;
  avatarUrl?: string;
  rating: number; // 1-5
  comment: string;
  date: string; // ISO date string
  productId?: string;
}

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export interface WishlistItem {
  productId: string;
  name: string;
  price: number;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  imageUrl?: string;
}

export interface FilterOption {
  label: string;
  value: string;
  count?: number;
}

export interface Filters {
  categories?: FilterOption[];
  brands?: FilterOption[];
  priceRange?: { min: number; max: number };
}
