import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Minus, Plus, ShieldCheck, ShoppingBag, Truck } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { getProduct, getCategory, getRelated, type Product } from "@/lib/products";
import { useCart, formatINR } from "@/lib/cart";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    const category = getCategory(product.category);
    const related = getRelated(product.slug, 3);
    return { product, category, related };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name ?? "Product"} — Naturalis` },
      { name: "description", content: loaderData?.product.description ?? "" },
      { property: "og:title", content: `${loaderData?.product.name} — Naturalis` },
      { property: "og:description", content: loaderData?.product.description ?? "" },
      ...(loaderData?.product.image ? [{ property: "og:image", content: loaderData.product.image }] : []),
    ],
  }),
  component: ProductPage,
  notFoundComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl">Product not found</h1>
        <Link to="/products" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">All products</Link>
      </div>
    </PageShell>
  ),
});

function ProductPage() {
  const { product, category, related } = Route.useLoaderData();
  const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : product.image ? [product.image] : [];
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const cart = useCart();

  function handleAdd() {
    cart.add({ slug: product.slug, name: product.name, size: product.size, image: product.image, price: product.price ?? 0 }, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <PageShell>
      <section className="relative pt-12">
        <div className="mx-auto max-w-7xl px-6">
          <Link to="/products/$category" params={{ category: product.category }} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-3.5 w-3.5" /> {category?.title ?? "Products"}
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_1fr]">
            {/* Gallery */}
            <Reveal>
              <div>
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                  className="group relative aspect-square overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-primary/5 via-card to-emerald/5"
                >
                  <div className="absolute -inset-10 rounded-full bg-primary/20 blur-3xl opacity-50" />
                  {gallery[active] ? (
                    <img
                      src={gallery[active]}
                      alt={product.name}
                      className="relative h-full w-full object-contain p-12 transition duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="grid h-full place-items-center font-display text-9xl text-foreground/15">{product.name.charAt(0)}</div>
                  )}
                </motion.div>
                {gallery.length > 1 && (
                  <div className="mt-4 grid grid-cols-4 gap-3">
                    {gallery.map((g: string, i: number) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`aspect-square overflow-hidden rounded-2xl border bg-card transition ${active === i ? "border-primary shadow-luxe" : "border-border hover:border-primary/40"}`}
                      >
                        <img src={g} alt="" loading="lazy" className="h-full w-full object-contain p-3" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>

            {/* Info */}
            <div>
              <Reveal>
                <div className="text-[10px] uppercase tracking-[0.28em] text-emerald">{category?.tagline}</div>
                <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl text-balance">
                  {product.name}
                </h1>
                {product.size && (
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {product.size}
                  </div>
                )}
                <p className="mt-6 text-muted-foreground text-pretty">{product.description}</p>
              </Reveal>

              {typeof product.price === "number" && (
                <Reveal delay={0.08}>
                  <div className="mt-8 flex items-end gap-3">
                    <div className="font-display text-4xl font-semibold text-gradient-aqua">{formatINR(product.price)}</div>
                    <div className="pb-1 text-xs text-muted-foreground">MRP inclusive · per unit</div>
                  </div>
                </Reveal>
              )}

              {/* Qty + Add */}
              <Reveal delay={0.14}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <div className="inline-flex items-center rounded-full border border-border bg-card">
                    <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-11 w-11 place-items-center text-muted-foreground transition hover:text-foreground">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="min-w-8 text-center font-display text-base font-semibold">{qty}</span>
                    <button type="button" onClick={() => setQty((q) => q + 1)} className="grid h-11 w-11 place-items-center text-muted-foreground transition hover:text-foreground">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button
                    onClick={handleAdd}
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-luxe transition hover:opacity-90"
                  >
                    {added ? <><Check className="h-4 w-4" /> Added</> : <><ShoppingBag className="h-4 w-4" /> Add to cart</>}
                  </button>
                  <Link to="/order" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium hover:border-emerald/50">
                    Bulk inquiry
                  </Link>
                </div>
              </Reveal>

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <Reveal delay={0.2}>
                  <div className="mt-12 rounded-3xl border border-border bg-card/60 p-6">
                    <div className="text-xs uppercase tracking-[0.28em] text-emerald">Specifications</div>
                    <ul className="mt-4 space-y-3">
                      {product.features.map((f: string) => (
                        <li key={f} className="flex items-start gap-3 text-sm">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald" />
                          <span className="text-foreground/90">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}

              {/* Trust */}
              <Reveal delay={0.26}>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                    <ShieldCheck className="h-5 w-5 text-emerald" />
                    <div>
                      <div className="text-sm font-semibold">Quality assured</div>
                      <div className="text-xs text-muted-foreground">ISO · GMP · FSSAI compliant</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                    <Truck className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm font-semibold">Bulk & export ready</div>
                      <div className="text-xs text-muted-foreground">Cold-chain logistics</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">You may also like</h2>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {related.map((r: Product, i: number) => (
                <Reveal key={r.slug} delay={i * 0.06}>
                  <Link
                    to="/product/$slug"
                    params={{ slug: r.slug }}
                    className="group block overflow-hidden rounded-3xl border border-border bg-card hover-lift hover:border-primary/40"
                  >
                    <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-primary/5 to-emerald/5">
                      {r.image && <img src={r.image} alt={r.name} loading="lazy" className="h-full w-full object-contain p-10 transition duration-700 group-hover:scale-105" />}
                    </div>
                    <div className="p-5">
                      {r.size && <div className="text-[10px] uppercase tracking-[0.25em] text-emerald">{r.size}</div>}
                      <div className="mt-1.5 font-display text-base font-semibold">{r.name}</div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageShell>
  );
}
