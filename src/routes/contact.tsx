import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { InquiryForm } from "@/components/site/InquiryForm";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Naturalis — Sales, Distribution & Export Inquiries" },
      { name: "description", content: "Get in touch with Naturalis Water and Beverages — sales, distribution, bulk and export inquiries. Anangnagar, Agartala, Tripura, India." },
      { property: "og:title", content: "Contact Naturalis" },
      { property: "og:description", content: "Talk to our sales, distribution and export teams." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Talk to us" title="Let's start a conversation." description="Whether you want to place an order, become a distributor or import Naturalis into your market — we'd love to hear from you." />

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
              <h2 className="font-display text-2xl font-semibold">Send an inquiry</h2>
              <p className="mt-1 text-sm text-muted-foreground">We respond within 24 hours, every business day.</p>
              <div className="mt-8"><InquiryForm /></div>
            </div>
          </Reveal>
          <div className="space-y-4">
            <InfoCard icon={<MapPin />} title="Headquarters" lines={["Naturalis Water and Beverages LLP","Anangnagar, Agartala, Tripura (W) — 799015","India"]} />
            <InfoCard icon={<Phone />} title="Customer care" lines={["1800-123-9776"]} />
            <InfoCard icon={<Mail />} title="Email" lines={["hello@naturalispure.com"]} />
            <a href="https://wa.me/911800123977" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-3xl border border-emerald/40 bg-emerald/5 p-6 transition hover:border-emerald">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald/20 text-emerald"><MessageCircle className="h-5 w-5" /></div>
              <div>
                <div className="font-display font-semibold">WhatsApp us</div>
                <div className="text-sm text-muted-foreground">Fastest response for orders &amp; inquiries</div>
              </div>
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-5 px-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="text-xs uppercase tracking-[0.22em] text-emerald">Distributors</div>
              <h3 className="mt-3 font-display text-2xl font-semibold">Become a Naturalis distributor</h3>
              <p className="mt-2 text-sm text-muted-foreground">Join our growing partner network across India and abroad.</p>
              <div className="mt-6"><InquiryForm kind="distributor" /></div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="text-xs uppercase tracking-[0.22em] text-emerald">Export</div>
              <h3 className="mt-3 font-display text-2xl font-semibold">Import Naturalis into your market</h3>
              <p className="mt-2 text-sm text-muted-foreground">Export-ready packaging, documentation and certifications.</p>
              <div className="mt-6"><InquiryForm kind="export" /></div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

function InfoCard({ icon, title, lines }: { icon: React.ReactNode; title: string; lines: string[] }) {
  return (
    <div className="flex items-start gap-4 rounded-3xl border border-border bg-card p-6">
      <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl border border-border bg-background text-primary">{icon}</div>
      <div>
        <div className="font-display font-semibold">{title}</div>
        {lines.map((l) => <div key={l} className="mt-1 text-sm text-muted-foreground">{l}</div>)}
      </div>
    </div>
  );
}
