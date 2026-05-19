import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import founder from "@/assets/founder-suman-roy.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import { ArrowRight, GraduationCap, Briefcase, Lightbulb, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Naturalis — Vision, Story & Founder Suman Roy" },
      { name: "description", content: "Naturalis Group blends two decades of executive operational rigour with a mission for pure water and healthy foods. Read the company story and meet Managing Director Mr. Suman Roy." },
      { property: "og:title", content: "About Naturalis Group" },
      { property: "og:description", content: "Vision, manufacturing excellence and the founder behind Naturalis." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Naturalis"
        title="A premium FMCG story written from Northeast India."
        description="Naturalis Water and Beverages and Leaf & Grains Pvt Ltd were built on a single idea — that purity, safety and innovation can be made locally and trusted globally."
      />

      {/* Philosophy */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {[
              { t: "Purity", d: "Multi-stage purification systems, lab-tested, every batch." },
              { t: "Safety", d: "Internationally certified food safety management across facilities." },
              { t: "Innovation", d: "Continuous R&D in hydration, sauces, and convenient fresh foods." },
            ].map((b, i) => (
              <Reveal key={b.t} delay={i * 0.08}>
                <div className="rounded-3xl border border-border bg-card p-8 h-full hover-lift">
                  <div className="font-display text-2xl font-semibold text-gradient-aqua">{b.t}</div>
                  <p className="mt-4 text-muted-foreground">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing block */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-border">
          <div className="grid lg:grid-cols-2">
            <img src={manufacturing} alt="Naturalis manufacturing" loading="lazy" className="h-full w-full object-cover" />
            <div className="p-10 md:p-14">
              <div className="text-xs uppercase tracking-[0.28em] text-emerald">Manufacturing excellence</div>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">Engineered like infrastructure. Operated like enterprise.</h2>
              <p className="mt-5 text-muted-foreground">
                Our facilities apply enterprise-grade operating discipline borrowed
                from the founder's two decades in telecommunications: SOPs, audits,
                cleanliness and uptime are non-negotiable.
              </p>
              <Link to="/processing" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary">
                See the process <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section id="founder" className="scroll-mt-24 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <div className="text-xs uppercase tracking-[0.28em] text-emerald">Founder · Managing Director</div>
              <h2 className="mt-4 font-display text-5xl font-semibold tracking-tight md:text-7xl text-balance">
                Mr. <span className="text-gradient-aqua">Suman Roy</span>.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground text-pretty">
                Naturalis Water and Beverages is the brainchild of Mr. Suman Roy.
                His entrepreneurial leadership, vision and relentless execution built
                Naturalis Group from the ground up into one of the pioneering healthy
                water and beverage companies in Northeast India.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid items-start gap-12 lg:grid-cols-[1.1fr_1.5fr]">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/30 to-emerald/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-border">
                  <img src={founder} alt="Mr. Suman Roy" loading="lazy" className="w-full" />
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Stat n="26+" l="Years leadership" />
                  <Stat n="2" l="Industries built" />
                </div>
              </div>
            </Reveal>

            <div className="space-y-3">
              {[
                {
                  icon: Briefcase,
                  t: "From telecom to FMCG",
                  d: "Prior to Naturalis, he served in senior management roles across major Indian telecommunications corporations — leading infrastructure rollouts, strategic deployment and enterprise operations.",
                },
                {
                  icon: GraduationCap,
                  t: "Mechanical engineer · MBA",
                  d: "Mechanical Engineering from NERIST, followed by an MBA in operations and management — combining technical depth with executive strategy.",
                },
                {
                  icon: Lightbulb,
                  t: "An execution-first vision",
                  d: "He oversees product development, manufacturing, branding, quality, public relations and operational expansion — every detail of the Naturalis experience.",
                },
                {
                  icon: Award,
                  t: "A regional patriot, a global builder",
                  d: "A proud native of Agartala and an active philanthropist, his mission is to make Naturalis a trusted premium hydration and healthy-food brand delivering purity, safety, affordability, innovation and nutrition.",
                },
              ].map((step, i) => (
                <Reveal key={step.t} delay={i * 0.08}>
                  <div className="group flex gap-5 rounded-3xl border border-border bg-card p-6 transition hover:border-primary/40 hover-lift">
                    <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl border border-border bg-background">
                      <step.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-display text-lg font-semibold">{step.t}</div>
                      <p className="mt-2 text-sm text-muted-foreground">{step.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <blockquote className="mx-auto mt-24 max-w-4xl border-l-2 border-primary pl-8">
              <p className="font-display text-2xl leading-relaxed text-foreground/90 md:text-3xl text-balance">
                "We are not just building products. We are building trust — bottle by bottle,
                batch by batch, until purity is something you can taste with your eyes closed."
              </p>
              <footer className="mt-6 text-sm uppercase tracking-[0.22em] text-muted-foreground">
                Suman Roy · Managing Director
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="font-display text-3xl font-semibold text-gradient-aqua">{n}</div>
      <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{l}</div>
    </div>
  );
}
