import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Loader } from "./Loader";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Loader />
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        className="pt-24"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div className="absolute inset-0 grid-noise opacity-40" />
      <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-6 py-28 text-center">
        {eyebrow && (
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/50 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
            {eyebrow}
          </div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-display text-5xl font-semibold tracking-tight text-balance md:text-7xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-pretty"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
