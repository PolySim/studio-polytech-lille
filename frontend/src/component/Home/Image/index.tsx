import React from "react";
import { ImageHome } from "src/styled";

export default function ImageHomeView({
  numeroImage,
  imageAsset,
}: {
  numeroImage: number;
  imageAsset: number;
}): JSX.Element {
  return (
    <ImageHome
      style={{
        transform: `translateX(${-100 * (imageAsset - 1)}%)`,
      }}
    >
      <div>
        <img src={require(`./img${numeroImage}.jpeg`)} alt="Acceuil" />
      </div>
    </ImageHome>
  );
}
