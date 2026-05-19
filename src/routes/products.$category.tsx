import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { CATEGORIES, PRODUCTS, VEGETABLES } from "@/lib/products";
import { ArrowRight, ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/products/$category")({
  loader: ({ params }) => {
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
      <PageHero title="Something went wrong" description={error.message} />
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
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {products.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.05}>
                  <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card hover-lift hover:border-primary/40">
                    <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-primary/5 to-emerald/5">
                      {p.image ? (
                        <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-contain p-10 transition duration-700 group-hover:scale-105" />
                      ) : (
                        <div className="grid h-full place-items-center font-display text-6xl text-foreground/15">{p.name.charAt(0)}</div>
                      )}
                    </div>
                    <div className="p-6">
                      {p.size && <div className="text-[10px] uppercase tracking-[0.25em] text-emerald">{p.size}</div>}
                      <div className="mt-2 font-display text-lg font-semibold">{p.name}</div>
                      <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                      <div className="mt-5 flex items-center justify-between">
                        <Link to="/order" className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                          <ShoppingBag className="h-3.5 w-3.5" /> Order
                        </Link>
                        <Link to="/contact" className="text-xs text-muted-foreground hover:text-foreground">Bulk inquiry →</Link>
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
                <h2 className="font-display text-3xl font-semibold">Full fresh vegetable range</h2>
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
