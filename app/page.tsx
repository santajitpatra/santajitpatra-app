import CTA from "@/components/CTA";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import MarqueeSection from "@/components/MarqueeSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ServicesOffer from "@/components/ServicesOffer";
import React from "react";

const Home = () => {
  return (
    <>
      <MaxWidthWrapper className="max-w-screen-2xl">
        <Hero />
        <Card />
        <MarqueeSection />
        <CTA />

        <h2 className="mb-12 text-center font-sans text-5xl font-bold text-cyan-500">
          My Services
        </h2>
        <ServicesOffer />

        <h2 className="mb-12 text-center font-sans text-5xl font-bold text-cyan-500">
          Contact Us
        </h2>
      </MaxWidthWrapper>
    </>
  );
};

export default Home;
