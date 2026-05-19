import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { InquiryForm } from "@/components/site/InquiryForm";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [
      { title: "Order Naturalis — Retail & Bulk Orders" },
      { name: "description", content: "Place a retail or bulk order for Naturalis water, beverages and foods. Fast response by phone, WhatsApp or form." },
      { property: "og:title", content: "Order Naturalis" },
      { property: "og:description", content: "Retail and bulk ordering." },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero eyebrow="Order" title="Place an order." description="From a single case to a full container — tell us what you need and our team will respond within hours." />
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 md:p-12">
          <InquiryForm kind="bulk" />
        </div>
      </section>
    </PageShell>
  ),
});
