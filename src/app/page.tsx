
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { placeholderProducts } from '@/lib/placeholder-data'; // Import placeholderProducts

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
    <div className="container mx-auto px-4 py-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
          Welcome to Matesh Technologies
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          Your one-stop shop for high-quality fiber optic and networking accessories. Explore our wide range of products designed for reliability and performance.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="/products">
              Shop Products <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/#categories">
              Explore Categories
            </Link>
          </Button>
        </div>
      </section>

      <section id="featured-products" className="py-16 sm:py-24">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group relative rounded-lg border p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                <Image
                  data-ai-hint={getCategoryHint(product.category)}
                  src={product.imageUrl}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-foreground">
                    <Link href={`/products/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-primary">KSH {product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="categories" className="py-16 sm:py-24 bg-muted rounded-lg">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 container">
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
              <h3 className="mt-3 text-center text-md font-medium text-foreground group-hover:text-primary transition-colors">{category}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
