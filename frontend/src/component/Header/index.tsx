import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "src/styled";

export default function HeaderView(): JSX.Element {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, [width]);

  return (
    <Header>
      {width > 930 ? (
        <Link to="/">
          <img src={require("./head-logo-studio.png")} alt="logo du studio" />
        </Link>
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
      {width > 930 ? (
        <img src={require("./head-logo-paf.png")} alt="logo du PAF" />
      ) : (
        <div>
          <p>PAF!</p>
        </div>
      )}
    </Header>
  );
}
