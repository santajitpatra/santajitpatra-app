import AboutInfo from "@/components/AboutInfo";
import DownloadCV from "@/components/DownloadCV";
import Header from "@/components/Header";
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
      <Header
        title="About"
        bg='url("https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")'
      />
      <MaxWidthWrapper className="max-w-screen-2xl">
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
