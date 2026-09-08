import type { Metadata } from "next";
import Link from "next/link";
import { CreditCard, Mail, MessageCircle, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact & Book an Appointment – MINDEDIT | Kollam",
  description:
    "Contact MINDEDIT, Kollam by phone, WhatsApp, or email to book a consultation. Adult services 9:00 AM–6:00 PM; child development services 9:00 AM–5:30 PM by prior booking.",
};

const cardClass =
  "rounded-2xl border border-[#1E4638]/[0.06] bg-white shadow-[0_4px_6px_-1px_rgba(20,53,42,0.06),0_12px_32px_-8px_rgba(20,53,42,0.10)]";

const channels: {
  icon: LucideIcon;
  title: string;
  body: string;
  action: string;
  href: string;
  external?: boolean;
}[] = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    body: "The quickest way to reach us and confirm an appointment slot.",
    action: "Chat on WhatsApp",
    href: "https://wa.me/918139831157?text=Hi%20MINDEDIT%2C%20I%27d%20like%20to%20book%20a%20consultation.",
    external: true,
  },
  {
    icon: Phone,
    title: "Phone",
    body: "Call us during clinic hours to discuss availability and bookings.",
    action: "8139831157",
    href: "tel:+918139831157",
  },
  {
    icon: Mail,
    title: "Email",
    body: "Send your query and we will respond with the next available slots.",
    action: "mindeditcare@gmail.com",
    href: "mailto:mindeditcare@gmail.com",
  },
];

const bookingSteps = [
  {
    step: "01",
    title: "Reach out",
    body: "Contact us by phone, WhatsApp, or email with a brief note about what you are seeking help for.",
  },
  {
    step: "02",
    title: "Choose a slot",
    body: "We confirm availability — adult services 9:00 AM–6:00 PM, child development services 9:00 AM–5:30 PM by prior booking.",
  },
  {
    step: "03",
    title: "Confirm your booking",
    body: "Appointments are booked in advance and the slot is confirmed once payment is received.",
  },
  {
    step: "04",
    title: "Attend your session",
    body: "Meet us online or at the clinic. Adult sessions run 60 minutes; children's sessions run 45 minutes.",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="px-4 pt-14 pb-4 sm:px-6 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <nav className="flex items-center gap-2 text-sm text-[#6B7A73]">
            <Link href="/" className="transition-colors hover:text-[#1E4638]">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span className="font-medium text-[#1E4638]">Contact Us</span>
          </nav>

          <h1 className="mt-6 max-w-3xl font-serif text-4xl font-bold leading-tight text-[#1E4638] sm:text-5xl">
            Contact Us
          </h1>
          <div
            className="mt-5 h-px w-16 bg-gradient-to-r from-[#C9A972] to-transparent"
            aria-hidden
          />
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#4A5A53] sm:text-base sm:leading-7">
            Taking the first step can feel difficult. Reach out in whichever way
            feels easiest — we will guide you from there. Consultations are
            available online and at our clinic in Kollam.
          </p>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {channels.map(({ icon: Icon, title, body, action, href, external }) => (
              <article key={title} className={`p-6 ${cardClass}`}>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#F4F8F6] text-[#1E4638] ring-1 ring-[#1E4638]/10">
                  <Icon size={20} strokeWidth={1.6} aria-hidden />
                </span>
                <h2 className="mt-4 font-serif text-lg font-bold text-[#1E4638]">
                  {title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#4A5A53]">
                  {body}
                </p>
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="mt-4 inline-flex items-center gap-1.5 border-b border-current pb-0.5 text-sm font-semibold text-[#1E4638] transition-opacity hover:opacity-70"
                >
                  {action}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Address, hours, map */}
      <Contact />

      {/* How booking works */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl font-bold text-[#1E4638] sm:text-4xl">
            How Booking Works
          </h2>

          <ol className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {bookingSteps.map((item) => (
              <li key={item.step} className={`p-6 ${cardClass}`}>
                <span className="font-serif text-2xl font-semibold tabular-nums text-[#C9A972]">
                  {item.step}
                </span>
                <h3 className="mt-3 font-serif text-lg font-bold text-[#1E4638]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4A5A53]">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>

          <p
            className={`mt-6 flex items-start gap-3 p-5 text-sm text-[#2C3B34] ${cardClass}`}
          >
            <CreditCard
              size={18}
              className="mt-0.5 shrink-0 text-[#A66B4A]"
              aria-hidden
            />
            <span>
              Please book your appointment in advance.{" "}
              <strong className="font-semibold text-[#1E4638]">
                Payment is required to confirm your slot.
              </strong>{" "}
              Bookings are made by phone call or WhatsApp.
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}
