"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, UserRound } from "lucide-react";

export type TherapistCardProps = {
  name: string;
  designation: string;
  qualification: string;
  yearsExperience: string;
  tags?: string[];
  photoSrc?: string;
  photoAlt?: string;
  placeholder?: boolean;
};

const WHATSAPP_URL =
  "https://wa.me/918139831157?text=Hi%20MINDEDIT%2C%20I%27d%20like%20to%20book%20a%20consultation.";

const cardClass =
  "flex h-full flex-col overflow-hidden rounded-2xl border border-[#1E4638]/[0.06] bg-white shadow-[0_4px_6px_-1px_rgba(20,53,42,0.06),0_12px_32px_-8px_rgba(20,53,42,0.12)]";

export default function TherapistCard({
  name,
  designation,
  qualification,
  yearsExperience,
  tags = [],
  photoSrc,
  photoAlt,
  placeholder = false,
}: TherapistCardProps) {
  if (placeholder) {
    return (
      <article className={cardClass}>
        <div className="relative aspect-[4/3] bg-[#F4F8F6]">
          <div className="flex h-full w-full items-center justify-center text-[#1E4638]/25">
            <UserRound size={56} strokeWidth={1.25} aria-hidden />
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-serif text-lg font-bold text-[#1E4638]/40">
            Coming Soon
          </h3>
          <p className="mt-1 text-sm text-[#1E4638]/35">Psychologist profile</p>
          <p className="mt-auto pt-5 text-xs text-[#1E4638]/30">
            Details to follow
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className={cardClass}>
      <div className="relative aspect-[4/3] bg-[#F4F8F6]">
        {photoSrc ? (
          <Image
            src={photoSrc}
            alt={photoAlt ?? name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-lg font-bold text-[#1E4638]">{name}</h3>
        <p className="mt-1 text-sm font-medium text-[#2C2C2C]">{designation}</p>
        <p className="mt-1 text-xs text-[#6B6B6B]">{qualification}</p>
        <p className="mt-1 text-xs text-[#8A8A8A]">{yearsExperience}</p>

        {tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-[#F4F8F6] px-2.5 py-1 text-[11px] font-medium text-[#2C2C2C] ring-1 ring-[#1E4638]/[0.06]"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <Link
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-[#1E4638] transition-colors hover:text-[#A66B4A]"
        >
          Book Consultation
          <ArrowRight size={15} aria-hidden />
        </Link>
      </div>
    </article>
  );
}
