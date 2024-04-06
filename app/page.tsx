import CTA from "@/components/CTA";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import MarqueeSection from "@/components/MarqueeSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ServicesOffer from "@/components/ServicesOffer";
import Whatsapp from "@/components/Whatsapp";
import HeaderSlide from "@/components/Slider/Slider";

const Home = () => {
  return (
    <>
      <HeaderSlide />
      <MaxWidthWrapper className="max-w-screen-2xl">
        <div className="my-20">
          <h2 className="mb-12 text-center font-sans text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-700 to-cyan-400 bg-clip-text text-transparent">
            Let&apos;s Discover Categories
          </h2>
          <Card />
        </div>
        <MarqueeSection />
        <div className="my-20">
          <CTA />
        </div>
        <h2 className="mb-12 text-center font-sans text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-700 to-cyan-400 bg-clip-text text-transparent">
          Services Offered
        </h2>
        <ServicesOffer />
        <h2 className="mb-12 text-center font-sans text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-700 to-cyan-400 bg-clip-text text-transparent">
          Contact Us
        </h2>
        <ContactForm />
      </MaxWidthWrapper>
      <Whatsapp />
    </>
  );
};

export default Home;
