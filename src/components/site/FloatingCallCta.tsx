import { Phone } from "lucide-react";
import { PHONE_NUMBER } from "@/lib/emailjs";

export function FloatingCallCta() {
  return (
    <a
      href={`tel:${PHONE_NUMBER}`}
      aria-label="Call Naturalis"
      className="group fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-luxe transition hover:scale-105 md:hidden"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/40" />
      <Phone className="h-5 w-5" />
    </a>
  );
}
