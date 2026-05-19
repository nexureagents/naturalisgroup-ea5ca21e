import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({ meta: [{ title: "Terms & Conditions — Naturalis" }, { name: "description", content: "Naturalis terms and conditions." }] }),
  component: () => (
    <PageShell><PageHero eyebrow="Legal" title="Terms & Conditions" description="Our full terms of service are being prepared and will appear here." /></PageShell>
  ),
});
