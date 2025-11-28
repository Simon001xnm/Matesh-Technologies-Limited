
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import WhatsAppFloat from '@/components/shared/WhatsAppFloat'; // <-- Import
import { HolidayPopup } from '@/components/shared/HolidayPopup';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Matesh Technologies Accessories',
  description: 'Fiber and Networking Accessories Shop',
  icons: {
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-XbLRyutGuhzXVlWYm2gppY3nmShsDtXkHqxJsl41HxvEBlznLXeHDBBBGQIKl9tZry0&usqp=CAU',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <WhatsAppFloat /> {/* <-- Add component here */}
          <HolidayPopup />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
