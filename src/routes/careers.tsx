import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { CareersForm } from "@/components/site/CareersForm";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/careers")({
  head: () => ({ meta: [{ title: "Careers — Naturalis" }, { name: "description", content: "Help us build a premium Indian FMCG brand. Apply to join the Naturalis team." }] }),
  component: () => (
    <PageShell>
      <PageHero eyebrow="Careers" title="Build something premium with us." description="We're growing fast across sales, manufacturing, supply chain and brand. Send us your application and we'll be in touch." />
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
              <h2 className="font-display text-2xl font-semibold">Join the Naturalis Team</h2>
              <p className="mt-1 text-sm text-muted-foreground">Work with a growing premium food &amp; beverage brand.</p>
              <div className="mt-8"><CareersForm /></div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  ),
});
