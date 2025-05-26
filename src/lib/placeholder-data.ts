import type { Product, Supplier, Review, Category, CartItem } from "@/types";

export const placeholderCategories: Category[] = [
  { id: "cat1", name: "Fiber Optic Cables", slug: "fiber-optic-cables", imageUrl: "https://placehold.co/300x200.png" },
  { id: "cat2", name: "Connectors & Adapters", slug: "connectors-adapters", imageUrl: "https://placehold.co/300x200.png" },
  { id: "cat3", name: "Networking Tools", slug: "networking-tools", imageUrl: "https://placehold.co/300x200.png" },
  { id: "cat4", name: "Patch Panels", slug: "patch-panels", imageUrl: "https://placehold.co/300x200.png" },
  { id: "cat5", name: "SFP Modules", slug: "sfp-modules", imageUrl: "https://placehold.co/300x200.png" },
];

export const placeholderReviews: Review[] = [
  { id: "rev1", author: "Alice Smith", rating: 5, comment: "Excellent product, very high quality!", date: "2023-05-15T10:00:00Z", productId: "prod1", avatarUrl: "https://placehold.co/40x40.png" },
  { id: "rev2", author: "Bob Johnson", rating: 4, comment: "Good value for money, works as expected.", date: "2023-05-20T14:30:00Z", productId: "prod1", avatarUrl: "https://placehold.co/40x40.png" },
  { id: "rev3", author: "Carol Williams", rating: 3, comment: "Decent, but had some minor issues with installation.", date: "2023-06-01T09:15:00Z", productId: "prod2", avatarUrl: "https://placehold.co/40x40.png" },
  { id: "rev4", author: "David Brown", rating: 5, comment: "Supplier was very helpful and shipping was fast.", date: "2023-06-05T11:00:00Z", supplierId: "sup1", avatarUrl: "https://placehold.co/40x40.png" },
  { id: "rev5", author: "Eve Davis", rating: 2, comment: "Product broke after a week. Disappointed.", date: "2023-06-10T16:45:00Z", productId: "prod3", avatarUrl: "https://placehold.co/40x40.png" },
];

