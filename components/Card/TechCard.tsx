import { cn } from '@/lib/utils';
import { FC } from 'react';

interface TechCardProps {
  title: string;
  classaName: string;
  tech: string[];
}

const TechCard: FC<TechCardProps> = ({ title, classaName, tech }) => {
  return (
    <div className="flex-1 flex flex-col gap-4 bg-[#0f2146] p-4 rounded-md shadow-lg">
      <div className="text-white font-medium text-lg tracking-wider">
        {title}
      </div>
      <div className="flex flex-wrap gap-2">
        {tech.map((item, i) => (
          <div
            key={i}
            className={cn(
              "rounded-md bg-[#0a162f] text-xs text-slate-400 p-2",
              item === "Tailwind" && "border border-blue-500/60",
              item === "Javascript" && "border border-yellow-500/60",
              item === "React Js" && "border border-blue-500/60",
              item === "Next Js 13" && "border border-black/60",
              item === "Node Js" && "border border-green-500/60",
              item === "Express Js" && "border border-gray-500/60",
              item === "MySql" && "border border-blue-500/60",
              item === "MongoDB" && "border border-emerald-500/60",
              item === "PostgreSQL" && "border border-blue-500/60",
              item === "Redis" && "border border-red-500/60",
              item === "SEO" && "border border-yellow-500/60",
              item === "Docker" && "border border-blue-500/60",
              item === "Social media marketing" && "border border-blue-500/60",
              item === "GIT" && "border border-orange-500/60",
              item === "Content marketing" && "border border-purple-500/60",
              item === "AWS" && "border border-yellow-500/60"
            )}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCard;
