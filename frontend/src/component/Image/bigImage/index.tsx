import React from "react";
import { BigImage } from "src/styled";

const cleAPI = process.env.REACT_APP_API_URL;

export default function BigImageView({
  images,
  imageView,
  setImageClick,
}: {
  images: {
    id: number;
    secure: number;
  }[];
  imageView: number;
  setImageClick: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  return (
    <BigImage style={{ transform: `translateX(${imageView * -100}vw)` }}>
      {images.map((image) => (
        <div key={image.id}>
          <img src={`${cleAPI}/getImage/${image.id}`} alt={`${image.id}`} />
        </div>
      ))}
    </BigImage>
  );
}
