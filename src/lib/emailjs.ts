import emailjs from "@emailjs/browser";

// EmailJS public credentials — safe to ship in client code
const SERVICE_ID = "service_0icv4b7";
const TEMPLATE_ID = "template_dldjd09";
const CAREERS_TEMPLATE_ID = "template_eg77x5d";
const PUBLIC_KEY = "AxQzUXMW0gpx_e7Go";

let initialized = false;
function ensureInit() {
  if (!initialized) {
    emailjs.init({ publicKey: PUBLIC_KEY });
    initialized = true;
  }
}

export async function sendInquiryEmail(payload: Record<string, unknown>) {
  ensureInit();
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, {
    ...payload,
    submitted_at: new Date().toLocaleString(),
  });
}

export async function sendCareersEmail(payload: Record<string, unknown>) {
  ensureInit();
  return emailjs.send(SERVICE_ID, CAREERS_TEMPLATE_ID, {
    ...payload,
    to_email: "careers@naturalispure.com",
    submitted_at: new Date().toLocaleString(),
  });
}

export const PHONE_NUMBER = "+919650068007";
export const PHONE_DISPLAY = "+91 96500 68007";
