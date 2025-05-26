"use client"

import type { WishlistItem, Product } from "@/types";
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { useToast } from "@/hooks/use-toast";

interface WishlistState {
  items: WishlistItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  clearWishlist: () => void;
  totalItems: () => number;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        const { toast } = useToast.getState(); // Access toast imperatively
        set((state) => {
          const existingItem = state.items.find((i) => i.productId === product.id);
          if (existingItem) {
            // Item already in wishlist, remove it
            toast({
              title: "Removed from Wishlist",
              description: `${product.name} has been removed from your wishlist.`,
            });
            return {
              items: state.items.filter((i) => i.productId !== product.id),
            };
          }
          // Add item to wishlist
          toast({
            title: "Added to Wishlist",
            description: `${product.name} has been added to your wishlist.`,
          });
          const newItem: WishlistItem = {
            productId: product.id,
            name: product.name,
            price: product.price,
            imageUrl: product.imageUrl,
          };
          return { items: [...state.items, newItem] };
        });
      },
      removeItem: (productId) => {
        const { toast } = useToast.getState();
        const itemToRemove = get().items.find(item => item.productId === productId);
        set((state) => ({
          items: state.items.filter((item) => item.productId !== productId),
        }));
        if (itemToRemove) {
          toast({
            title: "Removed from Wishlist",
            description: `${itemToRemove.name} has been removed from your wishlist.`,
          });
        }
      },
      isWishlisted: (productId: string) => {
        return get().items.some((item) => item.productId === productId);
      },
      clearWishlist: () => {
        set({ items: [] });
        const { toast } = useToast.getState();
        toast({
          title: "Wishlist Cleared",
          description: "All items have been removed from your wishlist.",
        });
      },
      totalItems: () => {
        return get().items.length;
      },
    }),
    {
      name: 'wishlist-storage', 
      storage: createJSONStorage(() => localStorage), 
    }
  )
);
