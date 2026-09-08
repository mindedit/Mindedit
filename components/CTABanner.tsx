import Image from "next/image";
import { ArrowRight, Lock } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/918139831157?text=Hi%20MINDEDIT%2C%20I%27d%20like%20to%20book%20a%20consultation.";

export default function CTABanner() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 overflow-hidden rounded-[2rem] bg-[#F4EDE3] px-6 py-8 sm:px-10 lg:flex-row lg:gap-10 lg:px-12 lg:py-8">
        {/* Brain mark watermark */}
        <div
          className="pointer-events-none absolute -right-4 bottom-0 hidden h-[150%] w-40 opacity-30 lg:block xl:w-48"
          aria-hidden
        >
          <Image
            src="/cta-logo-mark.png"
            alt=""
            fill
            className="object-contain object-center"
            sizes="200px"
          />
        </div>

        <div className="relative h-28 w-36 shrink-0 sm:h-32 sm:w-44 lg:-mb-8 lg:-ml-4 lg:h-36 lg:w-48">
          <Image
            src="/cta-plant.png"
            alt=""
            fill
            className="object-contain object-bottom"
            sizes="220px"
            aria-hidden
          />
        </div>

        <div className="relative min-w-0 flex-1 text-center lg:text-left">
          <h2 className="font-serif text-2xl font-bold text-[#1E4638] sm:text-[1.75rem]">
            Ready to Take the First Step?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-center text-sm leading-relaxed text-[#5A5A5A] lg:mx-0 lg:text-justify">
            We’re here to support your journey toward a healthier, more balanced
            life — with care you can trust.
          </p>
        </div>

        <div className="relative flex shrink-0 flex-col items-center gap-2.5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#1E4638] px-7 text-[14px] font-medium text-white transition-colors hover:bg-[#16352b]"
          >
            Book a Consultation Now
            <ArrowRight size={16} aria-hidden />
          </a>
          <p className="inline-flex items-center gap-1.5 text-xs text-[#6B6B6B]">
            <Lock size={12} className="text-[#1E4638]" aria-hidden />
            Your privacy is our priority.
          </p>
        </div>
      </div>
    </section>
  );
}
