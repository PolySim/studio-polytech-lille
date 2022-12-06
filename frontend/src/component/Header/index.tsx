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
        <Link to="/news">A LA UNE</Link>
      </div>
      <div>
        <Link to="/album">PHOTOS</Link>
      </div>
      <div>
        <Link to="/videos">VIDEOS</Link>
      </div>
      <div>
        <Link to="/team">L'EQUIPE</Link>
      </div>
      <div>
        <Link to="/about">A PROPOS</Link>
      </div>
      {width > 930 ? (
        <Link to="/paf">
          <img src={require("./head-logo-paf.png")} alt="logo du PAF" />
        </Link>
      ) : (
        <div>
          <Link to="/paf">PAF!</Link>
        </div>
      )}
    </Header>
  );
}
