import { useState } from "react";

export function InquiryForm({ kind = "general" }: { kind?: "general" | "distributor" | "export" | "bulk" }) {
  const [done, setDone] = useState(false);
  if (done) {
    return (
      <div className="rounded-3xl border border-emerald/40 bg-emerald/5 p-8 text-center">
        <div className="font-display text-2xl">Thank you.</div>
        <p className="mt-2 text-sm text-muted-foreground">Our team will reach out within 24 hours.</p>
      </div>
    );
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Company" name="company" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone / WhatsApp" name="phone" required />
        {kind === "export" && <Field label="Country" name="country" required />}
        {kind === "distributor" && <Field label="Region / City" name="region" required />}
      </div>
      <div>
        <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">Message</label>
        <textarea
          name="message"
          rows={4}
          className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary"
          placeholder={
            kind === "bulk"
              ? "Tell us your volume, SKUs and timeline"
              : "How can Naturalis help you?"
          }
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-luxe transition hover:opacity-90"
      >
        Send Inquiry
      </button>
    </form>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        {...rest}
        className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary"
      />
    </div>
  );
}
