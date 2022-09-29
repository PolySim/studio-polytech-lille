import React from "react";
import { ImageHome } from "src/styled";

export default function ImageHomeView({
  numeroImage,
}: {
  numeroImage: number;
}): JSX.Element {
  return (
    <ImageHome>
      <img src={require(`./img${numeroImage}.jpeg`)} alt="Acceuil" />
    </ImageHome>
  );
}
