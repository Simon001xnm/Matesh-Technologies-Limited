
import type { Product, Supplier, Review, Category, CartItem } from "@/types";

export const placeholderCategories: Category[] = [
  { id: "cat1", name: "Fiber Cables", slug: "fiber-cables", imageUrl: "https://ctcsolutions.co.ke/wp-content/uploads/2021/07/Simplex-SC-APC-9-125-Single-mode-Fiber-Optic-Pigtail-400x400.jpg" },
  { id: "cat2", name: "Connectors", slug: "connectors", imageUrl: "https://ctcsolutions.co.ke/wp-content/uploads/2021/07/Fast_connector_SC_APC-removebg-preview-1.png" },
  { id: "cat3", name: "Adapters", slug: "adapters", imageUrl: "https://ctcsolutions.co.ke/wp-content/uploads/2024/07/1_e82d820a-ede1-4d97-8bd4-a39a657ff22b-400x400.webp" },
  { id: "cat4", name: "Patch Panels", slug: "patch-panels", imageUrl: "https://ctcsolutions.co.ke/wp-content/uploads/2021/08/atb-with-2pcs-Lc-upc-pigtails-and-2pcs-lc-upc-duplex-adapter-400x202.png" }, // Using ATB image
  { id: "cat5", name: "Networking Tools", slug: "networking-tools", imageUrl: "https://ctcsolutions.co.ke/wp-content/uploads/2024/10/fibertool-kit-400x400.jpg" },
  { id: "cat6", name: "SFP Modules", slug: "sfp-modules", imageUrl: "https://ctcsolutions.co.ke/wp-content/uploads/2021/07/BARE-SPLITTER-0.5MM-1-400x350.png" }, // Using Bare Splitter image
  { id: "cat7", name: "Media Converters", slug: "media-converters", imageUrl: "https://ctcsolutions.co.ke/wp-content/uploads/2021/08/atb-with-2pcs-Lc-upc-pigtails-and-2pcs-lc-upc-duplex-adapter-400x202.png" }, // Using ATB image
  { id: "cat8", name: "Cable Management", slug: "cable-management", imageUrl: "https://ctcsolutions.co.ke/wp-content/uploads/2021/08/ADSS-J-Hook-400x400.jpg" },
  { id: "cat9", name: "Testers", slug: "testers", imageUrl: "https://ctcsolutions.co.ke/wp-content/uploads/2021/07/Splicing-Machine-AI-9-Signal-Fire-400x400.jpg" }, // Using Splicing Machine image
  { id: "cat10", name: "Enclosures", slug: "enclosures", imageUrl: "https://ctcsolutions.co.ke/wp-content/uploads/2021/08/atb-with-2pcs-Lc-upc-pigtails-and-2pcs-lc-upc-duplex-adapter-400x202.png" } // Using ATB image
];

export const placeholderReviews: Review[] = [
  { id: "rev1", author: "Alice Smith", rating: 5, comment: "Excellent SC/APC connector, very high quality!", date: "2023-05-15T10:00:00Z", productId: "prod1", avatarUrl: "https://placehold.co/40x40.png?user=alice" },
  { id: "rev2", author: "Bob Johnson", rating: 4, comment: "Good value for this fast connector.", date: "2023-05-20T14:30:00Z", productId: "prod1", avatarUrl: "https://placehold.co/40x40.png?user=bob" },
  { id: "rev3", author: "Carol Williams", rating: 3, comment: "Decent pigtail, but a bit stiff.", date: "2023-06-01T09:15:00Z", productId: "prod2", avatarUrl: "https://placehold.co/40x40.png?user=carol" },
  { id: "rev4", author: "David Brown", rating: 5, comment: "Supplier (OptiConnect) was very helpful and shipping was fast.", date: "2023-06-05T11:00:00Z", supplierId: "sup1", avatarUrl: "https://placehold.co/40x40.png?user=david" },
  { id: "rev5", author: "Eve Davis", rating: 2, comment: "This SC/APC connector (Type B) didn't fit well.", date: "2023-06-10T16:45:00Z", productId: "prod3", avatarUrl: "https://placehold.co/40x40.png?user=eve" },
];

