import React from "react";
import Image from "next/image";
import webSvg from "@/public/svg/Web_devices.svg";

const servicesData = [
  {
    service: "Web Designing & Development",
    details:
      "Professional website creation with personalized design and coding.",
  },
  {
    service: "Digital Marketing Services",
    details:
      "Boost your online presence and drive sales through digital advertising.",
  },
  {
    service: "Graphic Design",
    details:
      "Eye-catching and effective graphic design solutions for your  brand.",
  },
  {
    service: "Virtual Assistant",
    details:
      "Streamline your workload with professional and efficient virtual assistance.",
  },
  {
    service: "Social Media Management",
    details:
      "Manage your social media profiles to reach your target audience and increase engagement.",
  },
];

const ServicesOffer = () => {
  return (
    <section>
      <div className="mx-auto grid max-w-lg gap-x-8 gap-y-12 px-4 py-4 md:py-20 md:max-w-screen-xl md:grid-cols-2 md:px-8 lg:grid-cols-3 overflow-y-hidden scrollbar-hide">
        <div className="p-12">
          <h2 className="text-2xl font-medium bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent">
            I HELP YOU TO
            <br />
            ACHIEVE YOUR GOALS
          </h2>
        </div>
        {servicesData.map((data) => {
          return (
            <div
              key={data.details}
              className="relative md:w-64 lg:w-64 xl:w-[22rem] xl:h-56 p-4 overflow-hidden bg-white shadow-lg rounded-2xl px-4 pt-14 pb-8 TA"
            >
              <Image
                alt="moto"
                src={webSvg}
                className="absolute w-40 h-40 mb-4 rounded-full -right-20 -bottom-8"
                width={500}
                height={500}
              />
              <div className="w-4/6">
                <p className="mb-2 text-2xl font-medium bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent">
                  {data.service}
                </p>
                <p className="text-sm text-slate-500">{data.details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesOffer;
