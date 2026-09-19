import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy – MINDEDIT",
  description: "How MINDEDIT handles personal information shared with the clinic.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <nav className="flex items-center gap-2 text-sm text-[#6B7A73]">
          <Link href="/" className="transition-colors hover:text-[#1E4638]">
            Home
          </Link>
          <span aria-hidden>/</span>
          <span className="font-medium text-[#1E4638]">Privacy Policy</span>
        </nav>
        <h1 className="mt-6 font-serif text-4xl font-bold text-[#1E4638]">
          Privacy Policy
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-[#4A5A53]">
          MINDEDIT treats all information shared with us as confidential. Session
          notes and contact details are used only to provide care and to manage
          appointments. We do not sell personal data. Disclosure happens only
          where it is legally required, such as a risk of serious harm.
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-[#4A5A53]">
          A full policy document will replace this summary once the clinic
          finalises its legal text. For questions, email{" "}
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
