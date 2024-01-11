import CardMap from "./CardMap";

const cardData = [
  {
    type: "Alpha",
    title: "Please Feel Free To Contact Us",
    description:
      "Need help with your online presence? Contact us for web development and digital marketing consultation.",
    button: "Contact Us",
    image:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    type: "Beta",
    title: "You Can Check Our Services Here",
    description:
      "Web design, development, SEO, social media marketing, and more. Let us help you grow your online presence.",
    button: "Our Services",
    image:
      "https://images.pexels.com/photos/374720/pexels-photo-374720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    type: "Gamma",
    title: "Discover Our Portfolio",
    description:
      "Discover our portfolio of web design and development projects. We are always looking for new projects.",
    button: "Our Portfolio",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    type: "Delta",
    title: "Discover Our Story: All About Us",
    description:
      "Maximize Your Business Potential with Our Professional Web Development and Digital Marketing Expertise",
    button: "About Us",
    image:
      "https://images.pexels.com/photos/5426403/pexels-photo-5426403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Card = () => {
  return (
    <div>
      <section className="py-20 ">
       
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-5 md:gap-6 p-5 sm:grid-cols-2 xl:grid-cols-4 overflow-y-hidden">
          {cardData.map(({ title, description, type, image, button }) => (
            <CardMap
              key={title}
              title={title}
              description={description}
              type={type}
              image={image}
              button={button}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Card;
