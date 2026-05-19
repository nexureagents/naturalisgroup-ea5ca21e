import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

const PAGES: Record<string, { title: string; desc: string }> = {
  "/gallery": { title: "Gallery", desc: "Product, manufacturing and brand imagery — coming with the next asset batch." },
  "/blog": { title: "Journal", desc: "Stories, updates and insights from the Naturalis team — launching soon." },
  "/careers": { title: "Careers", desc: "Help us build a premium Indian FMCG brand. Roles will be posted here shortly." },
  "/faq": { title: "Frequently Asked Questions", desc: "Common questions about our products, ordering and distribution — coming soon." },
  "/privacy-policy": { title: "Privacy Policy", desc: "Our full privacy policy is being prepared and will appear here." },
  "/terms-and-conditions": { title: "Terms & Conditions", desc: "Our full terms of service are being prepared and will appear here." },
  "/cart": { title: "Cart", desc: "A full cart and checkout experience is rolling out in the next release." },
  "/checkout": { title: "Checkout", desc: "Secure checkout coming next. For now, please place orders via the order page." },
};

function Placeholder({ pathname }: { pathname: string }) {
  const info = PAGES[pathname] ?? { title: "Coming soon", desc: "" };
  return (
    <PageShell>
      <PageHero eyebrow="In development" title={info.title} description={info.desc} />
    </PageShell>
  );
}

export const galleryRoute = createFileRoute("/gallery")({
  head: () => ({ meta: [{ title: "Gallery — Naturalis" }, { name: "description", content: "Naturalis brand and product gallery." }] }),
  component: () => <Placeholder pathname="/gallery" />,
});
