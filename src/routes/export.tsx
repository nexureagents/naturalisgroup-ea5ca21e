import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { InquiryForm } from "@/components/site/InquiryForm";
import exportGlobe from "@/assets/export-globe.jpg";

export const Route = createFileRoute("/export")({
  head: () => ({
    meta: [
      { title: "Export — Import Naturalis Into Your Market" },
      { name: "description", content: "Export-ready Naturalis products with complete certifications and documentation. Submit an export inquiry." },
      { property: "og:title", content: "Naturalis Export" },
      { property: "og:description", content: "Bring Naturalis to your market." },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero eyebrow="Export" title="Bring Naturalis to your market." description="Premium hydration, beverages and foods — packaged, documented and ready for international trade." />
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-border">
            <img src={exportGlobe} alt="Export routes" loading="lazy" className="w-full" />
          </div>
          <div className="rounded-3xl border border-border bg-card p-8">
            <h2 className="font-display text-2xl font-semibold">Export inquiry</h2>
            <p className="mt-1 text-sm text-muted-foreground">Tell us about your market and we'll respond with a tailored offer.</p>
            <div className="mt-6"><InquiryForm kind="export" /></div>
          </div>
        </div>
      </section>
    </PageShell>
  ),
});
