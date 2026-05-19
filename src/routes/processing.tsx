import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, Droplet, Factory, FlaskConical, PackageCheck, Sparkles, Truck } from "lucide-react";
import factory1 from "@/assets/factory-1.webp";
import factory2 from "@/assets/factory-2.webp";
import factory3 from "@/assets/factory-3.webp";
import factory4 from "@/assets/factory-4.webp";
import warehouse from "@/assets/warehouse-stock.webp";

const STAGES = [
  { n: "01", icon: Droplet, t: "Sourcing", d: "Premium raw water from controlled sources and farm-fresh inputs from trusted regional growers." },
  { n: "02", icon: Sparkles, t: "Purification", d: "Six-stage purification: DMF, RO, GAC, EMF, Ozonation and UV — every drop, every batch." },
  { n: "03", icon: Factory, t: "Processing", d: "Jacketed kettles, mixers and hygienic stainless-steel lines for sauces, jams and beverages." },
  { n: "04", icon: PackageCheck, t: "Packaging", d: "Fully-automatic filling, capping, sealing and shrink-wrapping with batch-coded traceability." },
  { n: "05", icon: FlaskConical, t: "Lab QA", d: "Every batch lab-tested for chemistry, microbiology, TDS and sensory parameters." },
  { n: "06", icon: Truck, t: "Distribution", d: "Cold-chain logistics and export-ready packaging across India and overseas markets." },
];

export const Route = createFileRoute("/processing")({
  head: () => ({
    meta: [
      { title: "Processing & Manufacturing — Naturalis" },
      { name: "description", content: "Inside Naturalis: six-stage manufacturing — sourcing, purification, processing, packaging, lab QA and distribution." },
      { property: "og:title", content: "Naturalis Manufacturing" },
      { property: "og:description", content: "How Naturalis builds export-grade hydration and FMCG products." },
      { property: "og:image", content: factory2 },
    ],
  }),
  component: ProcessingPage,
});

function ProcessingPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Processing" title="From source to shelf." description="A six-stage, fully-automated process engineered for purity, hygiene and scale." />

      {/* Marquee row */}
      <section className="px-6">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {[factory1, factory2, factory3].map((src, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border">
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stages */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {STAGES.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <div className="group h-full rounded-3xl border border-border bg-card p-7 transition hover:border-primary/40 hover-lift">
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background">
                      <s.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="font-display text-2xl text-muted-foreground/50">{s.n}</div>
                  </div>
                  <div className="mt-6 font-display text-xl font-semibold">{s.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl space-y-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border">
              <img src={factory4} alt="Naturalis processing hall" loading="lazy" className="h-[440px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center p-10 md:p-16 max-w-xl">
                <div className="text-xs uppercase tracking-[0.28em] text-emerald">Hygiene by design</div>
                <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">Enterprise discipline, applied to FMCG.</h3>
                <p className="mt-4 text-muted-foreground">SOPs, audits, cleanliness and uptime — the same operating discipline that runs telecom infrastructure now runs our food and beverage lines.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
              <div className="relative overflow-hidden rounded-3xl border border-border">
                <img src={warehouse} alt="Naturalis bottled water warehouse" loading="lazy" className="h-[360px] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
                  <div className="font-display text-lg font-semibold">Warehousing & dispatch</div>
                  <div className="text-xs text-muted-foreground">Climate-controlled storage · batch traceability</div>
                </div>
              </div>
              <div className="rounded-3xl border border-border bg-card p-8">
                <div className="text-xs uppercase tracking-[0.28em] text-emerald">Capabilities</div>
                <ul className="mt-5 space-y-3 text-sm">
                  {[
                    "Multi-stage water purification (DMF · RO · GAC · EMF · O₃ · UV)",
                    "Automatic filling · capping · sealing · shrink-wrap",
                    "Jacketed kettles & high-shear mixers for sauces and jams",
                    "Lab QA: chemistry, microbiology, sensory",
                    "Cold-chain & export-ready packaging",
                  ].map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald" />
                      <span className="text-foreground/90">{c}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">
                  Request a facility visit <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
