import Navigation from "@/components/Navigation";
import MobileCtaBar from "@/components/MobileCtaBar";
import Hero from "@/components/Hero";
import TrustBanner from "@/components/TrustBanner";
import Pain from "@/components/Pain";
import Improvement from "@/components/Improvement";
import Compare from "@/components/Compare";
import Symptoms from "@/components/Symptoms";
import Therapist from "@/components/Therapist";
import Flow from "@/components/Flow";
import Voice from "@/components/Voice";
import Price from "@/components/Price";
import Faq from "@/components/Faq";
import Access from "@/components/Access";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustBanner />
        <Pain />
        <Improvement />
        <Compare />
        <Symptoms />
        <Therapist />
        <Flow />
        <Voice />
        <Price />
        <Faq />
        <Access />
        <Cta />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
