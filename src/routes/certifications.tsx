import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import certIso from "@/assets/cert-iso.webp";
import certHalal from "@/assets/cert-halal.webp";
import certKosher from "@/assets/cert-kosher.webp";
import certGmp from "@/assets/cert-gmp.webp";
import certFssai from "@/assets/certs/fssai.webp";
import certBis from "@/assets/certs/bis.webp";
import certUdyam from "@/assets/certs/udyam.webp";
import certMsme from "@/assets/certs/msme.webp";
import certNeids from "@/assets/certs/neids.webp";

const CERTS = [
  { img: certFssai, t: "FSSAI License", d: "State licence under FSS Act 2006 — Purelyf, Purelyf+ 8.5 and Bubblz." },
  { img: certBis, t: "BIS — IS 14543:2016", d: "Bureau of Indian Standards licence for Packaged Drinking Water (500 ml, 1 L, 2 L, 20 L)." },
  { img: certIso, t: "ISO 22000:2018", d: "Food Safety Management System certification." },
  { img: certGmp, t: "GMP", d: "Good Manufacturing Practices certified." },
  { img: certHalal, t: "Halal Certified", d: "Compliant with Halal dietary standards." },
  { img: certKosher, t: "Kosher Certified", d: "Compliant with Kosher dietary standards." },
  { img: certUdyam, t: "Udyam Registration", d: "MSME Udyam-registered manufacturing enterprise (UDYAM-TR-08-0001161)." },
  { img: certMsme, t: "MSME / Udyog Aadhaar", d: "Ministry of MSME registered manufacturer (TR08A0000973)." },
  { img: certNeids, t: "NEIDS 2017", d: "Registered under the North-East Industrial Development Scheme (DPIIT, Govt. of India)." },
];

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Naturalis Quality & Compliance" },
      { name: "description", content: "ISO 22000, GMP, Halal, Kosher, FSSAI and HACCP certifications for Naturalis Group products and facilities." },
      { property: "og:title", content: "Naturalis Certifications" },
      { property: "og:description", content: "International quality & food safety certifications." },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero eyebrow="Compliance" title="Internationally certified." description="Audited, certified and continuously surveilled — so trust travels with every shipment." />
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {CERTS.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.08}>
              <div className="overflow-hidden rounded-3xl border border-border bg-card hover-lift">
                <div className="aspect-[3/4] overflow-hidden bg-secondary/40">
                  <img src={c.img} alt={c.t} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="font-display text-lg font-semibold">{c.t}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{c.d}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  ),
});
