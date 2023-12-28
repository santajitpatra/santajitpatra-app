import Hero from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const Home = () => {
  return (
    <>
      <MaxWidthWrapper className="max-w-screen-2xl">
        <Hero />
      </MaxWidthWrapper>
    </>
  );
};

export default Home;
