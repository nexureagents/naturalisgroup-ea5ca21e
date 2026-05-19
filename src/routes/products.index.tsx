import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — Naturalis Water, Beverages & Fresh Foods" },
      { name: "description", content: "Browse Naturalis: Purelyf packaged water, alkaline water, Bubblz sodas, sauces & ketchup, fresh vegetables, fruits, jams, juices and ready-to-eat foods." },
      { property: "og:title", content: "Naturalis Product Catalogue" },
      { property: "og:description", content: "Premium hydration, beverages, sauces, fresh produce and ready-to-eat — one company, one quality system." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Catalogue"
        title="The Naturalis range."
        description="Eight categories, dozens of SKUs, one quality standard. Built for retail shelves, HoReCa, modern trade and global export."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((c, i) => {
              const sample = PRODUCTS.find((p) => p.category === c.slug && p.image);
              const count = PRODUCTS.filter((p) => p.category === c.slug).length;
              return (
                <Reveal key={c.slug} delay={i * 0.05}>
                  <Link
                    to="/products/$category"
                    params={{ category: c.slug }}
                    className="group relative block h-full overflow-hidden rounded-3xl border border-border bg-card transition hover:border-primary/40 hover-lift"
                  >
                    <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-primary/5 to-emerald/5">
                      {sample?.image ? (
                        <img src={sample.image} alt={c.title} loading="lazy" className="h-full w-full object-contain p-8 transition duration-700 group-hover:scale-105" />
                      ) : (
                        <div className="grid h-full place-items-center text-7xl opacity-20 font-display">{c.title.charAt(0)}</div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="text-[10px] uppercase tracking-[0.25em] text-emerald">{c.tagline}</div>
                      <div className="mt-2 font-display text-xl font-semibold">{c.title}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{count > 0 ? `${count} products` : "Range expanding"}</div>
                      <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                        Explore <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
