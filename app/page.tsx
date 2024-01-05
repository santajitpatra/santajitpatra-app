import CTA from "@/components/CTA";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import MarqueeSection from "@/components/MarqueeSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ServicesOffer from "@/components/ServicesOffer";
import Whatsapp from "@/components/Whatsapp";

const Home = () => {
  return (
    <>
      <MaxWidthWrapper className="max-w-screen-2xl">
        <Hero />
        <Card />
        <MarqueeSection />
        <CTA />
        <h2 className="mb-12 text-center font-sans text-5xl font-bold bg-gradient-to-r from-cyan-700 to-cyan-400 bg-clip-text text-transparent">
          Services Offered
        </h2>
        <ServicesOffer />
        <h2 className="mb-12 text-center font-sans text-5xl font-bold bg-gradient-to-r from-cyan-700 to-cyan-400 bg-clip-text text-transparent">
          Contact Us
        </h2>
        <ContactForm />
      </MaxWidthWrapper>
      <Whatsapp />
    </>
  );
};

export default Home;