export const placeholderProducts: Product[] = [
  {
    id: "prod1",
    name: "SC/APC Fast Connector",
    description: "High-quality SC/APC fast connector for quick fiber optic termination.",
    longDescription: "This SC/APC fast connector allows for easy and quick termination of fiber optic cables in the field. No polishing or epoxy required. Ideal for FTTx applications, data centers, and LAN. Features low insertion loss and high return loss.",
    price: 350, // Updated Price
    category: "Connectors",
    imageUrl: "https://ctcsolutions.co.ke/wp-content/uploads/2021/07/Fast_connector_SC_APC-removebg-preview-1.png",
    images: ["https://ctcsolutions.co.ke/wp-content/uploads/2021/07/Fast_connector_SC_APC-removebg-preview-1.png"],
    stock: 480,
    rating: 4.5,
    reviewCount: 2,
    reviews: placeholderReviews.filter(r => r.productId === "prod1"),
    supplierId: "sup1",
    supplierName: "OptiConnect Solutions",
    brand: "FiberLink",
    specifications: { "Connector Type": "SC/APC", "Application": "FTTx, LAN", "Insertion Loss": "<0.3dB", "Return Loss": ">60dB" }
  },
  {
    id: "prod2",
    name: "Simplex SC/APC Single Mode Pigtail",
    description: "9/125 Single mode simplex fiber optic pigtail with SC/APC connector.",
    longDescription: "High-quality simplex SC/APC single mode (9/125µm) fiber optic pigtail. Ideal for splicing applications in ODF, patch panels, and fiber optic distribution frames. Standard 0.9mm buffer diameter.",
    price: 550, // Updated Price
    category: "Fiber Cables",
    imageUrl: "https://ctcsolutions.co.ke/wp-content/uploads/2021/07/Simplex-SC-APC-9-125-Single-mode-Fiber-Optic-Pigtail-400x400.jpg",
    images: ["https://ctcsolutions.co.ke/wp-content/uploads/2021/07/Simplex-SC-APC-9-125-Single-mode-Fiber-Optic-Pigtail-400x400.jpg"],
    stock: 250,
    rating: 3.0,
    reviewCount: 1,
    reviews: placeholderReviews.filter(r => r.productId === "prod2"),
    supplierId: "sup2",
    supplierName: "NetBuild Essentials",
    brand: "CoreOptics",
    specifications: { "Connector": "SC/APC", "Fiber Type": "Single Mode G.657.A1", "Buffer Diameter": "0.9mm", "Length": "1.5m" }
  },
  {
    id: "prod3",
    name: "Fiber SC/APC Fast Connector (Type B)",
    description: "Alternative SC/APC fast connector for reliable fiber termination.",
    longDescription: "This Type B SC/APC fast connector provides a robust and quick solution for field fiber termination. Suitable for drop cables and indoor fiber installations. Ensures stable optical performance.",
    price: 380, // Updated Price
    category: "Connectors",
    imageUrl: "https://ctcsolutions.co.ke/wp-content/uploads/2021/07/Fiber-SC-APC-Fast-Connector-400x321.jpg",
    images: ["https://ctcsolutions.co.ke/wp-content/uploads/2021/07/Fiber-SC-APC-Fast-Connector-400x321.jpg"],
    stock: 300,
    rating: 2.0,
    reviewCount: 1,
    reviews: placeholderReviews.filter(r => r.productId === "prod3"),
    supplierId: "sup1",
    supplierName: "OptiConnect Solutions",
    brand: "FiberLink",
    specifications: { "Connector Style": "SC/APC Type B", "Durability": ">500 matings", "Operating Temp": "-40°C to +75°C" }
  },
  {
    id: "prod4",
    name: "Outdoor Drop Cable (2km Spool)",
    description: "Durable outdoor fiber optic drop cable, 2km length.",
    longDescription: "Self-supporting outdoor drop cable designed for aerial and duct installations. Features a robust construction to withstand harsh environmental conditions. Ideal for last-mile FTTx connectivity. Sold per 2km spool.",
    price: 32000, // Updated Price
    category: "Fiber Cables",
    imageUrl: "https://ctcsolutions.co.ke/wp-content/uploads/2021/10/drop-cable-2km-400x352.jpg",
    images: ["https://ctcsolutions.co.ke/wp-content/uploads/2021/10/drop-cable-2km-400x352.jpg"],
    stock: 30,
    rating: 4.8,
    reviewCount: 0,
    reviews: [],
    supplierId: "sup2",
    supplierName: "NetBuild Essentials",
    brand: "DuraSpan",
    specifications: { "Length": "2km", "Type": "Self-supporting, Outdoor", "Fiber Count": "1-4 Cores Available", "Tensile Strength": "High" }
  },
  {
    id: "prod5",
    name: "Access Terminal Box (ATB) - LC/UPC",
    description: "Compact ATB with 2 LC/UPC pigtails and 2 LC/UPC duplex adapters.",
    longDescription: "This Access Terminal Box is designed for FTTx applications, providing a compact solution for terminating and distributing optical fibers. Comes pre-loaded with 2 LC/UPC pigtails and 2 LC/UPC duplex adapters.",
    price: 2200, // Updated Price
    category: "Enclosures",
    imageUrl: "https://ctcsolutions.co.ke/wp-content/uploads/2021/08/atb-with-2pcs-Lc-upc-pigtails-and-2pcs-lc-upc-duplex-adapter-400x202.png",
    images: ["https://ctcsolutions.co.ke/wp-content/uploads/2021/08/atb-with-2pcs-Lc-upc-pigtails-and-2pcs-lc-upc-duplex-adapter-400x202.png"],
    stock: 120,
    rating: 4.2,
    reviewCount: 0,
    reviews: [],
    supplierId: "sup1",
    supplierName: "OptiConnect Solutions",
    brand: "TermiBox",
    specifications: { "Capacity": "2 Fibers", "Adapters": "2x LC/UPC Duplex", "Pigtails": "2x LC/UPC", "Material": "ABS Plastic" }
  },
  {
    id: "prod6",
    name: "LC/UPC to SC/UPC Patch Cord",
    description: "Fiber optic patch cord, LC/UPC to SC/UPC connectors, simplex/duplex.",
    longDescription: "High-quality fiber optic patch cord for connecting network devices. Features LC/UPC on one end and SC/UPC on the other. Available in simplex or duplex configurations and various lengths.",
    price: 950, // Updated Price
    category: "Fiber Cables",
    imageUrl: "https://ctcsolutions.co.ke/wp-content/uploads/2021/07/fibre-patch-cord-lc-upc-sc-upc-400x328.jpg",
    images: ["https://ctcsolutions.co.ke/wp-content/uploads/2021/07/fibre-patch-cord-lc-upc-sc-upc-400x328.jpg"],
    stock: 350,
    rating: 4.6,
    reviewCount: 0,
    reviews: [],
    supplierId: "sup2",
    supplierName: "NetBuild Essentials",
    brand: "PatchLink",
    specifications: { "Connector A": "LC/UPC", "Connector B": "SC/UPC", "Mode": "Single Mode / Multi Mode", "Length": "1m, 3m, 5m" }
  },
  {
    id: "prod7",
    name: "ADSS J-Hook Cable Support",
    description: "Durable J-Hook for supporting ADSS and other outdoor cables.",
    longDescription: "ADSS J-Hook designed for suspending aerial fiber optic cables. Made from high-strength, UV-resistant material for long-term outdoor use. Provides secure and organized cable routing.",
    price: 150, // Updated Price
    category: "Cable Management",
    imageUrl: "https://ctcsolutions.co.ke/wp-content/uploads/2021/08/ADSS-J-Hook-400x400.jpg",
    images: ["https://ctcsolutions.co.ke/wp-content/uploads/2021/08/ADSS-J-Hook-400x400.jpg"],
    stock: 1000,
    rating: 4.9,
    reviewCount: 0,
    reviews: [],
    supplierId: "sup1",
    supplierName: "OptiConnect Solutions",
    brand: "CableHold",
    specifications: { "Material": "UV-Resistant Polymer/Metal", "Application": "Aerial Cable Suspension", "Cable Diameter": "Up to 20mm" }
  },
  {
    id: "prod8",
    name: "AI-9 Signal Fire Splicing Machine",
    description: "Advanced automatic optical fiber fusion splicer.",
    longDescription: "The Signal Fire AI-9 is a fully automatic, core-alignment fusion splicer. Features fast splicing and heating times, a rugged design for field use, and a high-resolution LCD screen. Comes with a complete toolkit.",
    price: 145000, // Updated Price
    category: "Networking Tools", // Should be Testers or Networking Tools, using Networking Tools as per category list.
    imageUrl: "https://ctcsolutions.co.ke/wp-content/uploads/2021/07/Splicing-Machine-AI-9-Signal-Fire-400x400.jpg",
    images: ["https://ctcsolutions.co.ke/wp-content/uploads/2021/07/Splicing-Machine-AI-9-Signal-Fire-400x400.jpg"],
    stock: 15,
    rating: 4.7,
    reviewCount: 0,
    reviews: [],
    supplierId: "sup2",
    supplierName: "NetBuild Essentials",
    brand: "Signal Fire",
    specifications: { "Model": "AI-9", "Alignment": "Core Alignment", "Splicing Time": "6s", "Heating Time": "15s" }
  },
  {
    id: "prod9",
    name: "Simplex SC/UPC Single Mode Pigtail",
    description: "Standard SC/UPC single mode simplex fiber optic pigtail.",
    longDescription: "Reliable simplex SC/UPC single mode fiber optic pigtail for various telecommunication applications. Features low insertion loss and excellent durability. Suitable for fusion splicing.",
    price: 500, // Updated Price
    category: "Fiber Cables",
    imageUrl: "https://ctcsolutions.co.ke/wp-content/uploads/2021/07/Simplex-SC-UPC-Single-Mode-Fiber-Optic-Pigtail-400x400.jpg",
    images: ["https://ctcsolutions.co.ke/wp-content/uploads/2021/07/Simplex-SC-UPC-Single-Mode-Fiber-Optic-Pigtail-400x400.jpg"],
    stock: 280,
    rating: 4.3,
    reviewCount: 0,
    reviews: [],
    supplierId: "sup1",
    supplierName: "OptiConnect Solutions",
    brand: "CoreOptics",
    specifications: { "Connector": "SC/UPC", "Fiber Type": "Single Mode G.652.D", "Buffer Diameter": "0.9mm", "Length": "1m" }
  },
  {
    id: "prod10",
    name: "Fiber Optic Tool Kit",
    description: "Comprehensive tool kit for fiber optic installation and maintenance.",
    longDescription: "This complete fiber optic tool kit includes essentials like fiber cleaver, stripper, power meter, visual fault locator, and various cleaning supplies. Packaged in a durable carrying case.",
    price: 22500, // Updated Price
    category: "Networking Tools",
    imageUrl: "https://ctcsolutions.co.ke/wp-content/uploads/2024/10/fibertool-kit-400x400.jpg",
    images: ["https://ctcsolutions.co.ke/wp-content/uploads/2024/10/fibertool-kit-400x400.jpg"],
    stock: 40,
    rating: 4.5,
    reviewCount: 0,
    reviews: [],
    supplierId: "sup2",
    supplierName: "NetBuild Essentials",
    brand: "ProKit",
    specifications: { "Key Tools": "Cleaver, Power Meter, VFL", "Case": "Durable Carrying Case", "Application": "Installation, Maintenance" }
  },
  {
    id: "prod11",
    name: "Fiber Optic Duplex Adapter SC/UPC",
    description: "SC/UPC to SC/UPC duplex fiber optic adapter.",
    longDescription: "High-precision SC/UPC duplex adapter for connecting two SC/UPC duplex fiber optic patch cords. Features low insertion loss and a durable housing for reliable connections.",
    price: 250, // Updated Price
    category: "Adapters",
    imageUrl: "https://ctcsolutions.co.ke/wp-content/uploads/2024/07/1_e82d820a-ede1-4d97-8bd4-a39a657ff22b-400x400.webp",
    images: ["https://ctcsolutions.co.ke/wp-content/uploads/2024/07/1_e82d820a-ede1-4d97-8bd4-a39a657ff22b-400x400.webp"],
    stock: 600,
    rating: 4.4,
    reviewCount: 0,
    reviews: [],
    supplierId: "sup1",
    supplierName: "OptiConnect Solutions",
    brand: "AdaptLink",
    specifications: { "Type": "SC/UPC Duplex", "Sleeve Material": "Ceramic", "Insertion Loss": "<0.2dB" }
  },
  {
    id: "prod12",
    name: "Universal Pole Bracket (UPB)",
    description: "Versatile universal pole bracket for mounting telecom equipment.",
    longDescription: "The Universal Pole Bracket (UPB) is designed for easy and secure mounting of various telecommunication equipment on poles. Made from galvanized steel for corrosion resistance.",
    price: 1000, // Updated Price
    category: "Cable Management",
    imageUrl: "https://ctcsolutions.co.ke/wp-content/uploads/2021/08/Universal-Pole-Bracket-UPB-400x400.jpg",
    images: ["https://ctcsolutions.co.ke/wp-content/uploads/2021/08/Universal-Pole-Bracket-UPB-400x400.jpg"],
    stock: 90,
    rating: 4.7,
    reviewCount: 0,
    reviews: [],
    supplierId: "sup2",
    supplierName: "NetBuild Essentials",
    brand: "MountPro",
    specifications: { "Material": "Galvanized Steel", "Application": "Pole Mounting", "Compatibility": "Universal" }
  },
  {
    id: "prod13",
    name: "Bare Fiber PLC Splitter 1x4",
    description: "1x4 bare fiber PLC splitter for optical signal distribution.",
    longDescription: "This 1x4 Planar Lightwave Circuit (PLC) splitter divides a single optical input into four outputs with minimal loss. Bare fiber type for integration into custom enclosures or splice trays.",
    price: 1800, // Updated Price
    category: "SFP Modules", // This was "Connectors", changing to "SFP Modules" as per category list on homepage, though PLC Splitters are more like components.
    imageUrl: "https://ctcsolutions.co.ke/wp-content/uploads/2021/07/BARE-SPLITTER-0.5MM-1-400x350.png",
    images: ["https://ctcsolutions.co.ke/wp-content/uploads/2021/07/BARE-SPLITTER-0.5MM-1-400x350.png"],
    stock: 70,
    rating: 4.1,
    reviewCount: 0,
    reviews: [],
    supplierId: "sup1",
    supplierName: "OptiConnect Solutions",
    brand: "SplitOptic",
    specifications: { "Type": "PLC Splitter", "Ratio": "1x4", "Fiber Type": "Bare Fiber", "Operating Wavelength": "1260-1650nm" }
  }
];

