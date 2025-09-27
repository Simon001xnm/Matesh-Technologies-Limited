
import { Mail, MapPin, Phone } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-muted text-muted-foreground text-xs md:text-sm py-2 px-4 border-b">
      <div className="container flex flex-col md:flex-row justify-center md:justify-between items-center gap-2 md:gap-4 max-w-screen-2xl">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <a href="mailto:info@mateshtechnologies.co.ke" className="hover:text-primary transition-colors">
              info@mateshtechnologies.co.ke
            </a>
          </div>
          <div className="hidden sm:block border-l border-muted-foreground/30 h-4"></div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <a href="tel:+254701694469" className="hover:text-primary transition-colors">
              0701694469
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>Good Hope Plaza, River Road</span>
        </div>
      </div>
    </div>
  );
}
