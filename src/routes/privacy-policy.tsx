import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({ meta: [{ title: "Privacy Policy — Naturalis" }, { name: "description", content: "Naturalis privacy policy." }] }),
  component: () => (
    <PageShell><PageHero eyebrow="Legal" title="Privacy Policy" description="Our full privacy policy is being prepared and will appear here." /></PageShell>
  ),
});
