import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — Naturalis" }, { name: "description", content: "Checkout." }] }),
  component: () => (
    <PageShell><PageHero eyebrow="Checkout" title="Secure checkout" description="Coming next. Meanwhile, please place orders via the order page." /></PageShell>
  ),
});
