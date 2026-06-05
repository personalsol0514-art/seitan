import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Pain from "@/components/Pain";
import About from "@/components/About";
import WhyNatural from "@/components/WhyNatural";
import PhotoStrip from "@/components/PhotoStrip";
import Therapist from "@/components/Therapist";
import Voice from "@/components/Voice";
import Price from "@/components/Price";
import Access from "@/components/Access";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Pain />
        <About />
        <WhyNatural />
        <PhotoStrip />
        <Therapist />
        <Voice />
        <Price />
        <Access />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
