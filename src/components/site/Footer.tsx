import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-naturalis-main.webp";
import leafLogo from "@/assets/logo-leaf-grains.png";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Naturalis" className="h-10 w-10 object-contain" />
                <span className="font-display text-lg font-semibold">Naturalis Group</span>
              </div>
              <span className="hidden h-8 w-px bg-border sm:block" aria-hidden />
              <div className="flex items-center gap-3">
                <img src={leafLogo} alt="Leaf and Grains" className="h-10 w-10 rounded-lg object-contain bg-white p-0.5" />
                <div className="leading-tight">
                  <div className="font-display text-sm font-semibold">Leaf and Grains</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">A Naturalis division</div>
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Naturalis Water &amp; Beverages and Leaf &amp; Grains Pvt Ltd —
              building premium hydration and healthy food, made in Northeast India,
              loved across the world.
            </p>
            <div className="mt-6 flex gap-2">
              {["GMP","HACCP","ISO","FSSAI","Halal","Kosher"].map(b => (
                <span key={b} className="rounded-full border border-border px-3 py-1 text-[10px] tracking-widest uppercase text-muted-foreground">{b}</span>
              ))}
            </div>
          </div>

          <FooterCol title="Brand" links={[
            ["About", "/about"], ["Founder Story", "/about#founder"],
            ["Processing", "/processing"], ["Certifications", "/certifications"],
          ]} />
          <FooterCol title="Products" links={[
            ["All Products", "/products"], ["Purelyf Water", "/products/water-beverages"],
            ["Alkaline", "/products/alkaline-water"], ["Sodas", "/products/sodas-soft-drinks"],
            ["Vegetables", "/products/fresh-vegetables"],
          ]} />
          <FooterCol title="Business" links={[
            ["Become a Distributor", "/distributors"], ["Export Inquiry", "/export"],
            ["Bulk Order", "/order"], ["Payment", "/payment"],
            ["Careers", "/careers"], ["Contact", "/contact"],
          ]} />
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Naturalis Water and Beverages LLP · Anangnagar, Agartala, Tripura (W) — 799015, India</div>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-foreground">Privacy</Link>
            <Link to="/terms-and-conditions" className="hover:text-foreground">Terms</Link>
            <Link to="/faq" className="hover:text-foreground">FAQ</Link>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center gap-1 border-t border-border/40 pt-6 text-center text-[11px] text-muted-foreground sm:flex-row sm:justify-center sm:gap-1.5">
          <span>Crafted by</span>
          <a href="https://blacktorquemedia.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-medium tracking-wide text-foreground/80 transition hover:text-foreground">
            BlackTorque Media
          </a>
          <span className="hidden sm:inline">·</span>
          <span>a division of</span>
          <a href="https://velixarcorporation.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-medium tracking-wide text-foreground/80 transition hover:text-foreground">
            Velixar Corporation
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80">{title}</div>
      <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link to={href} className="transition hover:text-foreground">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
