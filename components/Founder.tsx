"use client";

import { motion, type Variants } from "framer-motion";
import { founder, founders, otherFounders } from "@/data/clinic";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const cardClass =
  "overflow-hidden rounded-[1.5rem] border border-[#1E4638]/[0.06] bg-white shadow-[0_4px_6px_-1px_rgba(20,53,42,0.06),0_12px_32px_-8px_rgba(20,53,42,0.12)]";

function FounderGridCard({
  name,
  title,
  photoSrc,
}: {
  name: string;
  title: string;
  photoSrc: string;
}) {
  return (
    <motion.article variants={fadeIn} className={`flex h-full flex-col ${cardClass}`}>
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-[1.5rem] bg-[#F4F8F6]">
        <img
          src={photoSrc}
          alt={`${name}, Founder of MINDEDIT`}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>
      <div className="flex flex-1 flex-col items-center px-4 py-5 sm:px-5">
        <p className="text-center text-[10px] font-semibold tracking-[0.16em] text-[#A66B4A] uppercase sm:text-xs">
          Founder
        </p>
        <h3 className="mt-1.5 text-center font-serif text-base font-bold text-[#1E4638] sm:text-xl">
          {name}
        </h3>
        <p className="mt-1.5 text-center text-[12px] leading-snug font-medium text-[#2C2C2C] sm:text-sm">
          {title}
        </p>
      </div>
    </motion.article>
  );
}

export default function Founder({
  variant = "grid",
}: {
  variant?: "grid" | "profile";
}) {
  return (
    <section
      id="founder"
      className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {variant === "grid" ? (
          <>
            <div className="mx-auto max-w-2xl">
              <p className="text-center text-xs font-semibold tracking-[0.16em] text-[#A66B4A] uppercase">
                The people behind MINDEDIT
              </p>
              <h2 className="mt-2 text-center font-serif text-3xl font-bold text-[#1E4638] sm:text-4xl">
                Our Founders
              </h2>
            </div>

            <motion.div
              className="mt-10 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-3 sm:gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
            >
              {founders.map(({ name, title, photoSrc }) => (
                <FounderGridCard
                  key={name}
                  name={name}
                  title={title}
                  photoSrc={photoSrc}
                />
              ))}
            </motion.div>
          </>
        ) : (
          <>
            <motion.div
              className={`grid items-center gap-10 p-6 sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-10 ${cardClass} rounded-[1.75rem]`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
            >
              <motion.div
                variants={fadeIn}
                className="mx-auto w-full max-w-sm lg:mx-0"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#F4F8F6]">
                  <img
                    src={founder.photoSrc}
                    alt={`${founder.name}, Founder of MINDEDIT`}
                    className="absolute inset-0 h-full w-full object-cover object-top"
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
                  {founder.qualifications?.map((item) => (
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

            <motion.div
              className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
            >
              {otherFounders.map(({ name, title, photoSrc }) => (
                <motion.article
                  key={name}
                  variants={fadeIn}
                  className={`flex flex-col items-center gap-4 p-5 text-center sm:p-6 ${cardClass}`}
                >
                  <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-[#F4F8F6]">
                    <img
                      src={photoSrc}
                      alt={`${name}, Founder of MINDEDIT`}
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-center text-xs font-semibold tracking-[0.16em] text-[#A66B4A] uppercase">
                      Founder
                    </p>
                    <h3 className="mt-1.5 text-center font-serif text-xl font-bold text-[#1E4638] sm:text-2xl">
                      {name}
                    </h3>
                    <p className="mt-1.5 text-center text-sm font-medium text-[#2C2C2C] sm:text-[15px]">
                      {title}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
