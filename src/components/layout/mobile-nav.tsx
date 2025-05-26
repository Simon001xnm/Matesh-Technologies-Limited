
"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Mountain } from "lucide-react"
import Image from "next/image"; // Import Image

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import type { NavItem } from "@/types"

interface MobileNavProps {
  mainNavItems?: NavItem[]
}

export function MobileNav({ mainNavItems }: MobileNavProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <Link
          href="/"
          className="mr-6 flex items-center space-x-2 px-4" // Added padding for logo
          onClick={() => setOpen(false)}
        >
          {/* Using the same logo as the main header */}
          <Image 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-XbLRyutGuhzXVlWYm2gppY3nmShsDtXkHqxJsl41HxvEBlznLXeHDBBBGQIKl9tZry0&usqp=CAU" 
            alt="Matesh Tech Logo" 
            width={40} 
            height={40} 
            className="h-10 w-auto"
          />
          <span className="font-bold sm:inline-block text-lg">Matesh Tech</span>
        </Link>
        <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {mainNavItems?.map(
              (item) =>
                item.href && (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-muted-foreground hover:text-primary" // Increased font size
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </Link>
                )
            )}
             {/* Manually add login/signup if not authenticated, if UserNav is not part of mobile */}
             {/* For simplicity, assuming UserNav might handle this or these are less critical for mobile quick nav */}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
