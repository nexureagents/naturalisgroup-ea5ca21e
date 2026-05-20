import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { InquiryForm } from "@/components/site/InquiryForm";
import { CareersForm } from "@/components/site/CareersForm";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/emailjs";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Naturalis — Sales, Distribution & Export Inquiries" },
      { name: "description", content: "Get in touch with Naturalis Water and Beverages — sales, distribution, bulk, careers and export inquiries. Anangnagar, Agartala, Tripura, India." },
      { property: "og:title", content: "Contact Naturalis" },
      { property: "og:description", content: "Talk to our sales, distribution, careers and export teams." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Talk to us" title="Let's start a conversation." description="Whether you want to place an order, become a distributor, join our team or import Naturalis into your market — we'd love to hear from you." />

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
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="group flex items-center gap-4 rounded-3xl border border-primary/40 bg-primary/5 p-6 transition hover:border-primary hover:shadow-luxe"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/20 text-primary transition group-hover:scale-105">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display font-semibold">Call us directly</div>
                <div className="text-sm text-muted-foreground">{PHONE_DISPLAY} · Tap to dial</div>
              </div>
            </a>
            <InfoCard icon={<MapPin />} title="Headquarters" lines={["Naturalis Water and Beverages LLP","Anangnagar, Agartala, Tripura (W) — 799015","India"]} />
            <InfoCard icon={<Phone />} title="Customer care" lines={["1800-123-9776"]} />
            <InfoCard icon={<Mail />} title="Email" lines={["hello@naturalispure.com","careers@naturalispure.com"]} />
            <a href="https://wa.me/919650068007" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-3xl border border-emerald/40 bg-emerald/5 p-6 transition hover:border-emerald">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald/20 text-emerald"><MessageCircle className="h-5 w-5" /></div>
              <div>
                <div className="font-display font-semibold">WhatsApp us</div>
                <div className="text-sm text-muted-foreground">Fastest response for orders &amp; inquiries</div>
              </div>
            </a>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-primary/5 p-8 md:p-12">
              <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative grid gap-10 lg:grid-cols-[1fr_1.2fr]">
                <div>
                  <div className="text-xs uppercase tracking-[0.28em] text-emerald">Careers</div>
                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">Join the Naturalis Team</h2>
                  <p className="mt-3 max-w-md text-sm text-muted-foreground">Work with a growing premium food &amp; beverage brand. Send your application below and our HR team will reach out to qualified candidates.</p>
                  <div className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">careers@naturalispure.com</div>
                </div>
                <div><CareersForm /></div>
              </div>
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
