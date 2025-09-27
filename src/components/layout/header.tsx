
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
        { title: "Wireless Outdoor CPE", href: "/products?category=wireless-outdoor-cpe" },
        { title: "Wireless Access Points", href: "/products?category=wireless-access-points" },
        { title: "Routers", href: "/products?category=routers" },
        { title: "Network Switches", href: "/products?category=network-switches" },
        { title: "Range Extenders", href: "/products?category=range-extenders" },
        { title: "USB Wifi Adapters", href: "/products?category=usb-wifi-adapters" },
        { title: "Point to point", href: "/products?category=point-to-point" },
        { title: "Antennas", href: "/products?category=antennas" },
    ] 
  },
  { 
    title: "Structured Cabling", 
    href: "/products?category=cabling",
    children: [
        { title: "Ethernet Cables", href: "/products?category=ethernet-cables" },
        { title: "Network Cabinets", href: "/products?category=network-cabinets" },
        { title: "Media Converters", href: "/products?category=media-converters" },
        { title: "POE Injectors", href: "/products?category=poe-injectors" },
        { title: "Cabinet Shelves", href: "/products?category=cabinet-shelves" },
    ]
  },
  { 
    title: "Fibre Optic Solutions", 
    href: "/products?category=fibre",
    children: [
        { title: "Fiber Optic Cables", href: "/products?category=fiber-optic-cables" },
        { title: "Fibre Optic Bare PLC Splitters", href: "/products?category=fibre-optic-bare-plc-splitters" },
        { title: "Fiber Optic Enclosures", href: "/products?category=fiber-optic-enclosures" },
        { title: "Fast Connectors", href: "/products?category=fast-connectors" },
        { title: "Fiber Patch cords & Pigtails", href: "/products?category=fiber-patch-cords-pigtails" },
        { title: "Optical Distribution Frames", href: "/products?category=optical-distribution-frames" },
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
        { title: "Yeastar PBX System", href: "/products?category=yeastar-pbx-system" },
        { title: "Yealink IP Phones", href: "/products?category=yealink-ip-phones" },
        { title: "Fanvil IP Phones", href: "/products?category=fanvil-ip-phones" },
        { title: "Panasonic PBX", href: "/products?category=panasonic-pbx" },
        { title: "Panasonic Phones", href: "/products?category=panasonic-phones" },
        { title: "Grandstream", href: "/products?category=grandstream" },
    ]
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 md:h-28 max-w-screen-2xl items-center">
        <MobileNav mainNavItems={mainNavItems} />
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative rounded-lg border-2 border-primary p-0.5 shadow-md">
              <Image 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-XbLRyutGuhzXVlWYm2gppY3nmShsDtXkHqxJsl41HxvEBlznLXeHDBBBGQIKl9tZry0&usqp=CAU" 
                alt="Matesh Tech Logo" 
                width={96}
                height={96}
                className="h-16 w-auto md:h-24 rounded-md"
                priority
              />
            </div>
          </Link>
        </div>
        <div className="flex-grow flex justify-center">
          <MainNav items={mainNavItems} />
        </div>
        <div className="flex items-center justify-end space-x-1 md:space-x-2">
          <ThemeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  )
}
