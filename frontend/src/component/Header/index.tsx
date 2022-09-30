import React from "react";
import { Header } from "src/styled";

export default function HeaderView(): JSX.Element {
  return (
    <Header>
      {window.innerWidth > 1000 ? (
        <img src={require("./head-logo-studio.png")} alt="logo du studio" />
      ) : (
        <></>
      )}
      <div>
        <p>A LA UNE</p>
      </div>
      <div>
        <p>PHOTOS</p>
      </div>
      <div>
        <p>VIDEOS</p>
      </div>
      <div>
        <p>L'EQUIPE</p>
      </div>
      <div>
        <p>A PROPOS</p>
      </div>
      {window.innerWidth > 1000 ? (
        <img src={require("./head-logo-paf.png")} alt="logo du PAF" />
      ) : (
        <div>
          <p>PAF!</p>
        </div>
      )}
    </Header>
  );
}
