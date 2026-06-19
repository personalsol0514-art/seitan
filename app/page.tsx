import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Badges from "@/components/Badges";
import About from "@/components/About";
import Pain from "@/components/Pain";
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
        <Badges />
        <About />
        <Pain />
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
