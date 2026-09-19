import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions – MINDEDIT",
  description: "Terms of use for the MINDEDIT website and clinic bookings.",
};

export default function TermsPage() {
  return (
    <div className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <nav className="flex items-center gap-2 text-sm text-[#6B7A73]">
          <Link href="/" className="transition-colors hover:text-[#1E4638]">
            Home
          </Link>
          <span aria-hidden>/</span>
          <span className="font-medium text-[#1E4638]">Terms & Conditions</span>
        </nav>
        <h1 className="mt-6 font-serif text-4xl font-bold text-[#1E4638]">
          Terms & Conditions
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-[#4A5A53]">
          This website is for information and appointment enquiries. Booking a
          consultation does not create an emergency service — if you or someone
          else is in immediate danger, contact local emergency services.
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-[#4A5A53]">
          Appointments are confirmed after payment as stated on the Contact
          page. A complete terms document will replace this summary when the
          clinic finalises its legal text. For questions, email{" "}
          <a
            href="mailto:mindeditcare@gmail.com"
            className="font-medium text-[#1E4638] underline"
          >
            mindeditcare@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
