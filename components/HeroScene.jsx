"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Calendar,
  Users,
  ShieldCheck,
  Brain,
  Video,
  Heart,
  ArrowRight,
  Leaf,
  Monitor,
} from "lucide-react";
import HeroFrameScroll from "@/components/HeroFrameScroll";

const WHATSAPP_URL =
  "https://wa.me/918139831157?text=Hi%20MINDEDIT%2C%20I%27d%20like%20to%20book%20a%20consultation.";

const floatingLabels = [
  {
    icon: Brain,
    label: "Mental Health Support",
    tone: "bg-[#EAF3EC] text-[#1E4638]",
  },
  {
    icon: Users,
    label: "Evidence-Based Practice",
    tone: "bg-[#F6EDE4] text-[#A66B4A]",
  },
  {
    icon: Leaf,
    label: "For Every Age, Every Mind",
    tone: "bg-[#EEF5E8] text-[#3F6B4F]",
  },
  {
    icon: Monitor,
    label: "Online & In-Person Care",
    tone: "bg-[#EAF2F8] text-[#3A6A8A]",
  },
];

const stats = [
  {
    icon: Users,
    value: "Children to Families",
    caption: "Supporting Growth",
  },
  {
    icon: Heart,
    value: "Evidence-Based Care",
    caption: "Trusted Approaches",
  },
  {
    icon: Video,
    value: "Online & In-Clinic",
    caption: "Flexible Sessions",
  },
  {
    icon: Calendar,
    value: "Since June 2025",
    caption: "Building Brighter Futures",
  },
];