export const placeholderProducts: Product[] = [
  {
    id: "prod1",
    name: "LC to LC Fiber Patch Cable OS2 Single Mode",
    description: "High-speed OS2 single mode fiber optic cable with LC connectors.",
    longDescription: "This OS2 single mode fiber optic cable is ideal for 1G/10G/40G/100G Ethernet connections. It features LC to LC connectors and a durable PVC jacket. Perfect for data centers, enterprise networks, and telecommunication rooms.",
    price: 12.99,
    category: "Fiber Optic Cables",
    imageUrl: "https://placehold.co/600x400.png",
    images: ["https://placehold.co/600x400.png", "https://placehold.co/600x400.png?v=2", "https://placehold.co/600x400.png?v=3"],
    stock: 150,
    rating: 4.5,
    reviewCount: 2,
    reviews: placeholderReviews.filter(r => r.productId === "prod1"),
    supplierId: "sup1",
    supplierName: "OptiConnect Solutions",
    brand: "CablePro",
    specifications: { "Connector Type": "LC to LC", "Mode": "Single Mode OS2", "Jacket Material": "PVC", "Length": "1m, 2m, 5m available" }
  },
  {
    id: "prod2",
    name: "RJ45 Crimping Tool Kit",
    description: "All-in-one crimping tool kit for RJ45, RJ11, RJ12 connectors.",
    longDescription: "A comprehensive network tool kit that includes a crimper, wire stripper, punch down tool, and network cable tester. Essential for any network technician or DIY enthusiast.",
    price: 39.99,
    category: "Networking Tools",
    imageUrl: "https://placehold.co/600x400.png",
    images: ["https://placehold.co/600x400.png", "https://placehold.co/600x400.png?v=2"],
    stock: 75,
    rating: 3.8,
    reviewCount: 1,
    reviews: placeholderReviews.filter(r => r.productId === "prod2"),
    supplierId: "sup2",
    supplierName: "NetBuild Essentials",
    brand: "NetTool",
    specifications: { "Compatibility": "RJ45, RJ11, RJ12", "Includes": "Crimper, Stripper, Tester, Punch Down Tool", "Material": "Hardened Steel" }
  },
  {
    id: "prod3",
    name: "24-Port Cat6 Patch Panel",
    description: "Rack-mountable 24-port Cat6 patch panel for network organization.",
    longDescription: "Organize your network cables efficiently with this 24-port Cat6 patch panel. Fits standard 19-inch racks and supports T568A and T568B wiring. Includes cable management bar.",
    price: 45.50,
    category: "Patch Panels",
    imageUrl: "https://placehold.co/600x400.png",
    images: ["https://placehold.co/600x400.png"],
    stock: 50,
    rating: 2.2,
    reviewCount: 1,
    reviews: placeholderReviews.filter(r => r.productId === "prod3"),
    supplierId: "sup1",
    supplierName: "OptiConnect Solutions",
    brand: "RackMaster",
    specifications: { "Ports": "24", "Category": "Cat6", "Rack Units": "1U", "Mounting": "19-inch Rack" }
  },
  {
    id: "prod4",
    name: "1G SFP LX Transceiver Module",
    description: "1000Base-LX SFP module for long-distance fiber connections.",
    longDescription: "This SFP transceiver module supports data rates up to 1.25 Gbps and transmission distances up to 10km over single mode fiber. Hot-pluggable and compatible with a wide range of networking equipment.",
    price: 25.00,
    category: "SFP Modules",
    imageUrl: "https://placehold.co/600x400.png",
    images: ["https://placehold.co/600x400.png", "https://placehold.co/600x400.png?v=2"],
    stock: 200,
    rating: 4.8,
    reviewCount: 0,
    reviews: [],
    supplierId: "sup2",
    supplierName: "NetBuild Essentials",
    brand: "TransceiveX",
    specifications: { "Data Rate": "1.25 Gbps", "Interface": "LC Duplex", "Reach": "10km", "Wavelength": "1310nm" }
  },
];

export const placeholderSuppliers: Supplier[] = [
  {
    id: "sup1",
    name: "OptiConnect Solutions",
    description: "Leading provider of high-quality fiber optic components and solutions for telecommunications and data centers.",
    logoUrl: "https://placehold.co/150x150.png",
    bannerUrl: "https://placehold.co/1200x300.png",
    contactEmail: "sales@opticonnect.com",
    website: "https://opticonnect.com",
    rating: 4.2,
    reviewCount: 1,
    reviews: placeholderReviews.filter(r => r.supplierId === "sup1"),
  },
  {
    id: "sup2",
    name: "NetBuild Essentials",
    description: "Your trusted source for networking tools, equipment, and accessories for professionals and DIYers.",
    logoUrl: "https://placehold.co/150x150.png",
    bannerUrl: "https://placehold.co/1200x300.png",
    contactEmail: "info@netbuild.com",
    website: "https://netbuild.com",
    rating: 4.0,
    reviewCount: 0,
    reviews: [],
  },
];

export const placeholderCartItems: CartItem[] = [
  { productId: "prod1", name: "LC to LC Fiber Patch Cable", price: 12.99, quantity: 2, imageUrl: "https://placehold.co/100x100.png" },
  { productId: "prod2", name: "RJ45 Crimping Tool Kit", price: 39.99, quantity: 1, imageUrl: "https://placehold.co/100x100.png" },
];

export function getProductById(id: string): Product | undefined {
  return placeholderProducts.find(p => p.id === id);
}

export function getSupplierById(id: string): Supplier | undefined {
  return placeholderSuppliers.find(s => s.id === id);
}

export function getProductsBySupplierId(supplierId: string): Product[] {
  return placeholderProducts.filter(p => p.supplierId === supplierId);
}
