import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight, Droplet, Leaf, ShieldCheck, Globe2, Sparkles, Factory, Award, Truck,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { CATEGORIES } from "@/lib/products";
import heroWater from "@/assets/hero-water.jpg";
import bottle1L from "@/assets/water-1l.webp";
import bottle500 from "@/assets/water-500.webp";
import bottle2L from "@/assets/water-2l.webp";
import bottle250 from "@/assets/water-250.webp";
import manufacturing from "@/assets/factory-2.webp";
import vegetables from "@/assets/category-vegetables.jpg";
import exportGlobe from "@/assets/export-globe.jpg";
import founder from "@/assets/founder-suman-roy.webp";
import certIso from "@/assets/cert-iso.webp";
import certHalal from "@/assets/cert-halal.webp";
import certKosher from "@/assets/cert-kosher.webp";
import certGmp from "@/assets/cert-gmp.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Naturalis — Premium Hydration & Healthy Foods | Made in India" },
      { name: "description", content: "Export-grade packaged drinking water, alkaline water, sodas, sauces, fresh vegetables and ready-to-eat foods. Built in Northeast India by Naturalis Group." },
      { property: "og:title", content: "Naturalis — Premium Hydration & Healthy Foods" },
      { property: "og:description", content: "Export-grade packaged water, beverages and farm-fresh foods." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      <Hero />
      <TrustStrip />
      <ProductEcosystem />
      <Manufacturing />
      <Certifications />
      <FounderTeaser />
      <ExportSection />
      <Testimonials />
      <CtaBand />
    </PageShell>
  );
}

/* ───────────────────────── HERO ───────────────────────── */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative -mt-24 min-h-[100svh] overflow-hidden">
      {/* background image */}
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0">
        <img src={heroWater} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </motion.div>

      {/* content */}
      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 items-center gap-8 px-6 pt-32 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-foreground/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
              Made in Northeast India · Built for the world
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-balance md:text-7xl lg:text-[5.5rem]">
              Pure water. <span className="text-gradient-aqua">Pure food.</span>
              <br /> Premium by design.
            </h1>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Naturalis Water &amp; Beverages and Leaf &amp; Grains Pvt Ltd —
              an integrated FMCG and agri-processing company crafting export-grade
              hydration, beverages, sauces and fresh foods.
            </p>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-luxe transition hover:opacity-90"
              >
                Explore Products
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                to="/order"
                className="rounded-full border border-border bg-background/40 px-6 py-3.5 text-sm font-medium backdrop-blur transition hover:border-primary/50"
              >
                Order Now
              </Link>
              <Link
                to="/distributors"
                className="rounded-full border border-border bg-background/40 px-6 py-3.5 text-sm font-medium backdrop-blur transition hover:border-emerald/50"
              >
                Become Distributor
              </Link>
            </div>
          </Reveal>
        </div>

        {/* floating bottles */}
        <motion.div style={{ y: y2 }} className="relative lg:col-span-5">
          <div className="relative mx-auto h-[520px] w-full max-w-md">
            <motion.img
              src={bottle1L}
              alt="Purelyf 1L"
              loading="eager"
              className="absolute left-1/2 top-0 h-[480px] w-auto -translate-x-1/2 drop-shadow-[0_40px_80px_rgba(56,189,248,0.35)]"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            />
            <motion.img
              src={bottle500}
              alt=""
              className="absolute -left-4 top-24 h-[260px] w-auto opacity-90 animate-float"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 0.9 }}
              transition={{ duration: 1, delay: 0.65 }}
              style={{ animationDelay: "1.2s" }}
            />
            <motion.img
              src={bottle250}
              alt=""
              className="absolute -right-2 top-44 h-[200px] w-auto opacity-90 animate-float"
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 0.9 }}
              transition={{ duration: 1, delay: 0.8 }}
              style={{ animationDelay: "0.4s" }}
            />
            <motion.img
              src={bottle2L}
              alt=""
              className="absolute right-6 bottom-0 h-[300px] w-auto opacity-80"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 0.8 }}
              transition={{ duration: 1, delay: 0.95 }}
            />
          </div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          Scroll
          <div className="h-8 w-px bg-gradient-to-b from-foreground/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────────── TRUST ───────────────────────── */

const STATS = [
  { value: "26+", label: "Years of leadership" },
  { value: "9", label: "Product categories" },
  { value: "100%", label: "Multi-stage purified" },
  { value: "5★", label: "Hygiene rating" },
];

