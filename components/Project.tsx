import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface ProjectProps {
  title: string;
  description: string;
  name: string;
  about: string;
  image?: string;
  button: string;
  buttonSource: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  name,
  about,
  image,
  button,
  buttonSource,
}) => {
  return (
    <div className="flex py-7 px-7 pr-4 border-b cursor-pointer transition duration-200 ease-out first:border-t bg-white rounded-3xl mb-10 flex-col sm:flex-row">
      <div className="relative">
        <Image
          src={
            image ||
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          }
          alt="Picture of the author"
          width={500}
          height={380}
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col flex-grow w-5/6 pl-5 mt-5 md:mt-0">
        <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-sm text-slate-400 mt-5 line-clamp-2">{description}</p>
        <h4 className="mt-6 text-lg font-medium text-cyan-500">{name}</h4>
        <p className="text-sm text-slate-400 mt-5">{about}</p>
        <div className="border-b w-10 pt-2" />
        <div className="flex justify-between md:justify-end items-end pt-12 flex-col sm:flex-row">
          <Button className="rounded-full" asChild>
            <Link href={button} className="btn-primary">
              See Project
            </Link>
          </Button>
          <Button className="rounded-full" asChild>
            <Link href={buttonSource} className="btn-primary">
              source code
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Project;
