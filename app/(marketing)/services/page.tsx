import Header from "@/components/Header";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Performance from "@/components/Performance";
import ServicesCTA from "@/components/ServicesCTA";
import ServicesOffer from "@/components/ServicesOffer";
import Whatsapp from "@/components/Whatsapp";

const page = () => {
  return (
    <div>
      <Header
        title="Services"
        bg='url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")'
      />
      <MaxWidthWrapper className="max-w-screen-2xl">
        <ServicesOffer />
      </MaxWidthWrapper>
      <ServicesCTA />
      <MaxWidthWrapper className="max-w-screen-2xl">
        <Performance />
      </MaxWidthWrapper>
      <Whatsapp />
    </div>
  );
};

export default page;
