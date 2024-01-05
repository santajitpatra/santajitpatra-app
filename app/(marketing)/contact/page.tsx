import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Map from "@/components/Map";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Whatsapp from "@/components/Whatsapp";

const page = () => {
  return (
    <>
      <Header
        title="Contact"
        bg='url("https://images.unsplash.com/photo-1611746869696-d09bce200020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")'
      />
      <MaxWidthWrapper className="max-w-screen-2xl">
        <ContactForm />
      </MaxWidthWrapper>
      <Map />
      <Whatsapp />
    </>
  );
};

export default page;
