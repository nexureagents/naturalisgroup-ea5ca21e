import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-naturalis-main.webp";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Naturalis" className="h-10 w-10 object-contain" />
              <span className="font-display text-lg font-semibold">Naturalis Group</span>
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
