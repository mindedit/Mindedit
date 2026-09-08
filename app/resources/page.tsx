import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FAQ from "@/components/FAQ";

const WHATSAPP_URL =
  "https://wa.me/918139831157?text=Hi%20MINDEDIT%2C%20I%27d%20like%20to%20book%20a%20consultation.";

export const metadata: Metadata = {
  title: "Resources – MINDEDIT | Frequently Asked Questions",
  description:
    "Answers to common questions about appointments, session length, clinic hours, confidentiality, assessments, and the services offered at MINDEDIT, Kollam.",
};

export default function ResourcesPage() {
  return (
    <div className="bg-white">
      <section className="px-4 pt-14 pb-2 sm:px-6 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <nav className="flex items-center gap-2 text-sm text-[#6B7A73]">
            <Link href="/" className="transition-colors hover:text-[#1E4638]">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span className="font-medium text-[#1E4638]">Resources</span>
          </nav>

          <h1 className="mt-6 max-w-3xl font-serif text-4xl font-bold leading-tight text-[#1E4638] sm:text-5xl">
            Resources
          </h1>
          <div
            className="mt-5 h-px w-16 bg-gradient-to-r from-[#C9A972] to-transparent"
            aria-hidden
          />
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#4A5A53] sm:text-base sm:leading-7">
            Practical answers about booking, sessions, confidentiality, and the
            care we provide — so you know what to expect before you reach out.
          </p>
        </div>
      </section>

      <FAQ />

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[#1E4638]/[0.06] bg-white px-6 py-10 text-center shadow-[0_4px_6px_-1px_rgba(20,53,42,0.06),0_12px_32px_-8px_rgba(20,53,42,0.10)] sm:px-10">
          <h2 className="font-serif text-2xl font-bold text-[#1E4638] sm:text-3xl">
            Still have a question?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-[#4A5A53] sm:text-[15px]">
            Reach out on WhatsApp or by phone and we will be glad to help.
            Sessions are available online and in-clinic.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#1E4638] px-6 text-[14px] font-medium text-white transition-colors hover:bg-[#16352b]"
            >
              Book a Consultation
              <ArrowRight size={16} aria-hidden />
            </a>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-[#A66B4A] px-6 text-[14px] font-medium text-[#A66B4A] transition-colors hover:bg-[#A66B4A] hover:text-white"
            >
              Contact Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
