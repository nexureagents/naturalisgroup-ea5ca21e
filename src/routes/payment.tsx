import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { Building2, Phone, Mail, MapPin, Globe, Headphones, Copy, CheckCircle2, ShieldCheck } from "lucide-react";
import { useState } from "react";
import qr from "@/assets/payment-qr.webp";

export const Route = createFileRoute("/payment")({
  head: () => ({
    meta: [
      { title: "Payment Options — Naturalis Water & Beverages" },
      { name: "description", content: "Secure UPI, bank transfer and QR payment options for Naturalis Water and Beverages LLP — trusted across India and overseas." },
      { property: "og:title", content: "Naturalis — Payment Options" },
      { property: "og:description", content: "Pay Naturalis via UPI, Bank of Baroda or QR — instant, secure and export-ready." },
    ],
  }),
  component: PaymentPage,
});

const BANK = [
  ["Account Name", "Naturalis Water and Beverages LLP"],
  ["Bank", "Bank of Baroda"],
  ["Branch", "Ramnagar, Agartala"],
  ["Account Number", "573805000000028"],
  ["IFSC", "BARB0RAMAGA"],
  ["UPI ID", "rosuman-1@okicici"],
];

const CONTACTS = [
  { icon: Phone, label: "Sales", value: "+91 96500 68007" },
  { icon: Phone, label: "Sales", value: "+91 70055 05897" },
  { icon: Phone, label: "Sales", value: "+91 98369 00007" },
  { icon: Headphones, label: "Customer Care", value: "1800 123 9776" },
  { icon: Mail, label: "Email", value: "cmd@naturalispure.com" },
  { icon: Mail, label: "Email", value: "roynwb@gmail.com" },
  { icon: Globe, label: "Website", value: "www.naturalispure.com" },
  { icon: MapPin, label: "Address", value: "Ananganagar, Tripura (W) 799015" },
];

function CopyRow({ label, value }: { label: string; value: string }) {
  const [done, setDone] = useState(false);
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border/60 py-4 last:border-0">
      <div>
        <div className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">{label}</div>
        <div className="mt-1 font-display text-base font-medium text-foreground">{value}</div>
      </div>
      <button
        type="button"
        onClick={async () => {
          try { await navigator.clipboard.writeText(value); setDone(true); setTimeout(() => setDone(false), 1500); } catch {}
        }}
        className="grid h-9 w-9 place-items-center rounded-full border border-border/70 text-muted-foreground transition hover:border-primary/50 hover:text-foreground"
        aria-label={`Copy ${label}`}
      >
        {done ? <CheckCircle2 className="h-4 w-4 text-emerald" /> : <Copy className="h-3.5 w-3.5" />}
      </button>
    </div>
  );
}

function PaymentPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Payments"
        title="Secure, simple, export-ready."
        description="Pay Naturalis instantly via UPI, scan-to-pay QR or direct bank transfer — for retail, distribution and international orders."
      />

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_1.4fr]">
          {/* QR card */}
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-luxe">
              <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-emerald">
                  <ShieldCheck className="h-4 w-4" /> BHIM UPI · Verified Merchant
                </div>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">Scan to pay</h2>
                <p className="mt-2 text-sm text-muted-foreground">Use any UPI app — GPay, PhonePe, Paytm, BHIM or BharatPe.</p>

                <div className="mt-8 rounded-3xl border border-border/60 bg-background/70 p-6 backdrop-blur">
                  <div className="mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-white">
                    <img src={qr} alt="Naturalis BHIM UPI QR code" className="h-full w-full object-contain" />
                  </div>
                  <div className="mt-6 grid gap-2 text-center">
                    <div className="font-display text-lg font-semibold">Naturalis Water and Beverages LLP</div>
                    <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground">VPA · bobmerne1901@barodampay</div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-2 text-center text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {["GPay","PhonePe","Paytm","BHIM","Baroda","BharatPe"].map((b) => (
                    <span key={b} className="rounded-full border border-border/60 px-2 py-1.5">{b}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Bank + contacts */}
          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border bg-card p-8">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.28em] text-emerald">Bank Transfer</div>
                    <div className="font-display text-xl font-semibold">Account details</div>
                  </div>
                </div>
                <div className="mt-6 divide-y divide-border/60">
                  {BANK.map(([l, v]) => <CopyRow key={l} label={l} value={v} />)}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border bg-card p-8">
                <div className="text-xs uppercase tracking-[0.28em] text-emerald">Reach Us</div>
                <div className="font-display text-xl font-semibold">Company contacts</div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {CONTACTS.map((c, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/40 p-4 transition hover:border-primary/40">
                      <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                        <c.icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{c.label}</div>
                        <div className="truncate text-sm font-medium text-foreground">{c.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="rounded-3xl border border-emerald/30 bg-emerald/5 p-6 text-sm text-foreground/90">
                <strong className="font-display">After payment:</strong> please share the transaction reference and order details with our sales team via WhatsApp or email so we can confirm dispatch within 24 hours.
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
