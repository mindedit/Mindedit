"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How do I book an appointment?",
    answer: "Via phone, WhatsApp, or email.",
  },
  {
    question: "Do you offer online consultations?",
    answer: "Yes, both online and in-person.",
  },
  {
    question: "How long does a session last?",
    answer: "Adult: 60 min · Child: 45 min.",
  },
  {
    question: "What are your clinic hours?",
    answer:
      "Adult Services: 9:00 AM–6:00 PM · Child Development Services: 9:00 AM–5:30 PM (by prior booking).",
  },
  {
    question: "Is my information kept confidential?",
    answer:
      "Yes, strict confidentiality per ethical standards, except where legally required.",
  },
  {
    question: "What age groups do you work with?",
    answer: "Children, adolescents, adults, couples, families.",
  },
  {
    question: "Do I need a referral?",
    answer: "No.",
  },
  {
    question: "What concerns can I seek help for?",
    answer:
      "Emotional difficulties, stress, anxiety, behavioural challenges, developmental concerns, relationship issues, parenting difficulties, academic concerns, and more.",
  },
  {
    question: "Do you provide assessments?",
    answer: "Yes, psychological and developmental assessments for all ages.",
  },
  {
    question: "What services do you provide?",
    answer:
      "We provide Child Development services (assessments, speech therapy, OT, behavior therapy, special education, school readiness, parent guidance, and more) and Mental Health Services for adults, adolescents, couples, and families (therapy, counselling, de-addiction, stress management, psychotherapy, and psychiatric consultations), plus General and Corporate programs. See the Services page for the full list.",
  },
  {
    question: "Can parents be involved in child's therapy?",
    answer: "Yes, encouraged and guided.",
  },
  {
    question: "How many sessions will I need?",
    answer: "Varies; discussed during consultation.",
  },
  {
    question: "What should I expect in the first session?",
    answer:
      "Understanding concerns, background, strengths, goals; plan built together.",
  },
  {
    question: "Do you conduct workshops/awareness programs?",
    answer: "Yes — schools, parenting, community, workplace.",
  },
  {
    question: "Are psychiatric consultations available?",
    answer: "Yes, as part of integrated care.",
  },
  {
    question: "What makes MINDEDIT unique?",
    answer:
      "Inclusive, evidence-based, multidisciplinary care across all ages in a safe, compassionate space.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-[#1E4638] sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-[#6B6B6B] sm:text-base">
            Clear answers to help you take the next step with confidence.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-[#1E4638]/[0.06] bg-white shadow-[0_4px_6px_-1px_rgba(20,53,42,0.06),0_12px_32px_-8px_rgba(20,53,42,0.10)]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggle(index)}
                  className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span className="text-sm font-semibold text-[#1E4638] sm:text-[15px]">
                    {faq.question}
                  </span>
                  <span className="mt-0.5 shrink-0 text-[#A66B4A]" aria-hidden>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-[#5A5A5A] sm:px-6">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
