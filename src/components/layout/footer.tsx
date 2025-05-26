
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-20 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Matesh Technologies. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <p className="text-sm text-muted-foreground">
            Designed by{" "}
            <Link
              href="https://simon-websites.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              Simon Styles Technologies Limited
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
