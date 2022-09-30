import React from "react";
import { ImageHome } from "src/styled";

export default function ImageHomeView({
  numeroImage,
  imageAsset,
}: {
  numeroImage: number;
  imageAsset: number;
}): JSX.Element {
  //   const newPosition = (position: number, asset: number): number => {
  //     if (position + asset === 4) {
  //       return position < asset ? -1 : 5;
  //     } else {
  //       return asset;
  //     }
  //   };

  return (
    <ImageHome
      style={{
        transform: `translateX(${-100 * (imageAsset - 1)}%)`,
      }}
    >
      <img src={require(`./img${numeroImage}.jpeg`)} alt="Acceuil" />
    </ImageHome>
  );
}
