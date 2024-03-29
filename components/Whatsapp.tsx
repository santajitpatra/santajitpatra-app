"use client";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

const Whatsapp = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        handleShow(false);
      });
    };
  }, []);

  return (
    <div
      className={cn(
        show &&
          "m-auto flex w-14 h-14 z-10 fixed bottom-7 right-7 bg-green-500 rounded-full shadow-lg overflow-hidden transition-transform duration-200 TA whatsapp_transform"
      )}
    >
      <a
        href="https://wa.me/+918509625715"
        className=" m-auto "
        target="_blank"
        rel="noreferrer"
        aria-label="Contact Us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={cn(show && "icon icon-tabler icon-tabler-brand-whatsapp")}
          width="42"
          height="42"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
          <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
        </svg>
      </a>
    </div>
  );
};

export default Whatsapp;
