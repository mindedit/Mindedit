import type { Metadata } from "next";
import { Playfair_Display, Inter, Caveat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const heading = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-heading",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const script = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-script",
});

const siteDescription =
  "MINDEDIT is a centre for mental health and child development, dedicated to supporting individuals across all stages of life. It promotes growth, resilience, and well-being through compassionate, evidence-based care, for every mind, every age.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mindeditcare.com"),
  title: "MINDEDIT – Mental Health & Child Development Centre, Kollam",
  description: siteDescription,
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "MINDEDIT – Mental Health & Child Development Centre, Kollam",
    description: siteDescription,
    type: "website",
    locale: "en_IN",
    siteName: "MINDEDIT",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "MINDEDIT — Rewriting Every Mind, Every Age",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MINDEDIT – Mental Health & Child Development Centre, Kollam",
    description: siteDescription,
    images: ["/Logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} ${script.variable} h-full`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-white font-sans text-[#1A3026] antialiased">
        <Navbar />
        <main className="w-full flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
