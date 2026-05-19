import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/careers")({
  head: () => ({ meta: [{ title: "Careers — Naturalis" }, { name: "description", content: "Help us build a premium Indian FMCG brand." }] }),
  component: () => (
    <PageShell><PageHero eyebrow="Careers" title="Build something premium with us." description="Open roles will be posted here shortly." /></PageShell>
  ),
});
