import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [{ title: "Journal — Naturalis" }, { name: "description", content: "Stories, updates and insights from the Naturalis team." }] }),
  component: () => (
    <PageShell><PageHero eyebrow="Journal" title="Stories from Naturalis." description="Launching soon." /></PageShell>
  ),
});
