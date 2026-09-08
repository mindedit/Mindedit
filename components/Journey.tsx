const steps = [
  {
    n: "1",
    title: "Choose a Psychologist",
    body: "Browse profiles and select the right expert for you.",
    color: "bg-[#1E4638]",
  },
  {
    n: "2",
    title: "Select Date & Time",
    body: "Pick a slot that fits your schedule, online or in-clinic.",
    color: "bg-[#A66B4A]",
  },
  {
    n: "3",
    title: "Confirm Appointment",
    body: "Book via phone or WhatsApp. Payment confirms your slot.",
    color: "bg-[#1E4638]",
  },
  {
    n: "4",
    title: "Attend Session",
    body: "Begin your journey in a safe, supportive space.",
    color: "bg-[#A66B4A]",
  },
];

export default function Journey() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-[#1E4638] sm:text-4xl">
            Your Journey to Better Mental Well-being
          </h2>
          <p className="mt-3 text-sm text-[#6B6B6B] sm:text-base">
            Simple steps to start your healing journey.
          </p>
        </div>

        <div className="relative mt-14">
          {/* Connector line */}
          <div
            className="absolute top-7 right-[12%] left-[12%] hidden h-px border-t border-dashed border-[#1E4638]/25 lg:block"
            aria-hidden
          />

          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step) => (
              <li key={step.n} className="relative flex flex-col items-center text-center">
                <span
                  className={`relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold text-white ${step.color}`}
                >
                  {step.n}
                </span>
                <h3 className="mt-5 text-[15px] font-semibold text-[#1A3026]">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[200px] text-sm leading-relaxed text-[#6B6B6B]">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
