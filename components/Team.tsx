import Link from "next/link";
import TherapistCard from "@/components/TherapistCard";

export default function Team() {
  return (
    <section
      id="team"
      className="relative scroll-mt-24 overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div
        className="pointer-events-none absolute -left-16 top-20 h-56 w-56 rounded-full bg-[#1E4638]/5 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-12 bottom-10 h-64 w-64 rounded-full bg-[#A66B4A]/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl font-bold text-[#1E4638] sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-3 text-sm text-[#6B6B6B] sm:text-base">
              Compassionate clinicians dedicated to evidence-based care for
              every mind, every age.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 text-sm font-semibold text-[#1E4638] transition-colors hover:text-[#A66B4A]"
          >
            Book a Consultation →
          </Link>
        </div>

        {/* BRD §6: Therapist 1 filled; Therapists 2 & 3 placeholders */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <TherapistCard
            name="Fia F. Shaji"
            designation="Consultant Psychologist | Founder, MINDEDIT"
            qualification="MSc Clinical Psychology · BSc Psychology"
            yearsExperience="1.5+ Years Experience"
            tags={[
              "Children",
              "Adolescents",
              "Adults",
              "Couples",
              "Families",
            ]}
            photoSrc="/founder.jpg"
            photoAlt="Fia F. Shaji, Founder of MINDEDIT"
          />
          <TherapistCard
            name="Coming Soon"
            designation=""
            qualification=""
            yearsExperience=""
            placeholder
          />
          <TherapistCard
            name="Coming Soon"
            designation=""
            qualification=""
            yearsExperience=""
            placeholder
          />
        </div>
      </div>
    </section>
  );
}
