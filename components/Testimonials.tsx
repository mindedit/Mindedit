"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";

const AUTOPLAY_MS = 5000;

export const testimonials = [
  {
    quote:
      "MINDEDIT gave our child the support we had been searching for. The team was patient, clear, and truly caring every step of the way.",
    name: "Anita R.",
    designation: "Parent — Child Development",
    initial: "A",
  },
  {
    quote:
      "The sessions helped me manage stress and rediscover balance. I felt heard, respected, and guided with genuine professionalism.",
    name: "Rahul M.",
    designation: "Client — Individual Therapy",
    initial: "R",
  },
  {
    quote:
      "A warm, safe space for our family. Communication was excellent, and we left each session with practical tools we could use at home.",
    name: "Priya K.",
    designation: "Couple / Family Therapy",
    initial: "P",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(
      () => setIndex((i) => i + 1),
      AUTOPLAY_MS,
    );
    return () => window.clearInterval(timer);
  }, [paused, index]);

  const visible = [
    testimonials[index % count],
    testimonials[(index + 1) % count],
    testimonials[(index + 2) % count],
  ];

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-24 overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div
        className="pointer-events-none absolute top-8 left-4 font-serif text-[8rem] leading-none text-[#1E4638]/5 select-none sm:text-[10rem]"
        aria-hidden
      >
        “
      </div>

      <div className="relative mx-auto max-w-6xl">
        <h2 className="text-center font-serif text-3xl font-bold text-[#1E4638] sm:text-4xl">
          What Our Clients Say
        </h2>

        <div
          className="relative mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="grid gap-5 md:grid-cols-3"
            >
              {visible.map((t) => (
                <article
                  key={`${t.name}-${t.quote.slice(0, 12)}`}
                  className="flex flex-col rounded-2xl border border-[#1E4638]/[0.06] bg-white p-6 shadow-[0_4px_6px_-1px_rgba(20,53,42,0.06),0_12px_32px_-8px_rgba(20,53,42,0.12)] sm:p-7"
                >
                  <span
                    className="font-serif text-4xl leading-none text-[#1E4638]/30"
                    aria-hidden
                  >
                    “
                  </span>
                  <p className="mt-2 flex-1 font-serif text-[15px] leading-relaxed text-[#1E4638]">
                    {t.quote}
                  </p>
                  <div className="mt-6 flex items-end justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1E4638] text-sm font-semibold text-white">
                        {t.initial}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#1E4638]">
                          {t.name}
                        </p>
                        <p className="text-xs text-[#6B6B6B]">{t.designation}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5" aria-label="5 star rating">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#C5A059] text-[#C5A059]"
                          aria-hidden
                        />
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => {
              const active = ((index % count) + count) % count === i;
              return (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    active ? "bg-[#1E4638]" : "bg-[#1E4638]/20"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
