import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Carousel.css";
import { SlideImage, StyledSlider } from "./SlideImage";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const url = "http://localhost:3600/api/carousel";

export default function Carousel({ Slides, infinite }) {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(0);
  const length = data.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const fetchHandler = async () => {
    return await axios.get(url).then((res) => res.data);
  };

  useEffect(() => {
    fetchHandler()
      .then((res) => {
        console.log("res => ", res);
        setData(res);

        // console.log("books => ",books)
      })
      .then(() => console.log("data => ", data));
  }, []);

  return (
    <StyledSlider>
      <FaChevronLeft className="left-arrow" onClick={prevSlide} />
      <FaChevronRight className="right-arrow" onClick={nextSlide} />
      {data.map((slide, index) => {
        return <div key={index}>{index === current && <div>
            <SlideImage src={slide.image} alt="" />
            <p>{slide.title}</p>
            <p>{slide.subTitle}</p>
            </div>}</div>;
      })}
    </StyledSlider>
  );
}
