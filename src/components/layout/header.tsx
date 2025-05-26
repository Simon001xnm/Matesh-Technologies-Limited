import Link from "next/link"
import { Mountain } from "lucide-react"
import { MainNav } from "@/components/layout/main-nav"
import { MobileNav } from "@/components/layout/mobile-nav"
import { UserNav } from "@/components/layout/user-nav"
import { ThemeToggle } from "@/components/shared/theme-toggle"
import type { NavItem } from "@/types"

const mainNavItems: NavItem[] = [
  { title: "Products", href: "/products" },
  { title: "Suppliers", href: "/suppliers" },
  // Add more main navigation items here
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <MobileNav mainNavItems={mainNavItems} />
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block text-xl">Matesh Tech</span>
        </Link>
        <MainNav items={mainNavItems} />
        <div className="flex flex-1 items-center justify-end space-x-1 md:space-x-2">
          <ThemeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  )
}
