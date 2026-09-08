"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { founder } from "@/data/clinic";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const qualifications = founder.qualifications;

export default function Founder() {
  return (
    <section
      id="founder"
      className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="grid items-center gap-10 rounded-[1.75rem] border border-[#1E4638]/[0.06] bg-white p-6 shadow-[0_4px_6px_-1px_rgba(20,53,42,0.06),0_12px_32px_-8px_rgba(20,53,42,0.12)] sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div variants={fadeIn} className="mx-auto w-full max-w-sm lg:mx-0">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="/founder.jpg"
                alt="Fia F. Shaji, Founder of MINDEDIT"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 28rem"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <p className="text-xs font-semibold tracking-[0.16em] text-[#A66B4A] uppercase">
              Founder
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[#1E4638] sm:text-4xl">
              {founder.name}
            </h2>
            <p className="mt-2 text-base font-medium text-[#2C2C2C]">
              {founder.title}
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[#5A5A5A] sm:text-[15px]">
              {qualifications.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A66B4A]"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
