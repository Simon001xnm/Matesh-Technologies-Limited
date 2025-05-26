
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ContactForm } from "@/components/contact/contact-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="text-sm text-primary hover:underline flex items-center">
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to Home
        </Link>
      </div>

      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          We're here to help! Whether you have a question about our products, need technical assistance, or want to discuss a project, feel free to reach out.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Send us a Message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Our Contact Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <a href="mailto:info@mateshtechnologies.co.ke" className="text-muted-foreground hover:text-primary">
                  info@mateshtechnologies.co.ke
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <span className="text-muted-foreground">(+254) 700 000 000</span> {/* Placeholder phone */}
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary mt-1" />
                <div className="text-muted-foreground">
                  <p>Matesh Technologies</p>
                  <p>123 Biashara Street</p> {/* Placeholder address */}
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Business Hours</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: 9:00 AM - 1:00 PM</p>
              <p>Sunday & Public Holidays: Closed</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
