import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useCart } from "@/lib/cart";
import logo from "@/assets/logo-naturalis-main.webp";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/processing", label: "Processing" },
  { to: "/certifications", label: "Certifications" },
  { to: "/export", label: "Export" },
  { to: "/payment", label: "Payment" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-full px-4 py-2 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-luxe" : "border border-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 group">
            <img src={logo} alt="Naturalis Group" className="h-10 w-10 object-contain" />
            <div className="flex flex-col leading-none">
              <span className="font-display text-sm font-semibold tracking-tight">Naturalis</span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Water · Leaf · Grains</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="relative px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              to="/cart"
              aria-label="Cart"
              className="relative grid h-10 w-10 place-items-center rounded-full border border-border/60 transition hover:border-primary/50"
            >
              <ShoppingBag className="h-4 w-4" />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground shadow-luxe">
                  {count}
                </span>
              )}
            </Link>
            <Link
              to="/order"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-luxe transition hover:opacity-90"
            >
              Order
            </Link>
            <button
              type="button"
              aria-label="Menu"
              onClick={() => setOpen((s) => !s)}
              className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-border/60"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 rounded-3xl glass-strong p-4 shadow-luxe">
            <div className="flex flex-col">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-foreground/80 hover:bg-accent"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/order"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground"
              >
                Order Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
