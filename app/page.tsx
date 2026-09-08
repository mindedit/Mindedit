import HeroScene from "@/components/HeroScene";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Journey from "@/components/Journey";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <HeroScene />
      <About />
      <Founder />
      <Services />
      <Team />
      <Journey />
      <Testimonials />
      <CTABanner />
      <Gallery />
      <Contact />
    </>
  );
}
