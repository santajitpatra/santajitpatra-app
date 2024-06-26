"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { Skeleton } from "./ui/skeleton";
import { Images } from "@/constants";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="sm:my-auto mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="mb-6 max-w-xl">
              <div>
                <p className="bg-teal-accent-400 mb-2 inline-block rounded-full px-3 text-xs font-semibold uppercase tracking-wider text-cyan-500">
                  New and improved
                </p>
              </div>
              <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-snug tracking-tight sm:text-5xl sm:leading-snug text-white">
                Santajit&apos;s
                <span className="my-1 inline-block rounded bg-white dark:bg-white px-2 text-violet-600">
                  Work
                </span>
                <span className="text-cyan-500">Place</span>
              </h2>
              <p className="text-base text-slate-400">
                Elevate your online presence with my expert web development
                services. From stunning designs to custom functionality,
                I&apos;ll help you stand out in a crowded digital world. Let Me
                help you achieve your online goals and drive results with a
                website that engages and converts.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <Button className="rounded-full" asChild>
                <Link href="/" className="btn-primary">
                  Go To Home
                </Link>
              </Button>
              <Button className="rounded-full" asChild>
                <Link href="/contact" aria-label="" className="btn-primary">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative shadow-3xl shadow-cyan-700 rounded-3xl lg:w-1/2">
            {isLoading ? (
              <Skeleton className="h-56 w-full rounded-3xl object-cover shadow-lg sm:h-96 bg-slate-400" />
            ) : (
              <>
                <Image
                  className="h-56 w-full rounded-3xl object-cover shadow-lg sm:h-96"
                  src={Images.seox}
                  alt="#"
                  width={500}
                  height={500}
                />
                <Link
                  href="https://www.youtube.com/channel/UCvUNvI17WbxTd0MFu5uleHw"
                  aria-label="Play Video"
                  className=" group absolute inset-0 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-30 rounded-3xl transition-colors duration-300 hover:bg-opacity-10"
                >
                  <div className="flex h-16 w-16 transform items-center justify-center rounded-full bg-gray-100 shadow-2xl transition duration-300 group-hover:scale-110">
                    <svg
                      className="w-10 text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                    </svg>
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
