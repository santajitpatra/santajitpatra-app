import Header from "@/components/Header";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PortfolioCTA from "@/components/PortfolioCTA";
import Project from "@/components/Project";
import Whatsapp from "@/components/Whatsapp";
import projectDB from "@/projectdb";

const page = () => {
  return (
    <div>
      <Header
        title="Portfolio"
        bg='url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")'
      />
      <MaxWidthWrapper className="max-w-screen-2xl">
        <div className="container my-24 px-6 mx-auto">
          <div className="flex flex-col ">
            {projectDB.map(
              ({
                title,
                description,
                name,
                about,
                image,
                button,
                buttonSource,
              }) => (
                <Project
                  key={title}
                  title={title}
                  description={description}
                  name={name}
                  about={about}
                  image={image}
                  button={button}
                  buttonSource={buttonSource}
                />
              )
            )}
          </div>
        </div>
      </MaxWidthWrapper>
      <PortfolioCTA />
      <Whatsapp />
    </div>
  );
};

export default page;
