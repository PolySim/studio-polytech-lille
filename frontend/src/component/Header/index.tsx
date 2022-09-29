import React from "react";
import { Header } from "src/styled";

export default function HeaderView(): JSX.Element {
  return (
    <Header>
      <img src={require("./head-logo-studio.png")} alt="logo du studio" />
      <div>A LA UNE</div>
      <div>PHOTOS</div>
      <div>VIDEOS</div>
      <div>L'EQUIPE</div>
      <div>A PROPOS</div>
      <img src={require("./head-logo-paf.png")} alt="logo du PAF" />
    </Header>
  );
}
