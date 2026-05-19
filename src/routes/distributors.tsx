import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { InquiryForm } from "@/components/site/InquiryForm";

export const Route = createFileRoute("/distributors")({
  head: () => ({
    meta: [
      { title: "Become a Distributor — Naturalis" },
      { name: "description", content: "Partner with Naturalis. Apply to become an authorised distributor in your region." },
      { property: "og:title", content: "Become a Naturalis Distributor" },
      { property: "og:description", content: "Join our distributor network." },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero eyebrow="Partner with us" title="Become a Naturalis distributor." description="Build a premium FMCG portfolio in your region with margins, marketing support and a brand customers trust." />
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 md:p-12">
          <InquiryForm kind="distributor" />
        </div>
      </section>
    </PageShell>
  ),
});
