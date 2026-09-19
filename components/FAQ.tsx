"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can book directly with us — send a WhatsApp message or call 8139831157, or email mindeditcare@gmail.com. Because every consultation is a scheduled slot, we ask that you book in advance rather than walking in, and the slot is confirmed once payment is received. When you contact us, let us know whether the appointment is for a child or an adult and whether you would prefer to meet online or at the clinic, and we will offer you the next suitable time.",
  },
  {
    question: "Do you offer online consultations?",
    answer:
      "Yes. Consultations are available both online and in person, so you can meet us from anywhere or visit the clinic at SNG Nagar, Mulluvila, Vadakkevila P.O, Kollam. Online sessions run for the same length as in-clinic ones and follow the same structure and confidentiality standards. Many people combine the two — coming in person when they can and continuing online when travel or work makes that difficult. If your care includes hands-on work such as occupational or speech therapy, we will advise which parts are best done at the clinic.",
  },
  {
    question: "How long does a session last?",
    answer:
      "Adult sessions run for 60 minutes and sessions for children run for 45 minutes. The shorter format for children reflects how long most can stay meaningfully engaged in focused work. Your first appointment covers a lot of ground, since it includes history taking and goal setting, and assessments sometimes need more than one sitting — if that applies to you, we will tell you in advance so you can plan your visit.",
  },
  {
    question: "What are your clinic hours?",
    answer:
      "Adult Services run from 9:00 AM to 6:00 PM, and Child Development Services from 9:00 AM to 5:30 PM by prior booking. Every session is a booked slot, so please contact us ahead of time rather than arriving without an appointment. If none of those times fit around school, work, or travel, message us anyway — we will look for a workable time, and online sessions often make scheduling easier.",
  },
  {
    question: "Is my information kept confidential?",
    answer:
      "Yes. What you share stays between you and your clinician, and your records are handled in line with professional ethical standards. The only exceptions are situations where disclosure is legally required, such as a risk of serious harm to you or to someone else. When we work with children, parents and guardians are kept informed about progress and plans while still respecting the child's trust. If you are ever unsure what will or will not be shared, ask at the start of your first session and we will explain it clearly.",
  },
  {
    question: "What age groups do you work with?",
    answer:
      "We work across the whole lifespan — children, adolescents, adults, couples, and families. For children this ranges from early developmental concerns through the school years; for adults it covers young adulthood through later life, whether you come on your own, with a partner, or as a family. Rather than applying one approach to everyone, care is matched to the stage of life in front of us. That is what \u201cevery mind, every age\u201d means in practice.",
  },
  {
    question: "Do I need a referral?",
    answer:
      "No. You can contact us and book directly, without a referral letter from a doctor, school, or anyone else. If you already have reports from a pediatrician, a school, or another clinician, do bring them — they give us helpful context — but nothing of the sort is required to get started. Where medical input would be useful, pediatric or psychiatric consultation can be arranged as part of your care.",
  },
  {
    question: "What concerns can I seek help for?",
    answer:
      "People come to us with emotional difficulties, stress, anxiety, low mood, behavioral challenges, developmental concerns, relationship and marital issues, parenting difficulties, academic and school-related concerns, and difficulties with addiction, among many others. You do not need a diagnosis or the right clinical words to reach out — if something has been affecting your daily life, sleep, studies, work, or relationships, that is reason enough. If we believe your needs would be better served elsewhere, we will say so honestly and help point you in the right direction.",
  },
  {
    question: "Do you provide assessments?",
    answer:
      "Yes — both psychological and developmental assessments, for all ages. They are used to understand things like developmental delays, learning and school difficulties, behavioral concerns, and emotional or cognitive functioning. An assessment typically involves structured activities or questionnaires, information from parents and teachers where relevant, and occasionally more than one sitting. You then receive the findings explained in plain language, together with clear recommendations for what should happen next.",
  },
  {
    question: "What services do you provide?",
    answer:
      "For children we offer developmental and psychological assessments, speech therapy, occupational therapy, behavior therapy, special education, school readiness support, parent guidance and training, individualized developmental intervention programs, and pediatric or psychiatric consultations. For adolescents, adults, couples, and families we offer psychological assessments, individual therapy and counselling, couple and family therapy, adolescent counselling, de-addiction interventions, stress management, emotional and behavioural support, psychotherapy, support for sexual well-being, and psychiatric consultations. Alongside clinical work we run school mental health programs, awareness sessions, and parenting workshops, as well as corporate services such as employee assistance programs and workplace wellness training. The Services page sets out every offering in full.",
  },
  {
    question: "Can parents be involved in child's therapy?",
    answer:
      "Yes — parent involvement is actively encouraged and guided, not merely permitted. Children spend far more time at home than in our sessions, so what happens between appointments matters enormously to their progress. Parent guidance and parent training are services in their own right, and you can expect regular updates on goals along with practical strategies to use in everyday routines. How much a parent sits in on the session itself depends on the child's age and what is being worked on, and we will agree that with you.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "It varies from person to person, and it is discussed openly during your consultation rather than decided in advance. Some concerns settle within a handful of sessions, while developmental intervention and long-standing difficulties usually call for a steadier course over time. After the first session your clinician will give you a realistic sense of how often to come and for roughly how long, and that plan is reviewed as you go — so you are never committed to an open-ended run of appointments.",
  },
  {
    question: "What should I expect in the first session?",
    answer:
      "The first session is about understanding you, not treating you. Your clinician will ask about your current concerns, relevant background and history, anything you have already tried, and your strengths and goals; for a child, this also covers developmental history and what parents have observed. Nothing is prescribed at you — the plan is built together towards the end, so you leave knowing what is being recommended and why. It is equally your opportunity to ask questions and see whether you feel comfortable with us.",
  },
  {
    question: "Do you conduct workshops/awareness programs?",
    answer:
      "Yes. We conduct school mental health programs, parenting workshops, community awareness sessions, and workplace training. Our founder has been associated with the Keeku Mental Health Campaign led by Hibi Eden MP and the \u201cMayangilla Keralam\u201d drug awareness initiative with Excise Minister M. Liju, alongside regular programs in schools and colleges. If your school, workplace, or community group would like a session, get in touch and we will shape it around your audience and the time you have available.",
  },
  {
    question: "Are psychiatric consultations available?",
    answer:
      "Yes, as part of integrated care. When medication or a medical opinion would genuinely help, psychiatric consultation is arranged alongside your therapy rather than handed off as a disconnected referral, so the people supporting you stay on the same page. Pediatric consultations are similarly available for children. Many people need no medication at all — it is considered only where it adds real value, and any decision is discussed with you first.",
  },
  {
    question: "What makes MINDEDIT unique?",
    answer:
      "MINDEDIT brings child development and adult mental health together under one roof, so a family does not have to visit different places for a child's therapy and a parent's counselling. Our care is multidisciplinary and evidence-based, drawing on psychology, speech therapy, occupational therapy, special education, and psychiatric input as each person requires. Just as importantly, our values — inclusion, empathy, growth, integrity, and impact — shape how the work feels: a safe, non-judgmental space where every person is understood, supported, and empowered.",
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
                  aria-controls={`faq-answer-${index}`}
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
                {/* Always rendered so answers stay indexable and findable in-page */}
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-[#1E4638]/[0.07] px-5 py-4 sm:px-6 sm:py-5">
                      <p className="text-sm leading-[1.75] text-[#5A5A5A]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
