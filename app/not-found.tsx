import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-4 py-20 text-center">
      <p className="text-xs font-semibold tracking-[0.2em] text-[#A66B4A] uppercase">
        404
      </p>
      <h1 className="mt-3 font-serif text-4xl font-bold text-[#1E4638]">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-center text-sm leading-relaxed text-[#4A5A53]">
        That address does not exist on this site. Go back to the homepage to
        continue.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-[#1E4638] px-6 text-sm font-medium text-white hover:bg-[#16352b]"
      >
        Back to Home
      </Link>
    </div>
  );
}
