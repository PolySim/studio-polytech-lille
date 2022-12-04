import React, { useState } from "react";
import { ListImage } from "src/styled";
import BigImageView from "src/component/Image/bigImage";
import CrossView from "src/component/Image/cross";
import ArrowView from "src/component/Image/arrow";

const cleAPI = process.env.REACT_APP_API_URL;

export default function JustListImageView({
  images,
}: {
  images: {
    id: number;
    secure: number;
  }[];
}): JSX.Element {
  const [imageClick, setImageClick] = useState<boolean>(false);
  const [imageView, setImageView] = useState<number>(-1);

  return (
    <>
      <ListImage>
        {images.map((image, i) => (
          <div
            key={image.id}
            onClick={() => {
              setImageClick(true);
              setImageView((curr) => i);
            }}
          >
            <img
              src={`${cleAPI}/getImage/${image.id}`}
              alt={image.id.toString()}
            />
          </div>
        ))}
      </ListImage>
      {imageClick ? (
        <BigImageView
          imageView={imageView}
          images={images}
          setImageClick={setImageClick}
        />
      ) : (
        <></>
      )}
      {imageClick ? <CrossView setImageClick={setImageClick} /> : <></>}
      {imageClick ? (
        <ArrowView
          imageView={imageView}
          numberImage={images.length}
          setImageView={setImageView}
        ></ArrowView>
      ) : (
        <></>
      )}
    </>
  );
}
