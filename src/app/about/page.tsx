
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Building, Users, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="text-sm text-primary hover:underline flex items-center">
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to Home
        </Link>
      </div>

      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          About Matesh Technologies
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Your trusted partner for cutting-edge fiber optic and networking solutions.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <Image
            data-ai-hint="networking infrastructure"
            src="https://placehold.co/600x400.png"
            alt="Matesh Technologies Office"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-primary">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed">
            Matesh Technologies is a premier supplier of high-quality fiber optic components, networking accessories, and essential tools. We are dedicated to empowering businesses and individuals with reliable infrastructure for seamless connectivity.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Founded with a vision to bridge the connectivity gap, we source and provide top-tier products that meet the evolving demands of the digital age. Our commitment to quality and customer satisfaction sets us apart.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <Target className="h-12 w-12 mx-auto text-primary mb-2" />
            <CardTitle className="text-xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To provide accessible, high-performance networking and fiber optic solutions that drive innovation and connect communities.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <Building className="h-12 w-12 mx-auto text-primary mb-2" />
            <CardTitle className="text-xl">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To be the leading and most trusted supplier of networking accessories in the region, known for quality, reliability, and exceptional service.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <Users className="h-12 w-12 mx-auto text-primary mb-2" />
            <CardTitle className="text-xl">Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-muted-foreground space-y-1">
              <li>Customer Focus</li>
              <li>Integrity & Transparency</li>
              <li>Quality Excellence</li>
              <li>Innovation</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <section className="text-center py-12 bg-muted rounded-lg">
        <h2 className="text-3xl font-bold tracking-tight mb-6">Why Choose Matesh Technologies?</h2>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-x-8 gap-y-6 text-left">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground">Extensive Product Range</h3>
              <p className="mt-1 text-sm text-muted-foreground">A wide selection of fiber and networking accessories to meet all your needs.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground">Quality Assurance</h3>
              <p className="mt-1 text-sm text-muted-foreground">We source products from reputable manufacturers to ensure durability and performance.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground">Competitive Pricing</h3>
              <p className="mt-1 text-sm text-muted-foreground">Get the best value for your investment without compromising on quality.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground">Expert Support</h3>
              <p className="mt-1 text-sm text-muted-foreground">Our knowledgeable team is here to assist you with product selection and technical queries.</p>
            </div>
          </div>
        </div>
        <Button asChild size="lg" className="mt-10">
            <Link href="/contact">
              Get in Touch
            </Link>
          </Button>
      </section>
    </div>
  );
}
