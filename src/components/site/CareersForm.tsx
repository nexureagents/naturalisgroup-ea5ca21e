import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2, Send, Upload } from "lucide-react";
import { sendCareersEmail } from "@/lib/emailjs";

type Status = "idle" | "loading" | "success" | "error";

export function CareersForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
    resume_name: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) setForm((f) => ({ ...f, resume_name: file.name }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ||
        !/^[+\d][\d\s\-()]{6,}$/.test(form.phone) || !form.position.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in all required fields with valid values.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      await sendCareersEmail({
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        position: form.position,
        experience: form.experience,
        message: form.message,
        resume_name: form.resume_name || "Not attached",
      });
      setStatus("success");
      setForm({ name: "", email: "", phone: "", position: "", experience: "", message: "", resume_name: "" });
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" value={form.name} onChange={update("name")} required />
        <Field label="Email" type="email" value={form.email} onChange={update("email")} required />
        <Field label="Phone" value={form.phone} onChange={update("phone")} required />
        <Field label="Position applying for" value={form.position} onChange={update("position")} required />
        <Field label="Experience (years / summary)" value={form.experience} onChange={update("experience")} />
        <div>
          <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">Resume (optional)</label>
          <label className="flex cursor-pointer items-center gap-2 rounded-2xl border border-dashed border-border bg-background/40 px-4 py-3 text-sm text-muted-foreground transition hover:border-primary hover:text-foreground">
            <Upload className="h-4 w-4" />
            <span className="truncate">{form.resume_name || "Attach PDF / DOC"}</span>
            <input type="file" accept=".pdf,.doc,.docx" onChange={onFile} className="hidden" />
          </label>
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">Cover message</label>
        <textarea
          value={form.message}
          onChange={update("message")}
          rows={4}
          className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary"
          placeholder="Tell us why you'd like to join Naturalis"
        />
      </div>

      <AnimatePresence mode="wait">
        {status === "error" && (
          <motion.div key="err" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="flex items-center gap-2 rounded-2xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" /> {errorMsg}
          </motion.div>
        )}
        {status === "success" && (
          <motion.div key="ok" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="flex items-center gap-2 rounded-2xl border border-emerald/40 bg-emerald/10 px-4 py-3 text-sm text-emerald">
            <CheckCircle2 className="h-4 w-4" /> Application received — our team will review and reach out soon.
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-luxe transition hover:opacity-90 disabled:opacity-70"
      >
        {status === "loading" ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
          : status === "success" ? <><CheckCircle2 className="h-4 w-4" /> Sent</>
          : <><Send className="h-4 w-4" /> Submit Application</>}
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
