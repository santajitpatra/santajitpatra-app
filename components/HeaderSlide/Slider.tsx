"use client";
import { homeConfig } from "@/config/home";
import { Button } from "../ui/button";
import "./style.css";
import React, { useState, useEffect, useRef } from "react";

const Slider: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const thumbnailBorderRef = useRef<HTMLDivElement | null>(null);
  // Add your variable declarations here
  const timeRunning = 7000;
  const timeAutoNext = 10000;
  let runTimeOut: NodeJS.Timeout;
  let runNextAuto: NodeJS.Timeout;

  useEffect(() => {
    // Initialize carousel styles or animations on mount
    // (e.g., set initial widths, hide overflow, etc.)
    let autoSlideInterval = startAutoSlide();

    return () => {
      clearInterval(autoSlideInterval);
    };
  }, []);

  const handleNextClick = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % homeConfig.length);
    showSlider("next");
  };

  const handlePrevClick = () => {
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex - 1 + homeConfig.length) % homeConfig.length
    );
    showSlider("prev");
  };

  const startAutoSlide = () => {
    return setInterval(() => {
      handleNextClick();
    }, timeAutoNext);
  };

  const handleManualInteraction = () => {
    // Clear the existing timeout and interval when the user interacts manually
    clearTimeout(runTimeOut);
    clearInterval(runNextAuto);

    // Add your logic for resetting timers or stopping automatic slide change here
  };

  const showSlider = (type: "next" | "prev") => {
    const sliderDom = sliderRef.current;
    const thumbnailBorderDom = thumbnailBorderRef.current;

    if (sliderDom && thumbnailBorderDom) {
      if (type === "next") {
        // Move first slide to the end of the slider
        sliderDom.appendChild(sliderDom.firstChild!);
        thumbnailBorderDom.appendChild(thumbnailBorderDom.firstChild!);
        // Apply "next" class for animations or styling
        sliderDom.classList.add("next");
      } else if (type === "prev") {
        // Move last slide to the beginning of the slider
        sliderDom.insertBefore(sliderDom.lastChild!, sliderDom.firstChild);
        thumbnailBorderDom.insertBefore(
          thumbnailBorderDom.lastChild!,
          thumbnailBorderDom.firstChild
        );
        // Apply "prev" class for animations or styling
        sliderDom.classList.add("prev");
      }
    }
    // Clear the existing timeout and interval when the user interacts manually
    clearTimeout(runTimeOut);
    clearInterval(runNextAuto);

    // Start a new timeout for hiding the "next" or "prev" class after a certain time
    runTimeOut = setTimeout(() => {
      sliderDom?.classList.remove("next");
      sliderDom?.classList.remove("prev");
    }, timeRunning);

    // Start a new interval for automatic slide change
    runNextAuto = startAutoSlide();
  };

  return (
    <div className="carousel" onMouseEnter={handleManualInteraction}>
      {/* list item */}
      <div ref={sliderRef} className="list">
        {homeConfig.map((slide, index) => (
          <div className="item" key={slide.id}>
            <img src={slide.image} alt={slide.title} />
            <div className="content">
              <div className="title text-cyan-400">
                {slide.title}
              </div>
              <div className="des text-slate-200">{slide.description}</div>
              <div className="buttons">
                <Button className="btn-primary">SEE MORE</Button>
                <Button className="btn-primary">SUBSCRIBE</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* list thumnail */}
      <div ref={thumbnailBorderRef} className="thumbnail">
        {homeConfig.map((slide) => (
          <div className="item" key={slide.id}>
            <img src={slide.image} alt={slide.title} />
            <div className="content">
              <div className="title font-medium ">{slide.title}</div>
            </div>
          </div>
        ))}
      </div>
      {/* next prev */}
      <div className="arrows">
        <button id="prev" onClick={handlePrevClick}>
          Prev
        </button>
        <button id="next" onClick={handleNextClick}>
          Next
        </button>
      </div>
      {/* time running */}
      <div className="time" />
    </div>
  );
};

export default Slider;
