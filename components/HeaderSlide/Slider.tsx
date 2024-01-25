'use client';
import { homeConfig } from "@/config/home";
import { Button } from "../ui/button";
import "./style.css";
// import "./index";


const Slider = () => {
  return (
    <div className="carousel">
      {/* list item */}

      <div className="list">
        {homeConfig.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="content">
              {/* <div className="author">{item.about}</div> */}
              <div className="title">{item.title}</div>
              {/* <div className="topic">{item.about}</div> */}
              <div className="des">{item.description}</div>
              <div className="buttons">
                <Button className="btn-primary">SEE MORE</Button>
                <Button className="btn-primary">SUBSCRIBE</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* list thumnail */}
      <div className="thumbnail">
        {homeConfig.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="content">
              <div className="title">{item.title}</div>
              {/* <div className="description">{item.description}</div> */}
            </div>
          </div>
        ))}
      </div>
      {/* next prev */}
      <div className="arrows">
        <button id="prev">&lt;</button>
        <button id="next">&gt;</button>
      </div>
      {/* time running */}
      <div className="time" />
    </div>
  );
};

export default Slider;
