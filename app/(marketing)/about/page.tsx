import AboutInfo from "@/components/AboutInfo";
import DownloadCV from "@/components/DownloadCV";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TechStack from "@/components/TechStack";
import Whatsapp from "@/components/Whatsapp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const page = () => {
  return (
    <>
      <MaxWidthWrapper className="max-w-screen-2xl">
        <Hero />
        <h2 className="pt-32 pb-16 text-center font-sans text-4xl md:text-7xl font-bold bg-gradient-to-r from-cyan-700 to-cyan-400 bg-clip-text text-transparent">
          Know Me Better: Ask Away!
        </h2>
        <AboutInfo />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-5 md:pb-10 mt-5 md:p-0">
          <TechStack />
        </div>
        <DownloadCV />
      </MaxWidthWrapper>

      <Whatsapp />
    </>
  );
};

export default page;
