import Navigation from "@/components/Navigation";
import MobileCtaBar from "@/components/MobileCtaBar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Pain from "@/components/Pain";
import Compare from "@/components/Compare";
import Therapist from "@/components/Therapist";
import Flow from "@/components/Flow";
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
        <TrustBar />
        <Pain />
        <Compare />
        <Therapist />
        <Flow />
        <Voice />
        <Price />
        <Access />
        <Cta />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
