import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const CAREERS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CAREERS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

let initialized = false;
function ensureInit() {
  if (!PUBLIC_KEY) throw new Error("EmailJS public key is not configured");
  if (!initialized) {
    emailjs.init({ publicKey: PUBLIC_KEY });
    initialized = true;
  }
}

export async function sendInquiryEmail(payload: Record<string, unknown>) {
  ensureInit();
  if (!SERVICE_ID || !TEMPLATE_ID) throw new Error("EmailJS inquiry template is not configured");
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, {
    ...payload,
    submitted_at: new Date().toLocaleString(),
  });
}

export async function sendCareersEmail(payload: Record<string, unknown>) {
  ensureInit();
  if (!SERVICE_ID || !CAREERS_TEMPLATE_ID) throw new Error("EmailJS careers template is not configured");
  return emailjs.send(SERVICE_ID, CAREERS_TEMPLATE_ID, {
    ...payload,
    to_email: "careers@naturalispure.com",
    submitted_at: new Date().toLocaleString(),
  });
}

export const PHONE_NUMBER = "+919650068007";
export const PHONE_DISPLAY = "+91 96500 68007";
