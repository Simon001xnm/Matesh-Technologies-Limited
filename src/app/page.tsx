import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { placeholderProducts } from '@/lib/placeholder-data'; // Import placeholderProducts

export default function HomePage() {
  const featuredProducts = placeholderProducts.slice(0, 4); // Get the first 4 products for features section

  // Helper function to generate a concise hint from category (max 2 words)
  const getCategoryHint = (categoryName: string): string => {
    if (!categoryName) return "product";
    const words = categoryName.toLowerCase().split(' ');
    if (words.length > 1 && (words[0] === "fiber" || words[0] === "networking")) {
      return `${words[0]} ${words[1]}`;
    }
    return words[0];
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
                  height={400} // Assuming featured images are square, adjust if necessary or use product image aspect ratio
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
                <p className="text-sm font-medium text-primary">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="categories" className="py-16 sm:py-24 bg-muted rounded-lg">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 container">
          {['Fiber Cables', 'Connectors', 'Adapters', 'Patch Panels', 'Networking Tools', 'SFP Modules', 'Media Converters', 'Cable Management', 'Testers', 'Enclosures'].map((category, i) => (
             <Link href="/products" key={category} className="group block">
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-card shadow-sm group-hover:shadow-lg transition-shadow">
                 <Image
                  data-ai-hint={getCategoryHint(category)}
                  src={`https://placehold.co/300x300.png?category=${i}`}
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
