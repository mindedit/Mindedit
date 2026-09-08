import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Info,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/918139831157";
const PHONE_HREF = "tel:+918139831157";
const EMAIL_HREF = "mailto:mindeditcare@gmail.com";
const ADDRESS =
  "MINDEDIT LLP, SNG Nagar, Mulluvila, Vadakkevila P.O, Kollam, Kerala - 691010";

const hours = [
  { service: "Adult Services", time: "9:00 AM – 6:00 PM" },
  {
    service: "Child Development Services",
    time: "9:00 AM – 5:30 PM",
    note: "By prior booking",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-[#1E4638] sm:text-4xl">
            Contact & Book Appointment
          </h2>
          <p className="mt-3 text-sm text-[#6B6B6B] sm:text-base">
            Reach us by phone, WhatsApp, or email. Please book in advance.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#1E4638]/[0.06] bg-white p-6 shadow-[0_4px_6px_-1px_rgba(20,53,42,0.06),0_12px_32px_-8px_rgba(20,53,42,0.12)] sm:p-8">
            <h3 className="font-serif text-xl font-bold text-[#1E4638]">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-[#5A5A5A]">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#A66B4A]" />
                <span>{ADDRESS}</span>
              </li>
              <li>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-3 transition-colors hover:text-[#1E4638]"
                >
                  <Phone size={18} className="text-[#A66B4A]" />
                  8139831157
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_HREF}
                  className="inline-flex items-center gap-3 transition-colors hover:text-[#1E4638]"
                >
                  <Mail size={18} className="text-[#A66B4A]" />
                  mindeditcare@gmail.com
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#1E4638] px-5 py-2.5 font-medium text-white transition-colors hover:bg-[#16352b]"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>

            <h3 className="mt-8 flex items-center gap-2 font-serif text-xl font-bold text-[#1E4638]">
              <Clock size={18} className="text-[#A66B4A]" />
              Working Hours
            </h3>
            <div className="mt-3 overflow-x-auto rounded-xl border border-[#1E4638]/10">
              <table className="w-full min-w-[280px] text-left text-sm text-[#1E4638]">
                <thead className="bg-[#F4F8F6]">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Service</th>
                    <th className="px-4 py-3 font-semibold">Hours</th>
                  </tr>
                </thead>
                <tbody>
                  {hours.map((row) => (
                    <tr key={row.service} className="border-t border-[#1E4638]/10">
                      <td className="px-4 py-3 align-top">
                        {row.service}
                        {row.note ? (
                          <span className="mt-0.5 block text-xs text-[#6B6B6B]">
                            {row.note}
                          </span>
                        ) : null}
                      </td>
                      <td className="px-4 py-3 align-top whitespace-nowrap">
                        {row.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-5 flex gap-3 rounded-xl border border-[#A66B4A]/25 bg-white p-4 text-sm text-[#1E4638]">
              <Info size={18} className="mt-0.5 shrink-0 text-[#A66B4A]" />
              <span>
                Book in advance.{" "}
                <strong>Payment required to confirm slot.</strong> Booking via
                phone or WhatsApp.
              </span>
            </p>
          </div>

          <div className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-[#1E4638]/[0.06] bg-white p-8 text-center shadow-[0_4px_6px_-1px_rgba(20,53,42,0.06),0_12px_32px_-8px_rgba(20,53,42,0.12)] sm:min-h-[360px]">
            <MapPin size={36} className="text-[#A66B4A]" aria-hidden />
            <p className="mt-3 font-serif text-lg font-bold text-[#1E4638]">
              Google Map
            </p>
            <p className="mt-2 max-w-xs text-sm text-[#6B6B6B]">
              Map embed coming soon — Google Maps link not yet provided.
            </p>
            <p className="mt-4 max-w-sm text-xs text-[#8A8A8A]">{ADDRESS}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
