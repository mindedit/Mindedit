import Image from "next/image";

const galleryImages = [
  { src: "/gallery/placeholder-1.svg", alt: "Clinic space — photo coming soon" },
  { src: "/gallery/placeholder-2.svg", alt: "Therapy room — photo coming soon" },
  { src: "/gallery/placeholder-3.svg", alt: "Child development space — photo coming soon" },
  { src: "/gallery/placeholder-4.svg", alt: "Consultation area — photo coming soon" },
  { src: "/gallery/placeholder-5.svg", alt: "Waiting lounge — photo coming soon" },
  { src: "/gallery/placeholder-6.svg", alt: "Workshop space — photo coming soon" },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-[#1E4638] sm:text-4xl">
            Gallery
          </h2>
          <p className="mt-3 text-sm text-[#6B6B6B] sm:text-base">
            A glimpse into our calm, welcoming space — photos will be updated soon.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <li
              key={image.src}
              className="group overflow-hidden rounded-2xl border border-[#1E4638]/[0.06] bg-white shadow-[0_4px_6px_-1px_rgba(20,53,42,0.06),0_12px_32px_-8px_rgba(20,53,42,0.12)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