const trustMarks = [
  { icon: Users, title: "Lives Touched", caption: "Every age, every mind" },
  { icon: Heart, title: "Holistic Care", caption: "For all ages" },
  { icon: ShieldCheck, title: "Compassionate", caption: "Evidence-based" },
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
          <div className="relative mx-auto flex min-h-full max-w-[88rem] flex-col justify-center overflow-x-hidden px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-6 xl:gap-10">
              {/* Left copy */}
              <div className="relative z-10 order-2 lg:order-1">
                <p className="flex flex-wrap items-center gap-3 text-[10px] font-semibold tracking-[0.18em] text-[#A66B4A] uppercase sm:text-[11px] sm:tracking-[0.22em]">
                  Child Development & Mental Health Centre
                  <span
                    className="inline-block h-px w-10 bg-[#A66B4A]/70"
                    aria-hidden
                  />
                </p>

                <h1 className="mt-3 max-w-xl font-serif text-[1.85rem] font-bold leading-[1.1] text-[#1E4638] sm:text-[3.1rem] lg:text-[3.45rem]">
                  Rewriting Every Mind,{" "}
                  <span className="text-[#C0602E]">Every Age</span>
                </h1>

                <p className="mt-4 max-w-lg text-left text-[14px] leading-relaxed text-[#4A4A4A] sm:text-[15.5px] sm:leading-7">
                  MINDEDIT is a centre for mental health and child development,
                  dedicated to supporting individuals across all stages of life
                  through compassionate, evidence-based care.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#1E4638] px-5 text-[14px] font-medium text-white transition-colors hover:bg-[#16352b] sm:w-auto"
                  >
                    <Calendar size={16} aria-hidden />
                    Book a Consultation
                    <ArrowRight size={15} aria-hidden />
                  </a>
                  <Link
                    href="/psychologists"
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-[#C0602E] px-5 text-[14px] font-medium text-[#C0602E] transition-colors hover:bg-[#C0602E] hover:text-white sm:w-auto"
                  >
                    <Users size={16} aria-hidden />
                    Meet Our Specialists
                  </Link>
                </div>

                <ul className="mt-8 grid grid-cols-2 gap-3 xl:grid-cols-4">
                  {stats.map(({ icon: Icon, value, caption }) => (
                    <li
                      key={value}
                      className="rounded-2xl border border-[#1E4638]/[0.06] bg-white px-3 py-3.5 text-center shadow-[0_8px_24px_-12px_rgba(20,53,42,0.18)]"
                    >
                      <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF3EC] text-[#1E4638]">
                        <Icon size={16} strokeWidth={1.75} aria-hidden />
                      </span>
                      <span className="mt-2.5 block text-[12px] leading-tight font-semibold text-[#1E4638] sm:text-[13px]">
                        {value}
                      </span>
                      <span className="mt-1 block text-[9px] font-semibold tracking-[0.12em] text-[#8A9A92] uppercase">
                        {caption}
                      </span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                  {trustMarks.map(({ icon: Icon, title, caption }) => (
                    <li
                      key={title}
                      className="flex items-center gap-2.5 text-left"
                    >
                      <span className="flex h-8 w-8 items-center justify-center text-[#1E4638]">
                        <Icon size={18} strokeWidth={1.7} aria-hidden />
                      </span>
                      <span>
                        <span className="block text-[13px] font-semibold text-[#1E4638]">
                          {title}
                        </span>
                        <span className="block text-[11px] text-[#7A8A83]">
                          {caption}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — masked photo with design overlays */}
              <div className="relative z-10 order-1 mx-auto w-full max-w-xl lg:order-2 lg:max-w-none">
                <div
                  className="pointer-events-none absolute top-6 -left-6 hidden h-[86%] w-[42%] sm:-left-10 sm:block"
                  aria-hidden
                >
                  <Image
                    src="/hero-landing/pale-hero-arch.png"
                    alt=""
                    fill
                    className="object-contain object-left"
                    sizes="30vw"
                  />
                </div>
                <div
                  className="pointer-events-none absolute top-[6%] -left-1 hidden h-[58%] w-16 sm:block sm:w-24"
                  aria-hidden
                >
                  <Image
                    src="/hero-landing/botanical-line-leaf.png"
                    alt=""
                    fill
                    className="object-contain object-left"
                    sizes="6rem"
                  />
                </div>
                <div
                  className="pointer-events-none absolute top-[8%] left-[8%] hidden h-24 w-16 sm:block sm:h-32 sm:w-20"
                  aria-hidden
                >
                  <Image
                    src="/hero-landing/leaf-cluster.png"
                    alt=""
                    fill
                    className="object-contain"
                    sizes="5rem"
                  />
                </div>
                <div
                  className="pointer-events-none absolute top-[28%] -left-2 hidden h-10 w-16 sm:block sm:h-12 sm:w-20"
                  aria-hidden
                >
                  <Image
                    src="/hero-landing/edge-leaf.png"
                    alt=""
                    fill
                    className="object-contain"
                    sizes="5rem"
                  />
                </div>

                <div className="hero-photo-mask relative aspect-[5/4] w-full overflow-hidden sm:aspect-[4/3] lg:aspect-[5/4]">
                  <Image
                    src="/hero-therapy.jpg"
                    alt="A therapist in conversation with a client in a calm, plant-filled MINDEDIT consultation room"
                    fill
                    sizes="(max-width: 1024px) 100vw, 52vw"
                    className="object-cover object-[62%_center]"
                    priority
                  />
                </div>

                <p className="pointer-events-none absolute top-[16%] left-[34%] z-20 hidden max-w-[9.5rem] -rotate-6 font-hand text-[1.35rem] leading-[1.05] font-semibold text-[#1E4638] sm:left-[38%] sm:block sm:text-[1.7rem] lg:text-[1.85rem]">
                  A Kinder
                  <br />
                  Brighter Tomorrow
                </p>

                <ul className="absolute top-[14%] right-2 z-20 hidden w-[10.5rem] flex-col gap-2 sm:right-5 sm:flex sm:w-[11.75rem]">
                  {floatingLabels.map(({ icon: Icon, label, tone }) => (
                    <li
                      key={label}
                      className={`flex items-center gap-2.5 rounded-2xl px-2.5 py-2 text-left shadow-[0_8px_20px_-10px_rgba(26,48,38,0.28)] ${tone}`}
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/70">
                        <Icon size={14} strokeWidth={1.8} aria-hidden />
                      </span>
                      <span className="text-[11px] leading-tight font-semibold sm:text-[12px]">
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>

                <figure className="absolute bottom-3 left-2 z-20 flex max-w-[min(16.5rem,calc(100%-1rem))] items-center gap-3 rounded-[1.4rem] bg-[#FBF6EE]/95 px-3 py-2.5 shadow-[0_12px_30px_-14px_rgba(26,48,38,0.35)] sm:bottom-8 sm:left-6 sm:max-w-[18.5rem] sm:px-5 sm:py-3.5">
                  <blockquote className="text-left text-[12px] leading-snug text-[#3D4A44] sm:text-[13px]">
                    <span className="mr-1 font-serif text-lg leading-none text-[#A66B4A]">
                      “
                    </span>
                    Every story matters. We’re here to listen, support and help
                    you grow.
                    <footer className="mt-1.5 text-[10px] font-semibold tracking-[0.16em] text-[#8A9A92] uppercase">
                      — MINDEDIT
                    </footer>
                  </blockquote>
                  <span className="relative hidden h-12 w-10 shrink-0 sm:block">
                    <Image
                      src="/hero-landing/quote-leaf.png"
                      alt=""
                      fill
                      className="object-contain"
                      sizes="2.5rem"
                    />
                  </span>
                </figure>

                <div
                  className="pointer-events-none absolute right-0 bottom-0 z-20 h-28 w-36 sm:h-36 sm:w-44"
                  aria-hidden
                >
                  <Image
                    src="/hero-landing/corner-green-blob.png"
                    alt=""
                    fill
                    className="object-contain object-right-bottom"
                    sizes="11rem"
                  />
                  <p className="absolute right-3 bottom-3 text-right font-hand text-[0.95rem] leading-[1.05] font-semibold text-white sm:right-4 sm:bottom-4 sm:text-[1.15rem]">
                    People
                    <br />
                    Progress
                    <br />
                    Possibilities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
