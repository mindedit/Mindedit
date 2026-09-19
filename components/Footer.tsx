import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/psychologists", label: "Our Team" },
  { href: "/resources", label: "Resources" },
  { href: "/#gallery", label: "Blogs" },
  { href: "/contact", label: "Contact Us" },
];

const serviceLinks = [
  { href: "/services#child-development", label: "Child Development" },
  { href: "/services#mental-health", label: "Mental Health Services" },
  { href: "/services#mental-health", label: "Couple & Family Therapy" },
  { href: "/services#child-development", label: "Assessments" },
  { href: "/services#general", label: "General Programs" },
  { href: "/services#corporate", label: "Corporate Wellness" },
];

const infoLinks = [
  { href: "/resources#faq", label: "FAQ" },
  { href: "/contact", label: "Client Portal Login" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy-policy", label: "Refund Policy" },
];

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.174 2.097 15.943 2 14.643 2 11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.5v-7l6.2 3.5-6.2 3.5z" />
    </svg>
  );
}

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M6.94 8.5H3.75V21h3.19V8.5zM5.34 3C4.22 3 3.3 3.93 3.3 5.06c0 1.12.91 2.05 2.04 2.05h.02c1.13 0 2.05-.93 2.05-2.05C7.4 3.93 6.48 3 5.34 3zM21 21h-3.19v-6.6c0-1.57-.56-2.64-1.96-2.64-1.07 0-1.71.72-1.99 1.42-.1.25-.13.59-.13.94V21H10.54s.04-10.8 0-11.92h3.19v1.69c.42-.65 1.18-1.58 2.88-1.58 2.1 0 3.68 1.38 3.68 4.34V21z" />
    </svg>
  );
}

const social = [
  {
    href: "https://www.facebook.com/share/18KzQgE4C7/?mibextid=wwXIfr",
    label: "Facebook",
    Icon: FacebookIcon,
  },
  {
    href: "https://www.instagram.com/_mindedit",
    label: "Instagram",
    Icon: InstagramIcon,
  },
  {
    href: "https://www.youtube.com/@the_mindedit",
    label: "YouTube",
    Icon: YoutubeIcon,
  },
  { href: "#", label: "LinkedIn", Icon: LinkedInIcon },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-white text-[#1E4638]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:gap-8 lg:px-8">
        <div className="lg:col-span-1">
          <Image
            src="/logo-transparent.png"
            alt="MINDEDIT"
            width={443}
            height={531}
            className="h-16 w-auto"
            style={{ width: "auto" }}
          />
          <p className="mt-1 text-xs font-medium text-[#1E4638]/60">
            Psychological Clinic
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#5A5A5A]">
            Rewriting every mind, every age — with compassionate, evidence-based
            care.
          </p>
          <div className="mt-5 flex gap-2">
            {social.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href === "#" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1E4638] text-white transition-opacity hover:opacity-80"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-serif text-base font-bold">Quick Links</h3>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-sm text-[#5A5A5A] transition-colors hover:text-[#1E4638]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-base font-bold">Our Services</h3>
          <ul className="mt-4 space-y-2.5">
            {serviceLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-sm text-[#5A5A5A] transition-colors hover:text-[#1E4638]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-base font-bold">Information</h3>
          <ul className="mt-4 space-y-2.5">
            {infoLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-sm text-[#5A5A5A] transition-colors hover:text-[#1E4638]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-base font-bold">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-[#5A5A5A]">
            <li>
              <a
                href="tel:+918139831157"
                className="inline-flex items-center gap-2 hover:text-[#1E4638]"
              >
                <Phone size={15} className="text-[#1E4638]" />
                8139831157
              </a>
            </li>
            <li>
              <a
                href="mailto:mindeditcare@gmail.com"
                className="inline-flex items-center gap-2 hover:text-[#1E4638]"
              >
                <Mail size={15} className="text-[#1E4638]" />
                mindeditcare@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/XdY6FYKwEyqiPxH36"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 hover:text-[#1E4638]"
              >
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#1E4638]" />
                <span>
                  SNG Nagar, Mulluvila, Vadakkevila P.O, Kollam, Kerala - 691010
                </span>
              </a>
            </li>
            <li className="flex gap-2">
              <Clock size={15} className="mt-0.5 shrink-0 text-[#1E4638]" />
              <span>
                Adult: 9AM–6PM
                <br />
                Child: 9AM–5:30PM
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#1E4638]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-center text-xs text-white/85 sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p>
            © {new Date().getFullYear()} MindEdit Psychological Clinic. All
            rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5">
            Designed with care for your well-being.
            <Heart
              size={12}
              className="fill-white/80 text-white/80"
              aria-hidden
            />
          </p>
        </div>
      </div>
    </footer>
  );
}
