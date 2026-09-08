"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Calendar,
  Users,
  ShieldCheck,
  Lock,
  Brain,
  Video,
  Heart,
  MapPin,
  Award,
} from "lucide-react";
import HeroFrameScroll from "@/components/HeroFrameScroll";

const WHATSAPP_URL =
  "https://wa.me/918139831157?text=Hi%20MINDEDIT%2C%20I%27d%20like%20to%20book%20a%20consultation.";

const floatingLabels = [
  { icon: ShieldCheck, label: "Confidential Care" },
  { icon: Lock, label: "Evidence-Based Practice" },
  { icon: Brain, label: "Every Age, Every Mind" },
  { icon: Video, label: "Online & In-Person" },
];

const stats = [
  { icon: Award, value: "Since June 2025", caption: "Consultations" },
  { icon: Users, value: "Children to Families", caption: "Supported" },
  { icon: Heart, value: "Evidence-Based", caption: "Care" },
  { icon: MapPin, value: "Online & In-Clinic", caption: "Sessions" },
];

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function clamp(v, min = 0, max = 1) {
  return Math.min(max, Math.max(min, v));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

/** Smooth fade-in / hold / fade-out across a scroll range */
function rangeOpacity(p, fadeInStart, holdStart, holdEnd, fadeOutEnd) {
  if (p <= fadeInStart || p >= fadeOutEnd) return 0;
  if (p < holdStart) return (p - fadeInStart) / (holdStart - fadeInStart);
  if (p > holdEnd) return 1 - (p - holdEnd) / (fadeOutEnd - holdEnd);
  return 1;
}

const storyBeats = [
  {
    key: "mission",
    label: "Our Mission",
    title: "Mission",
    body: "To provide inclusive, compassionate, and evidence-based care that supports growth, resilience, and well-being across every age and stage of life.",
    // Appears early in the frame scrub
    range: [0.08, 0.14, 0.22, 0.3],
  },
  {
    key: "vision",
    label: "Our Vision",
    title: "Vision",
    body: "A world where every mind is valued, empowered, and given the opportunity to thrive.",
    range: [0.3, 0.36, 0.46, 0.54],
  },
  {
    key: "values",
    label: "Our Values",
    title: "Core Values",
    body: null,
    values: [
      { name: "Inclusion", line: "Everyone belongs." },
      { name: "Empathy", line: "Every story matters." },
      { name: "Growth", line: "Change is possible." },
      { name: "Integrity", line: "Care with trust and ethics." },
      { name: "Impact", line: "Creating lasting positive change." },
    ],
    range: [0.52, 0.58, 0.66, 0.74],
  },
];

/**
 * Scroll animation → lands on the static hero layout
 * (copy on the left, therapy session photo on the right).
 */
export default function HeroScene() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const track = document.querySelector("[data-hero-scroll-track]");
    if (!track) return;

    const onScroll = () => {
      const total = track.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const scrolled = clamp(-track.getBoundingClientRect().top / total);
      setProgress(scrolled);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // ——— Scroll animation math ———
  const hintOpacity = progress < 0.08 ? 1 - progress / 0.08 : 0;

  // Frames finish scrubbing at 0.72, then dissolve into the design landing
  const landingT = easeInOutCubic(clamp((progress - 0.74) / 0.18));
  const animStageOpacity = 1 - landingT;
  const animStageScale = lerp(1, 1.05, landingT);
  const landingOpacity = landingT;
  const landingShift = lerp(28, 0, landingT);

  // Story beats: opacity per beat, plus a shared scrim that only darkens
  // the footage while a beat is actually on screen
  const beatOpacities = storyBeats.map(
    (beat) => rangeOpacity(progress, ...beat.range) * animStageOpacity,
  );
  const beatScrim = Math.max(...beatOpacities);

  return (
    <section
      data-hero-scroll-track
      className="relative bg-white"
      style={{ height: "380vh" }}
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-white">
        {/* ========== SCROLL ANIMATION ========== */}
        <div
          className="absolute inset-0 z-10"
          style={{
            opacity: animStageOpacity,
            transform: `scale(${animStageScale})`,
            transformOrigin: "50% 50%",
            willChange: "opacity, transform",
          }}
        >
          <div className="absolute inset-0 z-20 overflow-hidden bg-[#E8DFD4]">
            <HeroFrameScroll progress={progress} fit="cover" />
          </div>

          {/* Cinematic scrim — only present while a beat is on screen */}
          <div
            className="pointer-events-none absolute inset-0 z-30 bg-[linear-gradient(to_top,rgba(9,28,21,0.92)_0%,rgba(9,28,21,0.62)_26%,rgba(9,28,21,0.18)_52%,rgba(9,28,21,0)_74%)]"
            style={{ opacity: beatScrim }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-30 bg-[linear-gradient(to_right,rgba(9,28,21,0.70)_0%,rgba(9,28,21,0.28)_34%,rgba(9,28,21,0)_62%)]"
            style={{ opacity: beatScrim * 0.9 }}
            aria-hidden
          />

          {/* Mission → Vision → Core Values story beats */}
          <div className="pointer-events-none absolute inset-0 z-30">
            <div className="relative mx-auto h-full max-w-7xl px-6 sm:px-10 lg:px-14">
              {/* Story progress ticks */}
              <div
                className="absolute right-6 bottom-10 flex items-center gap-1.5 sm:right-10 sm:bottom-24 lg:right-14"
                style={{ opacity: beatScrim }}
                aria-hidden
              >
                {beatOpacities.map((op, i) => (
                  <span
                    key={storyBeats[i].key}
                    className="h-[3px] rounded-full transition-none"
                    style={{
                      width: `${lerp(14, 34, op)}px`,
                      backgroundColor:
                        op > 0.4
                          ? "rgba(232,201,168,0.95)"
                          : "rgba(255,255,255,0.35)",
                    }}
                  />
                ))}
              </div>

              {storyBeats.map((beat, i) => {
                const op = beatOpacities[i];
                if (op <= 0.01) return null;
                return (
                  <div
                    key={beat.key}
                    className="absolute bottom-10 left-6 max-w-[34rem] sm:bottom-24 sm:left-10 lg:left-14 lg:max-w-[38rem]"
                    style={{
                      opacity: op,
                      transform: `translateY(${lerp(26, 0, op)}px)`,
                      filter: `blur(${lerp(5, 0, op)}px)`,
                    }}
                  >
                    <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.28em] text-[#E8C9A8] uppercase sm:text-[11px]">
                      <span
                        className="inline-block h-px w-8 bg-[#E8C9A8]/70"
                        aria-hidden
                      />
                      {beat.label}
                    </p>

                    <h2 className="sr-only">{beat.title}</h2>

                    {beat.body ? (
                      <p className="mt-5 max-w-[32rem] text-left font-serif text-[1.35rem] leading-[1.35] font-medium text-white [text-shadow:0_2px_18px_rgba(6,20,15,0.5)] sm:text-[1.9rem] sm:leading-[1.3] lg:text-[2.1rem]">
                        {beat.body}
                      </p>
                    ) : (
                      <ul className="mt-6 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                        {beat.values.map((v) => (
                          <li
                            key={v.name}
                            className="flex gap-3 text-left text-[13px] leading-snug sm:text-sm"
                          >
                            <span
                              className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8C9A8]"
                              aria-hidden
                            />
                            <span className="text-white/70">
                              <span className="block font-serif text-[17px] font-semibold text-white sm:text-[19px]">
                                {v.name}
                              </span>
                              {v.line}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <p
            className="pointer-events-none absolute bottom-8 left-1/2 z-30 -translate-x-1/2 text-xs tracking-[0.2em] text-white/90 uppercase [text-shadow:0_1px_12px_rgba(6,20,15,0.6)]"
            style={{ opacity: hintOpacity * animStageOpacity }}
          >
            Scroll
          </p>
        </div>

        {/* ========== DESIGN LANDING (after animation) ========== */}
        <div
          className="absolute inset-0 z-40 overflow-y-auto bg-white"
          style={{
            opacity: landingOpacity,
            transform: `translateY(${landingShift}px)`,
            pointerEvents: landingOpacity > 0.5 ? "auto" : "none",
            willChange: "opacity, transform",
          }}
        >
          <div className="relative mx-auto grid min-h-full max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-12">
            {/* Soft leaf decorations */}
            <div
              className="pointer-events-none absolute -left-16 top-10 h-64 w-64 rounded-full bg-[#1E4638]/5 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-[#C0602E]/10 blur-3xl"
              aria-hidden
            />

            {/* Left copy */}
            <div className="relative z-10 order-2 lg:order-1">
              <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-[#A66B4A] uppercase sm:text-xs">
                <span
                  className="inline-block h-px w-5 bg-[#A66B4A]"
                  aria-hidden
                />
                Compassionate. Professional. Confidential.
              </p>

              <h1 className="mt-4 max-w-xl font-serif text-[2.35rem] font-bold leading-[1.12] text-[#1E4638] sm:text-5xl lg:text-[3.25rem]">
                Rewriting Every Mind,{" "}
                <span className="text-[#A66B4A]">Every Age</span>
              </h1>

              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[#4A4A4A] sm:text-base">
                MINDEDIT is a centre for mental health and child development,
                dedicated to supporting individuals across all stages of life
                through compassionate, evidence-based care.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#1E4638] px-5 text-[14px] font-medium text-white transition-colors hover:bg-[#16352b]"
                >
                  <Calendar size={17} aria-hidden />
                  Book a Consultation
                </a>
                <Link
                  href="/psychologists"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-[#A66B4A] px-5 text-[14px] font-medium text-[#A66B4A] transition-colors hover:bg-[#A66B4A] hover:text-white"
                >
                  <Users size={17} aria-hidden />
                  Meet Our Specialists
                </Link>
              </div>

              {/* Stats */}
              <ul className="mt-10 grid max-w-lg grid-cols-2 gap-3 sm:gap-4">
                {stats.map(({ icon: Icon, value, caption }) => (
                  <li
                    key={value}
                    className="group flex items-center gap-3 rounded-2xl border border-[#1E4638]/[0.07] bg-white p-3 text-left shadow-[0_1px_2px_rgba(20,53,42,0.04),0_10px_30px_-12px_rgba(20,53,42,0.18)] transition duration-300 hover:-translate-y-0.5 hover:border-[#A66B4A]/30 hover:shadow-[0_2px_4px_rgba(20,53,42,0.05),0_18px_40px_-14px_rgba(20,53,42,0.26)] sm:p-3.5"
                  >
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F1F5F2] text-[#1E4638] transition-colors duration-300 group-hover:bg-[#1E4638] group-hover:text-white sm:h-10 sm:w-10"
                      aria-hidden
                    >
                      <Icon size={17} strokeWidth={1.75} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[12.5px] leading-tight font-semibold text-[#1E4638] sm:text-[13.5px]">
                        {value}
                      </span>
                      <span className="mt-1 block text-[9.5px] font-medium tracking-[0.16em] text-[#8A9A92] uppercase sm:text-[10px]">
                        {caption}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — therapy session photo */}
            <div className="relative z-10 order-1 mx-auto w-full max-w-lg lg:order-2 lg:max-w-none">
              <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(26,48,38,0.12)]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/hero-therapy.jpg"
                    alt="A therapist in conversation with a client in a calm, plant-filled MINDEDIT consultation room"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>

              {/* Floating labels */}
              <ul className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2.5">
                {floatingLabels.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex w-[9.25rem] items-center gap-2.5 rounded-xl bg-white/70 px-2.5 py-2 text-left shadow-[0_10px_28px_-8px_rgba(26,48,38,0.35)] backdrop-blur-sm sm:w-[10.25rem] sm:px-3 sm:py-2.5"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F1F1EC] text-[#1E4638] sm:h-8 sm:w-8">
                      <Icon size={15} strokeWidth={1.75} aria-hidden />
                    </span>
                    <span className="text-[10px] font-semibold leading-[1.3] text-[#2C3B34] sm:text-[11px]">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
