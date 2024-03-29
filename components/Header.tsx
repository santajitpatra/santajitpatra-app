import React from "react";

interface HeaderProps {
  bg: string;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ bg, title }) => {
  return (
    <div>
      <section className="">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage: `${bg}`,
            height: 500,
            objectFit: "cover",
          }}
        />
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="text-center">
            <div
              className="block rounded-3xl px-6 py-12 md:py-16 md:px-12"
              style={{
                marginTop: "-170px",
                background: "hsla(221, 65%, 11%, 0.25)",
                backdropFilter: "blur(30px)",
              }}
            >
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 text-white">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
