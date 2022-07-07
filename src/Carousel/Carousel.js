import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Carousel.css";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { SlideImage } from "./SlideImage";

const url = "http://localhost:3600/api/carousel?slides=7";

export default function Carousel({ Slides, infinite }) {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(0);
  let length = data.length;


  const fetchHandler = async () => {
    return await axios.get(url).then((res) => res.data);
  };

  const nextSlide = () => {
    if (infinite === "true")
      setCurrent(current === length - 1 ? 0 : current + 1);
    else {
      if (current !== length - 1) setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (infinite === "true")
      setCurrent(current === 0 ? length - 1 : current - 1);
    else {
      if (current !== 0) setCurrent(current - 1);
    }
  };

  useEffect(() => {
    fetchHandler()
      .then((res) => {
        if (Slides < res.length) setData(res.slice(0, Slides));
        else setData(res);
      })
      .then(() => {
        console.log("data => ", data);
        setCurrent(0);
      });
  }, [Slides]);

  return (
    <div className="StyledSlider">
      {data.map((slide, index) => (
        <div key={index}>
          {Slides !== "1" && (
            <FaChevronLeft className="left-arrow" onClick={prevSlide} />
          )}
          {Slides !== "1" && (
            <FaChevronRight className="right-arrow" onClick={nextSlide} />
          )}
          {index === current && <SlideImage imageData={slide} />}
        </div>
      ))}
    </div>
  );
}