export const placeholderSuppliers: Supplier[] = [
  {
    id: "sup1",
    name: "OptiConnect Solutions",
    description: "Leading provider of high-quality fiber optic components and solutions for telecommunications and data centers.",
    logoUrl: "https://placehold.co/150x150.png?text=OptiConnect+Logo",
    bannerUrl: "https://placehold.co/1200x300.png?text=OptiConnect+Banner",
    contactEmail: "sales@opticonnect.com",
    website: "https://opticonnect.com",
    rating: 4.2,
    reviewCount: 1,
    reviews: placeholderReviews.filter(r => r.supplierId === "sup1"),
    isVerified: true, // OptiConnect is now a verified supplier
  },
  {
    id: "sup2",
    name: "NetBuild Essentials",
    description: "Your trusted source for networking tools, equipment, and accessories for professionals and DIYers.",
    logoUrl: "https://placehold.co/150x150.png?text=NetBuild+Logo",
    bannerUrl: "https://placehold.co/1200x300.png?text=NetBuild+Banner",
    contactEmail: "info@netbuild.com",
    website: "https://netbuild.com",
    rating: 4.0,
    reviewCount: 0,
    reviews: [],
    isVerified: false,
  },
];

export const placeholderCartItems: CartItem[] = [];

export function getProductById(id: string): Product | undefined {
  return placeholderProducts.find(p => p.id === id);
}

export function getSupplierById(id: string): Supplier | undefined {
  return placeholderSuppliers.find(s => s.id === id);
}

export function getProductsBySupplierId(supplierId: string): Product[] {
  return placeholderProducts.filter(p => p.supplierId === supplierId);
}

export function getAllSuppliers(): Supplier[] {
  return placeholderSuppliers;
}

    