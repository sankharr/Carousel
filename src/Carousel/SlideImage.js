import styled from "styled-components";
import "./SlideImage.css";
import TextLine from "./TextLine";

export const SlideImage = ({ imageData }) => {
  return (
    <>
      <img src={imageData.image} className="active" />
      <TextLine className="title" data={imageData.title} />
      <TextLine className="subtitle" data={imageData.subTitle} />
      {/* <p className="title">{imageData.title}</p>
      <p className="subtitle">{imageData.subTitle}</p> */}
    </>
  );
};
