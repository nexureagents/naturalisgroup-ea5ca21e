import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [{ title: "Gallery — Naturalis" }, { name: "description", content: "Naturalis brand, product and manufacturing gallery." }] }),
  component: () => (
    <PageShell>
      <PageHero eyebrow="Gallery" title="A visual library, growing." description="Product, manufacturing and brand imagery will appear here with the next asset batch." />
    </PageShell>
  ),
});
