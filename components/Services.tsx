import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { UserRound, Baby, CircleCheck, ArrowRight } from "lucide-react";
import { adultHighlights, childHighlights } from "@/data/services";

function FeatureCard({
  title,
  description,
  items,
  href,
  cta,
  icon: Icon,
  iconBg,
  accent,
  imageSrc,
  imageAlt,
}: {
  title: string;
  description: string;
  items: string[];
  href: string;
  cta: string;
  icon: LucideIcon;
  iconBg: string;
  accent: string;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <article className="grid overflow-hidden rounded-[1.75rem] border border-[#1E4638]/[0.06] bg-white shadow-[0_4px_6px_-1px_rgba(20,53,42,0.06),0_12px_32px_-8px_rgba(20,53,42,0.12)] lg:grid-cols-[1fr_43%]">
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span
            className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white ${iconBg}`}
          >
            <Icon size={20} strokeWidth={1.75} aria-hidden />
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#1E4638] sm:text-[1.65rem]">
            {title}
          </h3>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-[#5A5A5A] sm:text-[15px]">
          {description}
        </p>

        <ul className="mt-5 space-y-2.5">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-[#2C2C2C]"
            >
              <CircleCheck
                size={16}
                className={`mt-0.5 shrink-0 ${accent}`}
                strokeWidth={1.75}
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Link
          href={href}
          className={`mt-7 inline-flex items-center gap-1.5 border-b pb-0.5 font-serif text-[15px] font-semibold transition-opacity hover:opacity-70 ${accent}`}
          style={{ borderColor: "currentColor" }}
        >
          {cta}
          <ArrowRight size={15} aria-hidden />
        </Link>
      </div>

      <div className="relative min-h-[240px] sm:min-h-[280px] lg:min-h-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 40vw, 100vw"
        />
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-[#1E4638] sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
            Separate pathways for Child Development and Mental Health — so every
            age receives the care they need.
          </p>
        </div>

        {/* BRD: keep Child Development and Mental Health clearly separate */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <FeatureCard
            title="Child Development"
            description="Nurturing young minds with compassion and expertise."
            items={childHighlights}
            href="/services#child-development"
            cta="Explore More"
            icon={Baby}
            iconBg="bg-[#C0602E]"
            accent="text-[#C0602E]"
            imageSrc="/child-development.jpg"
            imageAlt="Child development session at MINDEDIT"
          />
          <FeatureCard
            title="Mental Health Services"
            description="Support for every stage of life. You don't have to face it alone."
            items={adultHighlights}
            href="/services#mental-health"
            cta="Explore More"
            icon={UserRound}
            iconBg="bg-[#1E4638]"
            accent="text-[#1E4638]"
            imageSrc="/mental-health.jpg"
            imageAlt="Counselling session at MINDEDIT"
          />
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-[#1E4638] px-7 py-3 font-serif text-[15px] font-semibold text-[#1E4638] transition-colors hover:bg-[#1E4638] hover:text-white"
          >
            View All Services
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
