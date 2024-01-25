"use client";
import { homeConfig } from "@/config/home";
import { Button } from "../ui/button";
import "./style.css";
import React, { useState, useEffect, useRef } from "react";


const Slider: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const thumbnailBorderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Initialize carousel styles or animations on mount
    // (e.g., set initial widths, hide overflow, etc.)
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
  };


  return (
    <div className="carousel">
      {/* list item */}
      <div ref={sliderRef} className="list">
        {homeConfig.map((slide, index) => (
          <div className="item" key={slide.id}>
            <img src={slide.image} alt={slide.title} />
            <div className="content">
              <div className="title">{slide.title}</div>
              <div className="des">{slide.description}</div>
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
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
      {/* time running */}
      <div className="time" />
    </div>
  );
};

export default Slider;
