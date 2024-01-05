"use client";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";


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
      >
        <FaWhatsapp className="text-white w-10 h-10" />
      </a>
    </div>
  );
};

export default Whatsapp;
