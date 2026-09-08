import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, ShieldCheck, Users, Video } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Team from "@/components/Team";
import Founder from "@/components/Founder";

const WHATSAPP_URL =
  "https://wa.me/918139831157?text=Hi%20MINDEDIT%2C%20I%27d%20like%20to%20book%20a%20consultation.";

export const metadata: Metadata = {
  title: "Our Psychologists – MINDEDIT | Kollam",
  description:
    "Meet the team at MINDEDIT, Kollam. Consultant psychologist Fia F. Shaji and a growing multidisciplinary team providing evidence-based care for children, adolescents, adults, couples, and families.",
};

const cardClass =
  "rounded-2xl border border-[#1E4638]/[0.06] bg-white shadow-[0_4px_6px_-1px_rgba(20,53,42,0.06),0_12px_32px_-8px_rgba(20,53,42,0.10)]";

const practiceNotes: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Users,
    title: "Who we work with",
    body: "Children, adolescents, adults, couples, and families — every age and stage of life.",
  },
  {
    icon: Clock,
    title: "Session length",
    body: "Adult sessions run 60 minutes; sessions for children run 45 minutes.",
  },
  {
    icon: Video,
    title: "Online or in-person",
    body: "Consultations are available both online and at the clinic in Kollam. No referral needed.",
  },
  {
    icon: ShieldCheck,
    title: "Confidential care",
    body: "Strict confidentiality in line with ethical standards, except where disclosure is legally required.",
  },
];

export default function PsychologistsPage() {
  return (
    <div className="bg-white">
      <section className="px-4 pt-14 pb-2 sm:px-6 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <nav className="flex items-center gap-2 text-sm text-[#6B7A73]">
            <Link href="/" className="transition-colors hover:text-[#1E4638]">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span className="font-medium text-[#1E4638]">Our Psychologists</span>
          </nav>

          <h1 className="mt-6 max-w-3xl font-serif text-4xl font-bold leading-tight text-[#1E4638] sm:text-5xl">
            Our Psychologists
          </h1>
          <div
            className="mt-5 h-px w-16 bg-gradient-to-r from-[#C9A972] to-transparent"
            aria-hidden
          />
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#4A5A53] sm:text-base sm:leading-7">
            A multidisciplinary team combining professional expertise with
            compassion, so every person who walks in feels understood, supported,
            and empowered.
          </p>
        </div>
      </section>

      <Team />

      <Founder />

      {/* How we practise */}
      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl font-bold text-[#1E4638] sm:text-4xl">
            What to Expect
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#4A5A53] sm:leading-7">
            The first session is about understanding your concerns, background,
            strengths, and goals — the plan is then built together.
          </p>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {practiceNotes.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className={`flex gap-4 p-6 ${cardClass}`}
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F4F8F6] text-[#1E4638] ring-1 ring-[#1E4638]/10">
                  <Icon size={20} strokeWidth={1.6} aria-hidden />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1E4638]">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#4A5A53]">
                    {body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div
          className={`mx-auto max-w-6xl px-6 py-10 text-center sm:px-10 sm:py-12 ${cardClass}`}
        >
          <h2 className="font-serif text-2xl font-bold text-[#1E4638] sm:text-3xl">
            Ready to speak with someone?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-[#4A5A53] sm:text-[15px]">
            Book a consultation on WhatsApp or by phone. We will match you with
            the right support for your needs.
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
