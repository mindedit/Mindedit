import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Baby, Building2, Presentation, UserRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  adultServices,
  childServices,
  corporateServices,
  generalServices,
  type Service,
} from "@/data/services";

const WHATSAPP_URL =
  "https://wa.me/918139831157?text=Hi%20MINDEDIT%2C%20I%27d%20like%20to%20book%20a%20consultation.";

export const metadata: Metadata = {
  title: "Services – MINDEDIT | Child Development & Mental Health Care, Kollam",
  description:
    "Explore all services at MINDEDIT: child development assessments and therapies, mental health care for adults, adolescents, couples and families, plus general and corporate programs.",
};

const cardClass =
  "rounded-2xl border border-[#1E4638]/[0.06] bg-white shadow-[0_4px_6px_-1px_rgba(20,53,42,0.06),0_12px_32px_-8px_rgba(20,53,42,0.10)]";

function ServiceTrack({
  id,
  eyebrow,
  title,
  description,
  services,
  icon: Icon,
  iconBg,
  imageSrc,
  imageAlt,
  reverse = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  services: Service[];
  icon: LucideIcon;
  iconBg: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  return (
    <section id={id} className="scroll-mt-24 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className={reverse ? "lg:order-2" : undefined}>
            <div className="flex items-center gap-3">
              <span
                className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white ${iconBg}`}
              >
                <Icon size={20} strokeWidth={1.75} aria-hidden />
              </span>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1E4638]/70">
                {eyebrow}
              </p>
            </div>
            <h2 className="mt-4 font-serif text-3xl font-bold text-[#1E4638] sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#4A5A53] sm:leading-7">
              {description}
            </p>
          </div>

          <div
            className={`relative aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-[0_4px_6px_-1px_rgba(20,53,42,0.06),0_16px_40px_-12px_rgba(20,53,42,0.16)] ${
              reverse ? "lg:order-1" : ""
            }`}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title: serviceTitle, icon: ServiceIcon }) => (
            <li
              key={serviceTitle}
              className={`flex items-center gap-3 px-4 py-4 ${cardClass}`}
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F4F8F6] text-[#1E4638] ring-1 ring-[#1E4638]/10">
                <ServiceIcon size={20} strokeWidth={1.5} aria-hidden />
              </span>
              <p className="text-sm font-semibold leading-snug text-[#1A3026]">
                {serviceTitle}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SecondaryTrack({
  id,
  title,
  description,
  services,
  icon: Icon,
}: {
  id: string;
  title: string;
  description: string;
  services: Service[];
  icon: LucideIcon;
}) {
  return (
    <section id={id} className="scroll-mt-24 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F4F8F6] text-[#1E4638] ring-1 ring-[#1E4638]/10">
            <Icon size={20} strokeWidth={1.75} aria-hidden />
          </span>
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1E4638] sm:text-[1.65rem]">
              {title}
            </h2>
            <p className="mt-1 text-sm text-[#6B7A73]">{description}</p>
          </div>
        </div>

        <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title: serviceTitle, icon: ServiceIcon }) => (
            <li
              key={serviceTitle}
              className={`flex items-center gap-3 px-4 py-4 ${cardClass}`}
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F4F8F6] text-[#1E4638] ring-1 ring-[#1E4638]/10">
                <ServiceIcon size={20} strokeWidth={1.5} aria-hidden />
              </span>
              <p className="text-sm font-semibold leading-snug text-[#1A3026]">
                {serviceTitle}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="px-4 pt-14 pb-6 sm:px-6 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <nav className="flex items-center gap-2 text-sm text-[#6B7A73]">
            <Link href="/" className="transition-colors hover:text-[#1E4638]">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span className="font-medium text-[#1E4638]">Services</span>
          </nav>

          <h1 className="mt-6 max-w-3xl font-serif text-4xl font-bold leading-tight text-[#1E4638] sm:text-5xl">
            All Services at MINDEDIT
          </h1>
          <div
            className="mt-5 h-px w-16 bg-gradient-to-r from-[#C9A972] to-transparent"
            aria-hidden
          />
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#4A5A53] sm:text-base sm:leading-7">
            Comprehensive psychological and developmental care for children,
            adolescents, adults, couples, and families — delivered by a
            multidisciplinary team in a safe, inclusive space.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#child-development"
              className="inline-flex items-center gap-2 rounded-full border border-[#C0602E] px-5 py-2.5 text-sm font-medium text-[#C0602E] transition-colors hover:bg-[#C0602E] hover:text-white"
            >
              Child Development
            </Link>
            <Link
              href="#mental-health"
              className="inline-flex items-center gap-2 rounded-full border border-[#1E4638] px-5 py-2.5 text-sm font-medium text-[#1E4638] transition-colors hover:bg-[#1E4638] hover:text-white"
            >
              Mental Health Services
            </Link>
            <Link
              href="#general"
              className="inline-flex items-center gap-2 rounded-full border border-[#1E4638]/25 px-5 py-2.5 text-sm font-medium text-[#1E4638] transition-colors hover:border-[#1E4638]"
            >
              General
            </Link>
            <Link
              href="#corporate"
              className="inline-flex items-center gap-2 rounded-full border border-[#1E4638]/25 px-5 py-2.5 text-sm font-medium text-[#1E4638] transition-colors hover:border-[#1E4638]"
            >
              Corporate
            </Link>
          </div>
        </div>
      </section>

      <ServiceTrack
        id="child-development"
        eyebrow="For Children"
        title="Child Development Services"
        description="Developmental and psychological support that helps children grow at their own pace — from early assessments and therapy to school readiness and parent training, with pediatric and psychiatric consultations as part of integrated care."
        services={childServices}
        icon={Baby}
        iconBg="bg-[#C0602E]"
        imageSrc="/child-development.jpg"
        imageAlt="Child development session at MINDEDIT"
      />

      <ServiceTrack
        id="mental-health"
        eyebrow="For Adults, Adolescents, Couples & Families"
        title="Mental Health Services"
        description="Evidence-based therapy and counselling for emotional well-being, relationships, and personal growth — including assessments, de-addiction interventions, stress management, psychotherapy, and psychiatric consultations."
        services={adultServices}
        icon={UserRound}
        iconBg="bg-[#1E4638]"
        imageSrc="/mental-health.jpg"
        imageAlt="Counselling session at MINDEDIT"
        reverse
      />

      <SecondaryTrack
        id="general"
        title="General Services"
        description="Programs that extend care into schools and the community."
        services={generalServices}
        icon={Presentation}
      />

      <SecondaryTrack
        id="corporate"
        title="Corporate & Organizational Services"
        description="Workplace mental health support for teams and organizations."
        services={corporateServices}
        icon={Building2}
      />

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div
          className={`mx-auto max-w-6xl px-6 py-10 text-center sm:px-10 sm:py-12 ${cardClass}`}
        >
          <h2 className="font-serif text-2xl font-bold text-[#1E4638] sm:text-3xl">
            Not sure which service you need?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#4A5A53] sm:text-[15px]">
            Reach out and we will help you find the right starting point. Sessions
            are available online and in-clinic.
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
