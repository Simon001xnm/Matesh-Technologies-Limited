
import Link from "next/link"
import Image from "next/image";
import { MainNav } from "@/components/layout/main-nav"
import { MobileNav } from "@/components/layout/mobile-nav"
import { UserNav } from "@/components/layout/user-nav"
import { ThemeToggle } from "@/components/shared/theme-toggle"
import type { NavItem } from "@/types"

const mainNavItems: NavItem[] = [
  { 
    title: "Our Brands", 
    href: "/products?category=brands",
    children: [
      { title: "Tenda", href: "/products?brand=tenda" },
      { title: "Ubiquiti", href: "/products?brand=ubiquiti" },
      { title: "Mikrotik", href: "/products?brand=mikrotik" },
      { title: "Tp-Link", href: "/products?brand=tp-link" },
      { title: "D-Link", href: "/products?brand=d-link" },
      { title: "Dahua", href: "/products?brand=dahua" },
      { title: "Netlink", href: "/products?brand=netlink" },
      { title: "Panasonic", href: "/products?brand=panasonic" },
      { title: "Huawei", href: "/products?brand=huawei" },
      { title: "V-Sol", href: "/products?brand=v-sol" },
      { title: "Mercusys", href: "/products?brand=mercusys" },
      { title: "Zkteco", href: "/products?brand=zteco" },
    ]
  },
  { 
    title: "Wireless Devices", 
    href: "/products?category=wireless",
    children: [
        { title: "Access Points", href: "/products?category=access-points" },
        { title: "Routers", href: "/products?category=routers" },
        { title: "Wireless Extenders", href: "/products?category=wireless-extenders" },
    ] 
  },
  { 
    title: "Structured Cabling", 
    href: "/products?category=cabling",
    children: [
        { title: "Ethernet Cables", href: "/products?category=ethernet-cables" },
        { title: "Patch Panels", href: "/products?category=patch-panels" },
        { title: "Keystone Jacks", href: "/products?category=keystone-jacks" },
    ]
  },
  { 
    title: "Fibre Optic Solutions", 
    href: "/products?category=fibre",
    children: [
        { title: "Fiber Cables", href: "/products?category=fiber-cables" },
        { title: "Connectors", href: "/products?category=connectors" },
        { title: "Splicing Machines", href: "/products?category=splicing-machines" },
    ]
  },
  { 
    title: "Security Cameras", 
    href: "/products?category=security",
    children: [
        { title: "IP Cameras", href: "/products?category=ip-cameras" },
        { title: "NVRs", href: "/products?category=nvrs" },
        { title: "Camera Accessories", href: "/products?category=camera-accessories" },
    ]
  },
  { 
    title: "PBX + Phones", 
    href: "/products?category=pbx",
    children: [
        { title: "IP Phones", href: "/products?category=ip-phones" },
        { title: "PBX Systems", href: "/products?category=pbx-systems" },
        { title: "Headsets", href: "/products?category=headsets" },
    ]
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-24 max-w-screen-2xl items-center"> {/* Adjusted height for larger logo */}
        <MobileNav mainNavItems={mainNavItems} />
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-XbLRyutGuhzXVlWYm2gppY3nmShsDtXkHqxJsl41HxvEBlznLXeHDBBBGQIKl9tZry0&usqp=CAU" 
            alt="Matesh Tech Logo" 
            width={96} // Max width for lg screens
            height={96} // Max height for lg screens
            className="h-20 w-auto lg:h-24" // Base h-20 (80px), lg:h-24 (96px)
          />
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
