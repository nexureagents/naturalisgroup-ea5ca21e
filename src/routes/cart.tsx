import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { useCart, formatINR } from "@/lib/cart";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Cart — Naturalis" }, { name: "description", content: "Review your Naturalis selection before checkout." }] }),
  component: CartPage,
});

function CartPage() {
  const { lines, setQty, remove, subtotal, count, clear } = useCart();

  if (count === 0) {
    return (
      <PageShell>
        <PageHero eyebrow="Cart" title="Your cart is empty." description="Start with a Purelyf format, an alkaline bottle, or a craft soda." />
        <div className="mx-auto max-w-md px-6 pb-24 text-center">
          <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-luxe">
            <ShoppingBag className="h-4 w-4" /> Explore products
          </Link>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <PageHero eyebrow="Cart" title="Your selection." description="Review and proceed to checkout — our team will confirm your order within hours." />

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-4">
            {lines.map((l, i) => (
              <Reveal key={l.slug} delay={i * 0.04}>
                <div className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-5 sm:flex-row sm:items-center">
                  <div className="grid h-24 w-24 flex-shrink-0 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-emerald/5">
                    {l.image ? <img src={l.image} alt={l.name} className="h-full w-full object-contain p-3" /> : <span className="font-display text-3xl">{l.name.charAt(0)}</span>}
                  </div>
                  <div className="flex-1">
                    <Link to="/product/$slug" params={{ slug: l.slug }} className="font-display text-lg font-semibold hover:text-primary">{l.name}</Link>
                    {l.size && <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{l.size}</div>}
                    <div className="mt-1 text-sm text-muted-foreground">{formatINR(l.price)} each</div>
                  </div>
                  <div className="inline-flex items-center rounded-full border border-border bg-background">
                    <button onClick={() => setQty(l.slug, l.qty - 1)} className="grid h-10 w-10 place-items-center text-muted-foreground hover:text-foreground"><Minus className="h-3.5 w-3.5" /></button>
                    <span className="min-w-6 text-center text-sm font-semibold">{l.qty}</span>
                    <button onClick={() => setQty(l.slug, l.qty + 1)} className="grid h-10 w-10 place-items-center text-muted-foreground hover:text-foreground"><Plus className="h-3.5 w-3.5" /></button>
                  </div>
                  <div className="font-display text-lg font-semibold sm:min-w-24 sm:text-right">{formatINR(l.qty * l.price)}</div>
                  <button onClick={() => remove(l.slug)} aria-label="Remove" className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-destructive hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </Reveal>
            ))}
            <button onClick={clear} className="text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-destructive">Clear cart</button>
          </div>

          <aside className="space-y-4">
            <div className="glass-strong sticky top-28 rounded-3xl p-7 shadow-luxe">
              <div className="text-xs uppercase tracking-[0.28em] text-emerald">Order summary</div>
              <div className="mt-5 space-y-3 text-sm">
                <Row label={`Subtotal (${count} items)`} value={formatINR(subtotal)} />
                <Row label="Shipping" value="Calculated at checkout" />
                <div className="my-4 border-t border-border" />
                <div className="flex items-center justify-between">
                  <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Total</div>
                  <div className="font-display text-2xl font-semibold text-gradient-aqua">{formatINR(subtotal)}</div>
                </div>
              </div>
              <Link to="/checkout" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-luxe">
                Proceed to checkout
              </Link>
              <Link to="/products" className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-border px-6 py-3.5 text-sm font-medium">
                Continue shopping
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-muted-foreground">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  );
}
