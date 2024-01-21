import { FC } from "react";
import TechCard from "./Card/TechCard";

interface TechStackProps {}

const TechStack: FC<TechStackProps> = ({}) => {
  return (
    <div className="col-span-2 p-6 md:col-span-2 lg:col-span-5">
      <div className="font-medium mt-2 mb-12 font-sans text-4xl md:text-5xl bg-gradient-to-r from-cyan-700 to-cyan-400 bg-clip-text text-transparent">
        What I know
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
        <TechCard
          title="Frontend"
          classaName="bg-[#4f91f2]"
          tech={[
            "HTML",
            "CSS",
            "Tailwind",
            "Javascript",
            "Typescript",
            "React Js",
            "Next Js 13",
            "Vue Js",
          ]}
        />
        <TechCard
          title="Backend"
          classaName="bg-[#f37c36]"
          tech={["Node Js", "Express Js", "kafka", "Next Auth"]}
        />
        <TechCard
          title="Database"
          classaName="bg-[#e0558a]"
          tech={["MySql", "MongoDB", "PostgreSQL", "Redis"]}
        />
        <TechCard
          title="Devops"
          classaName="bg-[#10c0a2]"
          tech={["Docker", "GIT", "AWS", "CI/CD"]}
        />
        <TechCard
          title="Web hosting"
          classaName="bg-[#10c0a2]"
          tech={["AWS", "GCP", "Netlify", "Vercel", "Digital Ocean"]}
        />{" "}
        <TechCard
          title="Digital marketing"
          classaName="bg-[#10c0a2]"
          tech={[
            "SEO",
            "PPC advertising",
            "Social media marketing",
            "Content marketing",
            "Email marketing",
          ]}
        />
      </div>
    </div>
  );
};

export default TechStack;