function TrustStrip() {
  return (
    <section className="border-y border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border/60 md:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="bg-background px-8 py-12">
            <div className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              <span className="text-gradient-aqua">{s.value}</span>
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── ECOSYSTEM ───────────────────────── */

const CAT_ICON: Record<string, React.ComponentType<{ className?: string }>> = {
  "water-beverages": Droplet,
  "alkaline-water": Droplet,
  "sodas-soft-drinks": Sparkles,
  "ketchup-sauces": Leaf,
  "fresh-vegetables": Leaf,
  "fresh-fruits": Leaf,
  "jams-juices": Sparkles,
  "ready-to-eat": ShieldCheck,
};

function ProductEcosystem() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.28em] text-emerald">Product ecosystem</div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance md:text-6xl">
                One company. <span className="text-gradient-aqua">An entire shelf.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-xl text-muted-foreground">
                Hydration, beverages, sauces, fresh produce and ready-to-eat —
                manufactured under one quality system, packaged for international trade.
              </p>
            </Reveal>
          </div>
          <Link to="/products" className="group inline-flex items-center gap-2 text-sm font-medium">
            View all <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat, i) => {
            const Icon = CAT_ICON[cat.slug] ?? Leaf;
            return (
              <Reveal key={cat.slug} delay={i * 0.06}>
                <Link
                  to="/products/$category"
                  params={{ category: cat.slug }}
                  className="group relative block h-full overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:border-primary/40 hover:shadow-luxe hover-lift"
                >
                  <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-primary/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                  <div className="relative">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="mt-6 text-[10px] uppercase tracking-[0.25em] text-emerald">{cat.tagline}</div>
                    <div className="mt-2 font-display text-xl font-semibold">{cat.title}</div>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{cat.description}</p>
                    <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Explore <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── MANUFACTURING ───────────────────────── */

const STEPS = [
  { n: "01", t: "Sourcing",   d: "Premium raw inputs from trusted regional farms." },
  { n: "02", t: "Purification", d: "Multi-stage DMF, RO, GAC, EMF, ozonation, UV." },
  { n: "03", t: "Processing", d: "Hygienic, minimal-handling production lines." },
  { n: "04", t: "Packaging",  d: "Fully-automatic filling, capping & sealing." },
  { n: "05", t: "Quality",    d: "Lab-verified for every parameter, every batch." },
  { n: "06", t: "Distribution", d: "Cold chain & export-ready logistics." },
];

function Manufacturing() {
  return (
    <section className="relative overflow-hidden bg-card/30 py-32">
      <div className="absolute inset-0 grid-noise opacity-30" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border">
              <img src={manufacturing} alt="Naturalis bottling line" loading="lazy" width={1920} height={1080} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <Factory className="h-5 w-5 text-emerald" />
                  <div>
                    <div className="font-display font-semibold">Anangnagar manufacturing</div>
                    <div className="text-xs text-muted-foreground">Agartala, Tripura · India</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.28em] text-emerald">Manufacturing</div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance md:text-5xl">
                Six steps. <span className="text-gradient-aqua">Zero compromise.</span>
              </h2>
            </Reveal>
            <div className="mt-10 space-y-1">
              {STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.05}>
                  <div className="group flex items-start gap-6 border-t border-border py-5 transition hover:bg-background/50 px-2 rounded-lg">
                    <div className="font-display text-2xl font-semibold text-muted-foreground/60 group-hover:text-primary transition">{s.n}</div>
                    <div>
                      <div className="font-display text-lg font-semibold">{s.t}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{s.d}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Link to="/processing" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary">
              See the full process <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CERTIFICATIONS ───────────────────────── */

const CERTS = [
  { img: certIso,   label: "ISO 22000:2018", desc: "Food Safety Management" },
  { img: certGmp,   label: "GMP",            desc: "Good Manufacturing Practices" },
  { img: certHalal, label: "Halal",          desc: "Certified Halal compliant" },
  { img: certKosher,label: "Kosher",         desc: "Certified Kosher compliant" },
];

function Certifications() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-end">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-emerald">Certifications</div>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance md:text-5xl">
                International-grade <span className="text-gradient-aqua">compliance</span>.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground text-pretty">
              Every Naturalis facility is audited and certified against global food
              safety standards — so distributors, retailers and consumers anywhere
              in the world can trust what's inside the bottle and on the plate.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {CERTS.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-3xl border border-border bg-card hover-lift hover:border-primary/40">
                <div className="aspect-[3/4] overflow-hidden bg-secondary/40">
                  <img src={c.img} alt={c.label} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-emerald" />
                    <div className="font-display font-semibold">{c.label}</div>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{c.desc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FOUNDER TEASER ───────────────────────── */

function FounderTeaser() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-emerald/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-border">
                <img src={founder} alt="Mr. Suman Roy, Managing Director" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.28em] text-emerald">Founder · Managing Director</div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance md:text-5xl">
                A vision born in Agartala. <span className="text-gradient-aqua">A brand built for the world.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-muted-foreground text-pretty">
                Naturalis Water and Beverages is the brainchild of <strong className="text-foreground">Mr. Suman Roy</strong>.
                A mechanical engineer from NERIST with an MBA and 26+ years of senior leadership
                across India's telecommunications industry, his execution-first philosophy turned
                a regional ambition into one of Northeast India's pioneering healthy beverage brands.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <Link
                to="/about"
                hash="founder"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-6 py-3.5 text-sm font-medium backdrop-blur transition hover:border-primary/50"
              >
                Read the founder story <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── EXPORT ───────────────────────── */

function ExportSection() {
  return (
    <section className="relative overflow-hidden bg-card/40 py-32">
      <div className="absolute inset-0">
        <img src={exportGlobe} alt="" loading="lazy" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      </div>
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative h-96 overflow-hidden rounded-3xl border border-border">
          <img src={exportGlobe} alt="Global export routes" loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </div>
        <div>
          <Reveal>
            <div className="text-xs uppercase tracking-[0.28em] text-emerald">Export & distribution</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              Built for <span className="text-gradient-aqua">international trade</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-muted-foreground text-pretty">
              Export-ready packaging, internationally recognised certifications and
              a partner network across the Middle East, Southeast Asia and beyond.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 grid grid-cols-3 gap-px bg-border/60 overflow-hidden rounded-2xl">
              <Pill icon={<Globe2 className="h-4 w-4" />} t="20+" s="Countries reached" />
              <Pill icon={<Truck className="h-4 w-4" />} t="Cold" s="Chain logistics" />
              <Pill icon={<ShieldCheck className="h-4 w-4" />} t="100%" s="Compliant" />
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/export" className="rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-luxe">Export inquiry</Link>
              <Link to="/distributors" className="rounded-full border border-border px-6 py-3.5 text-sm font-medium">Become distributor</Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Vegetables sub-band */}
      <div className="relative mx-auto mt-24 max-w-7xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <img src={vegetables} alt="Fresh vegetables" loading="lazy" className="h-[360px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-10 md:p-16 max-w-xl">
              <div className="text-xs uppercase tracking-[0.28em] text-emerald">Leaf &amp; Grains</div>
              <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">From farm gate to fresh shelves.</h3>
              <p className="mt-3 text-sm text-muted-foreground">24 fresh vegetables, ready-to-eat trays, jams &amp; juices — graded, washed, packed.</p>
              <Link to="/products/fresh-vegetables" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                Browse produce <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Pill({ icon, t, s }: { icon: React.ReactNode; t: string; s: string }) {
  return (
    <div className="bg-background px-5 py-5">
      <div className="flex items-center gap-2 text-primary">{icon}<span className="font-display text-lg font-semibold">{t}</span></div>
      <div className="mt-1 text-xs text-muted-foreground">{s}</div>
    </div>
  );
}

/* ───────────────────────── TESTIMONIALS ───────────────────────── */

const QUOTES = [
  { q: "Purelyf has become a household standard in our region — the clarity and consistency is on par with global brands.", a: "Retail Partner, Guwahati" },
  { q: "Naturalis Group operates with the rigour of an enterprise. Their export documentation is impeccable.", a: "Importer, Dubai" },
  { q: "From sourcing to packaging, the quality story is genuinely premium. Easy to recommend.", a: "Hospitality Buyer, Kolkata" },
];

function Testimonials() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.28em] text-emerald">Voices</div>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">Trusted by partners worldwide.</h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="glass-strong h-full rounded-3xl p-7 hover-lift">
                <div className="font-display text-3xl leading-none text-primary">"</div>
                <p className="mt-2 text-foreground/90 text-pretty">{q.q}</p>
                <div className="mt-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">{q.a}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CTA BAND ───────────────────────── */

function CtaBand() {
  return (
    <section className="px-6 pb-10">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-border bg-gradient-to-br from-primary/20 via-card to-emerald/10 p-10 md:p-16">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-emerald/20 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-[2fr_1fr] md:items-center">
            <div>
              <h3 className="font-display text-3xl font-semibold tracking-tight md:text-5xl text-balance">
                Ready to stock or distribute Naturalis?
              </h3>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Join a growing network of distributors, retailers and HoReCa
                partners building premium brands with us.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-luxe">
                Get in touch <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/order" className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-medium">
                Place an order
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
