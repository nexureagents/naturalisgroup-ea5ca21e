import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { sendInquiryEmail } from "@/lib/emailjs";

type Kind = "general" | "distributor" | "export" | "bulk" | "product" | "franchise" | "careers";

const INQUIRY_TYPES: { value: Kind; label: string }[] = [
  { value: "general", label: "General Inquiry" },
  { value: "product", label: "Product Inquiry" },
  { value: "distributor", label: "Distributor Partnership" },
  { value: "export", label: "Export Inquiry" },
  { value: "bulk", label: "Bulk Order" },
  { value: "franchise", label: "Franchise Inquiry" },
  { value: "careers", label: "Careers / Join Team" },
];

type Status = "idle" | "loading" | "success" | "error";

export function InquiryForm({ kind = "general" }: { kind?: Kind }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    inquiry_type: kind,
    message: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Please enter a valid email";
    if (!/^[+\d][\d\s\-()]{6,}$/.test(form.phone)) return "Please enter a valid phone number";
    if (!form.message.trim()) return "Please write a brief message";
    return "";
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    const err = validate();
    if (err) {
      setStatus("error");
      setErrorMsg(err);
      toast.error(err);
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      await sendInquiryEmail({
        full_name: form.name,
        from_name: form.name,
        from_email: form.email,
        email: form.email,
        company: form.company,
        phone: form.phone,
        country: form.country,
        inquiry_type: INQUIRY_TYPES.find((t) => t.value === form.inquiry_type)?.label ?? form.inquiry_type,
        message: form.message,
      });
      setStatus("success");
      toast.success("Inquiry sent successfully");
      setForm({ name: "", company: "", email: "", phone: "", country: "", inquiry_type: kind, message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      toast.error("Failed to send inquiry");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" value={form.name} onChange={update("name")} required />
        <Field label="Company" value={form.company} onChange={update("company")} />
        <Field label="Email" type="email" value={form.email} onChange={update("email")} required />
        <Field label="Phone / WhatsApp" value={form.phone} onChange={update("phone")} required />
        <Field label="Country / Region" value={form.country} onChange={update("country")} />
        <div>
          <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">Inquiry type</label>
          <select
            value={form.inquiry_type}
            onChange={update("inquiry_type")}
            className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary"
          >
            {INQUIRY_TYPES.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">Message</label>
        <textarea
          value={form.message}
          onChange={update("message")}
          rows={4}
          className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary"
          placeholder="How can Naturalis help you?"
        />
      </div>

      <AnimatePresence mode="wait">
        {status === "error" && (
          <motion.div
            key="err"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 rounded-2xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
          >
            <AlertCircle className="h-4 w-4" /> {errorMsg}
          </motion.div>
        )}
        {status === "success" && (
          <motion.div
            key="ok"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 rounded-2xl border border-emerald/40 bg-emerald/10 px-4 py-3 text-sm text-emerald"
          >
            <CheckCircle2 className="h-4 w-4" /> Thank you — your inquiry has been sent. We'll be in touch within 24 hours.
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "loading"}
        className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-luxe transition hover:opacity-90 disabled:opacity-70"
      >
        {status === "loading" ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
        ) : status === "success" ? (
          <><CheckCircle2 className="h-4 w-4" /> Sent</>
        ) : (
          <><Send className="h-4 w-4" /> Send Inquiry</>
        )}
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
