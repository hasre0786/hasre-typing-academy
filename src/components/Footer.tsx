import { Link } from "react-router-dom";
import { Youtube, Instagram, Facebook, Send, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/50 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-display text-2xl font-extrabold">HASRE SUCCESS POINT</h3>
          <p className="mt-3 max-w-md text-sm text-background/70">
            A premium typing platform for Bihar's rural students and beginners.
            Learn typing step by step — from home row to professional speed.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Youtube, Instagram, Facebook, Send].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 grid place-items-center rounded-full bg-background/10 hover:bg-primary hover:rotate-6 transition-all"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><Link to="/easy" className="hover:text-background">Easy Typing</Link></li>
            <li><Link to="/normal" className="hover:text-background">Normal Typing</Link></li>
            <li><Link to="/hard" className="hover:text-background">Hard Typing</Link></li>
            <li><Link to="/advance" className="hover:text-background">Advance Typing</Link></li>
            <li><Link to="/dashboard" className="hover:text-background">Dashboard</Link></li>
            
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 00000 00000</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@hasresuccess.in</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Bihar, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-background/60">
          <p>© 2026 HASRE SUCCESS POINT. All rights reserved.</p>
          <p>Made by <span className="text-background">CTC Digital Services</span></p>
        </div>
      </div>
    </footer>
  );
}
