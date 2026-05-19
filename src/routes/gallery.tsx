import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import factory1 from "@/assets/factory-1.webp";
import factory2 from "@/assets/factory-2.webp";
import factory3 from "@/assets/factory-3.webp";
import factory4 from "@/assets/factory-4.webp";
import warehouse from "@/assets/warehouse-stock.webp";
import building from "@/assets/nwb-building.webp";
import vegetables from "@/assets/category-vegetables.jpg";
import water1L from "@/assets/water-1l.webp";
import alkaline from "@/assets/purelyf-alkaline.webp";
import ketchup from "@/assets/product-ketchup.jpg";
import jam from "@/assets/product-pineapple-jam.jpg";
import orange from "@/assets/product-orange-soda.jpg";

const ITEMS: { src: string; label: string; tall?: boolean }[] = [
  { src: building, label: "NWB Headquarters · Agartala", tall: true },
  { src: factory1, label: "Processing line" },
  { src: factory2, label: "Mixing & jacketed kettles" },
  { src: warehouse, label: "Bottled water warehouse" },
  { src: factory3, label: "Packaging hall", tall: true },
  { src: factory4, label: "Production engineering" },
  { src: water1L, label: "Purelyf 1 L" },
  { src: alkaline, label: "Purelyf+ Alkaline" },
  { src: vegetables, label: "Leaf & Grains produce", tall: true },
  { src: ketchup, label: "Tomato Ketchup" },
  { src: jam, label: "Pineapple Jam" },
  { src: orange, label: "Orange Soda" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Naturalis Manufacturing, Products & Brand" },
      { name: "description", content: "Inside Naturalis: manufacturing lines, packaging halls, products and the brand at work." },
      { property: "og:title", content: "Naturalis Gallery" },
      { property: "og:description", content: "Manufacturing, products and brand imagery." },
      { property: "og:image", content: factory2 },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <PageShell>
      <PageHero eyebrow="Gallery" title="Inside Naturalis." description="A visual tour of our facilities, manufacturing lines, packaging halls and product portfolio." />

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
            {ITEMS.map((it, i) => (
              <Reveal key={i} delay={(i % 6) * 0.04}>
                <button
                  onClick={() => setOpen(i)}
                  className="group mb-5 block w-full overflow-hidden rounded-3xl border border-border bg-card transition hover:border-primary/40"
                >
                  <div className={`relative overflow-hidden ${it.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                    <img src={it.src} alt={it.label} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                    <div className="absolute bottom-4 left-4 right-4 text-left text-sm font-medium text-foreground opacity-0 transition group-hover:opacity-100">{it.label}</div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center bg-background/90 p-6 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.img
              key={open}
              src={ITEMS[open].src}
              alt={ITEMS[open].label}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              className="max-h-[88vh] max-w-[92vw] rounded-2xl shadow-luxe"
            />
            <button onClick={() => setOpen(null)} aria-label="Close" className="absolute top-6 right-6 grid h-12 w-12 place-items-center rounded-full border border-border bg-background/80">
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </PageShell>
  );
}
