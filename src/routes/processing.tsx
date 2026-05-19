import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import manufacturing from "@/assets/manufacturing.jpg";

export const Route = createFileRoute("/processing")({
  head: () => ({
    meta: [
      { title: "Processing & Manufacturing — Naturalis" },
      { name: "description", content: "How Naturalis sources, purifies, processes, packages and distributes its premium products." },
      { property: "og:title", content: "Naturalis Processing & Manufacturing" },
      { property: "og:description", content: "Six-stage premium manufacturing process." },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero eyebrow="Processing" title="From source to shelf." description="A six-stage, fully-automated process engineered for purity, hygiene and scale." />
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-border">
          <img src={manufacturing} alt="Naturalis processing" className="w-full" loading="lazy" />
        </div>
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <Reveal>
            <p className="text-muted-foreground">A full immersive processing walkthrough — sourcing, multi-stage purification, processing, packaging, lab QA and distribution — is being added in our next release.</p>
            <Link to="/contact" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">Request a facility visit</Link>
          </Reveal>
        </div>
      </section>
    </PageShell>
  ),
});
