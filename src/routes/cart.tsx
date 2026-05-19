import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Cart — Naturalis" }, { name: "description", content: "Your cart." }] }),
  component: () => (
    <PageShell><PageHero eyebrow="Cart" title="Your cart" description="A full cart and checkout experience is rolling out in Phase 2." /></PageShell>
  ),
});
