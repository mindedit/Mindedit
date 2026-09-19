"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Calendar, ArrowRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/918139831157?text=Hi%20MINDEDIT%2C%20I%27d%20like%20to%20book%20a%20consultation.";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/psychologists", label: "Our Team" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1A3026]/5 bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8">
        <Link href="/" className="relative z-10 flex shrink-0 items-center gap-3">
          <Image
            src="/logo-transparent.png"
            alt="MINDEDIT"
            width={443}
            height={531}
            className="h-12 w-auto sm:h-16"
            style={{ width: "auto" }}
            priority
          />
          <span className="hidden text-[11px] font-medium leading-tight text-[#1A3026]/55 sm:block">
            Child Development Centre /
            <br />
            Mental Health 
            Centre
          </span>
        </Link>

        <ul className="hidden items-center gap-7 xl:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[14px] font-medium text-[#2C2C2C] transition-colors hover:text-[#1E4638]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-11 items-center justify-center gap-2 rounded-lg bg-[#1E4638] px-4 text-[13px] font-medium text-white transition-colors hover:bg-[#16352b] sm:inline-flex"
          >
            <Calendar size={16} aria-hidden />
            Book a Consultation
            <ArrowRight size={15} aria-hidden />
          </a>

          <button
            type="button"
            className="relative z-10 inline-flex items-center justify-center rounded-md p-2 text-[#1A3026] xl:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-black/5 bg-white xl:hidden">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2.5 font-medium text-[#1A3026]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#1E4638] px-4 py-3 text-sm font-medium text-white"
                onClick={() => setOpen(false)}
              >
                <Calendar size={16} aria-hidden />
                Book a Consultation
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
