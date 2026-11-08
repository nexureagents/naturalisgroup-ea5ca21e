import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { CATEGORIES, PRODUCTS, VEGETABLES, type Product, type ProductCategory } from "@/lib/products";
import { ArrowRight, ShoppingBag } from "lucide-react";
import vegetablesImg from "@/assets/category-vegetables.jpg";

export const Route = createFileRoute("/products/$category")({
  loader: ({ params }): { cat: ProductCategory; products: Product[] } => {
    const cat = CATEGORIES.find((c) => c.slug === params.category);
    if (!cat) throw notFound();
    return { cat, products: PRODUCTS.filter((p) => p.category === params.category) };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.cat.title ?? "Products"} — Naturalis` },
      { name: "description", content: loaderData?.cat.description ?? "" },
      { property: "og:title", content: `${loaderData?.cat.title} — Naturalis` },
      { property: "og:description", content: loaderData?.cat.description ?? "" },
    ],
  }),
  component: CategoryPage,
  notFoundComponent: () => (
    <PageShell>
      <PageHero title="Category not found" description="Browse all products instead." />
    </PageShell>
  ),
  errorComponent: ({ error }) => (
    <PageShell>
      <PageHero title="Something went wrong" description={error instanceof Error ? error.message : String(error)} />
    </PageShell>
  ),
});

function CategoryPage() {
  const { cat, products } = Route.useLoaderData();
  const isVeg = cat.slug === "fresh-vegetables";

  return (
    <PageShell>
      <PageHero eyebrow={cat.tagline} title={cat.title} description={cat.description} />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          {products.length > 0 && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p: Product, i: number) => (
                <Reveal key={p.slug} delay={i * 0.05}>
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card text-center transition hover-lift hover:border-primary/50 hover:shadow-[0_0_0_1px_hsl(var(--primary)/0.25),0_30px_60px_-30px_hsl(var(--primary)/0.35)] sm:text-left">
                    <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-primary/5 to-emerald/5">
                      {p.image ? (
                        <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-contain p-10 transition duration-700 group-hover:scale-105" />
                      ) : (
                        <div className="grid h-full place-items-center font-display text-6xl text-foreground/15">{p.name.charAt(0)}</div>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                        {p.size && <span className="text-[10px] uppercase tracking-[0.25em] text-emerald">{p.size}</span>}
                        {p.sku && <span className="rounded-full border border-border/70 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{p.sku}</span>}
                      </div>
                      <div className="mt-2 font-display text-lg font-semibold">{p.name}</div>
                      <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>

                      {(p.mrp || p.retailerPrice) && (
                        <div className="mt-5 rounded-2xl border border-border/70 bg-gradient-to-br from-background/60 via-card to-emerald/5 p-4 transition group-hover:border-primary/40">
                          <div className="flex items-end justify-between gap-3">
                            {p.mrp !== undefined && (
                              <div className="text-left">
                                <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">MRP</div>
                                <div className="font-display text-xl font-semibold leading-none text-foreground">₹{p.mrp}</div>
                              </div>
                            )}
                            {p.retailerPrice !== undefined && (
                              <div className="text-right">
                                <div className="text-[10px] uppercase tracking-[0.22em] text-emerald">Retailer</div>
                                <div className="font-display text-xl font-semibold leading-none text-gradient-aqua">₹{p.retailerPrice}</div>
                                {p.retailerNote && <div className="mt-1 text-[10px] text-muted-foreground">{p.retailerNote}</div>}
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:justify-between">
                        <Link to="/order" className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                          <ShoppingBag className="h-3.5 w-3.5" /> Order
                        </Link>
                        <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-full border border-border/70 px-3 py-1.5 text-[11px] font-medium text-muted-foreground transition hover:border-emerald/50 hover:text-emerald">
                          Bulk Inquiry →
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {isVeg && (
            <div className="mt-16">
              <Reveal>
                <div className="overflow-hidden rounded-3xl border border-border">
                  <img src={vegetablesImg} alt="Fresh vegetables — Leaf & Grains" loading="lazy" width={1024} height={1024} className="h-[320px] w-full object-cover md:h-[460px]" />
                </div>
              </Reveal>
              <Reveal>
                <h2 className="mt-10 font-display text-3xl font-semibold">Full fresh vegetable range</h2>
                <p className="mt-2 text-muted-foreground">24 hand-graded varieties, available in retail and bulk crates.</p>
              </Reveal>
              <div className="mt-8 flex flex-wrap gap-2">
                {VEGETABLES.map((v) => (
                  <span key={v} className="rounded-full border border-border bg-card px-4 py-2 text-sm transition hover:border-emerald/50 hover:text-emerald">
                    {v}
                  </span>
                ))}
              </div>
            </div>
          )}

          {products.length === 0 && !isVeg && (
            <Reveal>
              <div className="rounded-3xl border border-dashed border-border bg-card p-12 text-center">
                <div className="font-display text-2xl">Range expanding soon</div>
                <p className="mt-2 text-muted-foreground">New product images and SKUs in this category will be added in upcoming releases.</p>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">
                  Inquire now <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </PageShell>
  );
}
