import { HeartHandshake, Eye, Gem } from "lucide-react";
import {
  coreValues as coreValuesList,
  mission as missionText,
  vision as visionText,
  whyChooseUs,
} from "@/data/clinic";

const cards = [
  {
    title: "Mission",
    icon: HeartHandshake,
    body: missionText,
  },
  {
    title: "Vision",
    icon: Eye,
    body: visionText,
  },
  {
    title: "Core Values",
    icon: Gem,
    values: coreValuesList,
  },
];

const cardBase =
  "rounded-2xl border border-[#1E4638]/[0.06] bg-white shadow-[0_4px_6px_-1px_rgba(20,53,42,0.06),0_12px_32px_-8px_rgba(20,53,42,0.12)]";

export default function About() {
  const mission = cards[0];
  const vision = cards[1];
  const coreValues = cards[2];
  const MissionIcon = mission.icon;
  const VisionIcon = vision.icon;
  const ValuesIcon = coreValues.icon;

  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="relative mx-auto max-w-6xl">
        {/* Intro — editorial split */}
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl font-bold leading-tight text-[#1E4638] sm:text-4xl lg:text-[2.75rem]">
              About MINDEDIT
            </h2>
            <div
              className="mt-5 h-px w-16 bg-gradient-to-r from-[#C9A972] to-transparent"
              aria-hidden
            />
          </div>
          <div className="lg:col-span-7">
            <p className="text-[15px] leading-relaxed text-[#4A5A53] sm:text-base sm:leading-7">
              {whyChooseUs}
            </p>
          </div>
        </div>

        {/* Mission + Vision */}
        <div className="mt-14 grid gap-5 lg:grid-cols-2 lg:gap-6">
          <article className={`relative overflow-hidden p-8 sm:p-10 ${cardBase}`}>
            <div
              className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#1E4638] to-[#1E4638]/20"
              aria-hidden
            />
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F8F6] text-[#1E4638] ring-1 ring-[#1E4638]/10">
                <MissionIcon size={20} strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="font-serif text-2xl font-bold tracking-tight text-[#1E4638]">
                {mission.title}
              </h3>
            </div>
            <p className="mt-5 text-[15px] leading-relaxed text-[#4A5A53] sm:text-base sm:leading-7">
              {mission.body}
            </p>
          </article>

          <article className={`relative overflow-hidden p-8 sm:p-10 ${cardBase}`}>
            <div
              className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#C9A972] to-[#C9A972]/20"
              aria-hidden
            />
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#FAF6EE] text-[#A6853F] ring-1 ring-[#C9A972]/30">
                <VisionIcon size={20} strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="font-serif text-2xl font-bold tracking-tight text-[#1E4638]">
                {vision.title}
              </h3>
            </div>
            <p className="mt-5 text-[15px] leading-relaxed text-[#4A5A53] sm:text-base sm:leading-7">
              {vision.body}
            </p>
          </article>
        </div>

        {/* Core Values */}
        <div className={`mt-5 overflow-hidden lg:mt-6 ${cardBase}`}>
          <div className="flex items-center gap-3 border-b border-[#1E4638]/[0.08] px-8 py-7 sm:px-10">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F8F6] text-[#1E4638] ring-1 ring-[#1E4638]/10">
              <ValuesIcon size={20} strokeWidth={1.75} aria-hidden />
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#1E4638]">
              {coreValues.title}
            </h3>
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.values?.map((value, index) => (
              <li
                key={value.name}
                className="relative border-t border-[#1E4638]/[0.08] px-8 py-7 sm:border-t-0 sm:px-6 lg:border-l lg:border-[#1E4638]/[0.08] lg:first:border-l-0 lg:px-5 xl:px-6"
              >
                <span className="font-serif text-2xl font-semibold tabular-nums text-[#C9A972]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-serif text-lg font-semibold text-[#1E4638]">
                  {value.name}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-[#6B7A73]">
                  {value.line}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
