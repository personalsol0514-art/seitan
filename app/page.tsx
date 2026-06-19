import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Philosophy from "@/components/Philosophy";
import Pain from "@/components/Pain";
import Therapist from "@/components/Therapist";
import Flow from "@/components/Flow";
import Price from "@/components/Price";
import Voice from "@/components/Voice";
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
        <Philosophy />
        <Pain />
        <Therapist />
        <Flow />
        <Price />
        <Voice />
        <Access />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
