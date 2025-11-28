
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { placeholderProducts } from '@/lib/placeholder-data';
import { ProductCard } from '@/components/products/product-card';

// Mapping of category names to specific image URLs from your product list
const categoryImages: Record<string, string> = {
  'Fiber Cables': 'https://ctcsolutions.co.ke/wp-content/uploads/2021/07/Simplex-SC-APC-9-125-Single-mode-Fiber-Optic-Pigtail-400x400.jpg',
  'Connectors': 'https://ctcsolutions.co.ke/wp-content/uploads/2021/07/Fast_connector_SC_APC-removebg-preview-1.png',
  'Adapters': 'https://ctcsolutions.co.ke/wp-content/uploads/2024/07/1_e82d820a-ede1-4d97-8bd4-a39a657ff22b-400x400.webp',
  'Patch Panels': 'https://ctcsolutions.co.ke/wp-content/uploads/2021/08/atb-with-2pcs-Lc-upc-pigtails-and-2pcs-lc-upc-duplex-adapter-400x202.png', // Using ATB image
  'Networking Tools': 'https://ctcsolutions.co.ke/wp-content/uploads/2024/10/fibertool-kit-400x400.jpg',
  'SFP Modules': 'https://ctcsolutions.co.ke/wp-content/uploads/2021/07/BARE-SPLITTER-0.5MM-1-400x350.png', // Using Bare Splitter image
  'Media Converters': 'https://ctcsolutions.co.ke/wp-content/uploads/2021/08/atb-with-2pcs-Lc-upc-pigtails-and-2pcs-lc-upc-duplex-adapter-400x202.png', // Using ATB image
  'Cable Management': 'https://ctcsolutions.co.ke/wp-content/uploads/2021/08/ADSS-J-Hook-400x400.jpg',
  'Testers': 'https://ctcsolutions.co.ke/wp-content/uploads/2021/07/Splicing-Machine-AI-9-Signal-Fire-400x400.jpg', // Using Splicing Machine image
  'Enclosures': 'https://ctcsolutions.co.ke/wp-content/uploads/2021/08/atb-with-2pcs-Lc-upc-pigtails-and-2pcs-lc-upc-duplex-adapter-400x202.png' // Using ATB image
};

const categoryDisplayOrder = [
  'Fiber Cables', 
  'Connectors', 
  'Adapters', 
  'Patch Panels', 
  'Networking Tools', 
  'SFP Modules', 
  'Media Converters', 
  'Cable Management', 
  'Testers', 
  'Enclosures'
];

export default function HomePage() {
  const featuredProducts = placeholderProducts.slice(0, 4); // Get the first 4 products for features section

  const holidayDeals = placeholderProducts
    .filter(p => p.category === 'Routers')
    .sort((a, b) => a.price - b.price)
    .slice(0, 4);

  // Helper function to generate a concise hint from category (max 2 words)
  const getCategoryHint = (categoryName: string): string => {
    if (!categoryName) return "product";
    const words = categoryName.toLowerCase().split(' ');
    if (words.length > 1 && (words[0] === "fiber" || words[0] === "networking")) {
      return `${words[0]} ${words[1]}`;
    }
    return words[0] || "item";
  };


  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <section 
        className="relative text-center bg-cover bg-center rounded-lg overflow-hidden py-20 px-4 mb-12"
        style={{backgroundImage: "url('https://picsum.photos/seed/business/1200/400')"}}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Welcome to Matesh Technologies
          </h1>
          <p className="mt-4 sm:mt-6 text-base lg:text-lg leading-7 text-gray-200 max-w-2xl lg:max-w-4xl mx-auto">
            We're experts in Telecommunication, Networking and Security systems; automatic gates, Biometric systems installations, Closed Circuit televisions cameras (CCTVS), Business Branding. We sale: Fiber & wireless accessories; Tension Clamps, UPBs, Downleads, buckles, steel straps, ATBs, fiber and Ethernet patchcords, Routers, access points. Place your first order and score a big discount, for more info ☎️ 0701694469 / 0797880510
          </p>
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
              <Link href="/products">
                Shop Products
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="shadow-lg">
              <Link href="/about">
                About Us
              </Link>
            </Button>
             <Button asChild variant="outline" size="lg" className="shadow-lg">
              <Link href="#categories">
                Explore Categories
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="holiday-deals" className="py-12 sm:py-16 md:py-24 bg-red-50 dark:bg-red-900/20 rounded-lg">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-8 sm:mb-12 text-primary">
          Santa's Router Deals 🎅
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {holidayDeals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section id="featured-products" className="py-12 sm:py-16 md:py-24">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-8 sm:mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section id="categories" className="py-12 sm:py-16 md:py-24 bg-muted rounded-lg">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-8 sm:mb-12">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4 md:gap-6 container">
          {categoryDisplayOrder.map((category) => (
             <Link href={`/products?category=${encodeURIComponent(category.toLowerCase().replace(/ /g, '-'))}`} key={category} className="group block">
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-card shadow-sm group-hover:shadow-lg transition-shadow">
                 <Image
                  data-ai-hint={getCategoryHint(category)}
                  src={categoryImages[category] || `https://placehold.co/300x300.png`}
                  alt={category}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-3 text-center text-sm sm:text-md font-medium text-foreground group-hover:text-primary transition-colors">{category}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
