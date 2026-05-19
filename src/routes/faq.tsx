import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [{ title: "FAQ — Naturalis" }, { name: "description", content: "Common questions about Naturalis products, ordering and distribution." }] }),
  component: () => (
    <PageShell><PageHero eyebrow="FAQ" title="Frequently asked." description="Detailed answers coming soon." /></PageShell>
  ),
});
