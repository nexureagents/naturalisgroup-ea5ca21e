import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { useCart, formatINR } from "@/lib/cart";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — Naturalis" }, { name: "description", content: "Secure checkout for Naturalis premium products." }] }),
  component: Checkout,
});

function Checkout() {
  const { lines, subtotal, count, clear } = useCart();
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // True payment processing requires Lovable Cloud + Stripe.
    setDone(true);
    clear();
  }

  if (done) {
    return (
      <PageShell>
        <section className="mx-auto max-w-2xl px-6 py-32 text-center">
          <Reveal>
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-emerald/40 bg-emerald/10 text-emerald">
              <Check className="h-7 w-7" />
            </div>
            <h1 className="mt-8 font-display text-4xl font-semibold tracking-tight md:text-5xl">Order received.</h1>
            <p className="mt-4 text-muted-foreground">Thank you. Our team will confirm your order via phone or WhatsApp within a few hours.</p>
            <Link to="/" className="mt-10 inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-luxe">Back to home</Link>
          </Reveal>
        </section>
      </PageShell>
    );
  }

  if (count === 0) {
    return (
      <PageShell>
        <PageHero eyebrow="Checkout" title="Nothing to check out." description="Add a product to begin." />
        <div className="mx-auto max-w-md px-6 pb-24 text-center">
          <Link to="/products" className="inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground">Explore products</Link>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <PageHero eyebrow="Checkout" title="Secure checkout." description="Confirm your delivery details — our team handles the rest." />
      <section className="px-6 py-12">
        <form onSubmit={submit} className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-8 rounded-3xl border border-border bg-card p-8">
            <Section title="Contact">
              <Grid>
                <Field label="Full name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone / WhatsApp" name="phone" required />
                <Field label="Company (optional)" name="company" />
              </Grid>
            </Section>

            <Section title="Delivery address">
              <Field label="Street address" name="street" required />
              <Grid>
                <Field label="City" name="city" required />
                <Field label="State / Region" name="state" required />
                <Field label="Postal code" name="postal" required />
                <Field label="Country" name="country" required defaultValue="India" />
              </Grid>
            </Section>

            <Section title="Payment">
              <div className="rounded-2xl border border-dashed border-border bg-background/40 p-5 text-sm text-muted-foreground">
                Online card payment is being wired up via Lovable Cloud + Stripe. For now, place the order and our team will confirm via phone/WhatsApp with payment options (UPI · bank transfer · COD where available).
              </div>
            </Section>
          </div>

          <aside>
            <div className="glass-strong sticky top-28 rounded-3xl p-7 shadow-luxe">
              <div className="text-xs uppercase tracking-[0.28em] text-emerald">Your order</div>
              <ul className="mt-5 space-y-3 text-sm">
                {lines.map((l) => (
                  <li key={l.slug} className="flex items-center justify-between gap-3">
                    <div className="flex-1">
                      <div className="font-medium">{l.name}</div>
                      <div className="text-xs text-muted-foreground">× {l.qty}{l.size ? ` · ${l.size}` : ""}</div>
                    </div>
                    <div className="font-medium">{formatINR(l.qty * l.price)}</div>
                  </li>
                ))}
              </ul>
              <div className="my-5 border-t border-border" />
              <div className="flex items-center justify-between">
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Total</div>
                <div className="font-display text-2xl font-semibold text-gradient-aqua">{formatINR(subtotal)}</div>
              </div>
              <button type="submit" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-luxe">
                Place order
              </button>
            </div>
          </aside>
        </form>
      </section>
    </PageShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.28em] text-emerald">{title}</div>
      <div className="mt-5 space-y-4">{children}</div>
    </div>
  );
}
function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2">{children}</div>;
}
function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input {...rest} className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary" />
    </div>
  );
}
