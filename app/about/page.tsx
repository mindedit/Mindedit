import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Megaphone } from "lucide-react";
import About from "@/components/About";
import Founder from "@/components/Founder";
import {
  clinicFacts,
  detailedDescription,
  outreach,
  shortDescription,
  tagline,
  whoWeServe,
} from "@/data/clinic";

const WHATSAPP_URL =
  "https://wa.me/918139831157?text=Hi%20MINDEDIT%2C%20I%27d%20like%20to%20book%20a%20consultation.";

export const metadata: Metadata = {
  title: "About Us – MINDEDIT | Mental Health & Child Development Centre, Kollam",
  description: shortDescription,
};

const cardClass =
  "rounded-2xl border border-[#1E4638]/[0.06] bg-white shadow-[0_4px_6px_-1px_rgba(20,53,42,0.06),0_12px_32px_-8px_rgba(20,53,42,0.10)]";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="px-4 pt-14 pb-4 sm:px-6 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <nav className="flex items-center gap-2 text-sm text-[#6B7A73]">
            <Link href="/" className="transition-colors hover:text-[#1E4638]">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span className="font-medium text-[#1E4638]">About Us</span>
          </nav>

          <p className="mt-6 text-[11px] font-semibold tracking-[0.22em] text-[#A66B4A] uppercase">
            {tagline}
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold leading-tight text-[#1E4638] sm:text-5xl">
            A centre for every mind, every age
          </h1>
          <div
            className="mt-5 h-px w-16 bg-gradient-to-r from-[#C9A972] to-transparent"
            aria-hidden
          />
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#4A5A53] sm:text-base sm:leading-7">
            {shortDescription}
          </p>
        </div>
      </section>

      {/* Who we serve — the two care tracks */}
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="max-w-3xl text-[15px] leading-relaxed text-[#4A5A53] sm:leading-7">
            {detailedDescription}
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {whoWeServe.map((track) => (
              <article key={track.title} className={`p-6 sm:p-8 ${cardClass}`}>
                <h2 className="font-serif text-xl font-bold text-[#1E4638] sm:text-2xl">
                  {track.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#4A5A53] sm:text-[15px]">
                  {track.body}
                </p>
                <Link
                  href={track.href}
                  className="mt-5 inline-flex items-center gap-1.5 border-b border-current pb-0.5 font-serif text-[15px] font-semibold text-[#1E4638] transition-opacity hover:opacity-70"
                >
                  View these services
                  <ArrowRight size={15} aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us, mission, vision, core values */}
      <About />

      <Founder variant="profile" />

      {/* Awareness & community work */}
      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-bold text-[#1E4638] sm:text-4xl">
              Awareness & Community Work
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#4A5A53] sm:leading-7">
              Beyond the clinic, MINDEDIT takes mental health conversations into
              schools, colleges, workplaces, and the wider community.
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {outreach.map((item) => (
              <article key={item.title} className={`p-6 ${cardClass}`}>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#F4F8F6] text-[#1E4638] ring-1 ring-[#1E4638]/10">
                  <Megaphone size={20} strokeWidth={1.6} aria-hidden />
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#1E4638]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4A5A53]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic at a glance */}
      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl font-bold text-[#1E4638] sm:text-4xl">
            The Clinic at a Glance
          </h2>

          <dl className="mt-9 grid gap-5 sm:grid-cols-2">
            {clinicFacts.map((fact) => (
              <div key={fact.label} className={`p-6 ${cardClass}`}>
                <dt className="text-[11px] font-semibold tracking-[0.18em] text-[#A66B4A] uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-[#2C3B34] sm:text-[15px]">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div
          className={`mx-auto max-w-6xl px-6 py-10 text-center sm:px-10 sm:py-12 ${cardClass}`}
        >
          <h2 className="font-serif text-2xl font-bold text-[#1E4638] sm:text-3xl">
            Come as you are
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-[#4A5A53] sm:text-[15px]">
            Whether you are seeking support for yourself, your child, or your
            family, we will help you find the right place to begin.
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
