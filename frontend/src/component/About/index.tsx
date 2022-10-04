import React from "react";
import { Link } from "react-router-dom";
import { About } from "src/styled";

export default function AboutView(): JSX.Element {
  return (
    <About>
      <div>
        <img src={require("./history.png")} alt="Logo History" />
        <div>
          <p>L'histoire</p>
          <Link to="/about/history">Suite</Link>
        </div>
      </div>
      <div>
        <img src={require("./contact.png")} alt="Contact us" />
        <div>
          <p>Contactez-nous</p>
          <Link to="/about/contact">Suite</Link>
        </div>
      </div>
      <div>
        <img src={require("./goal.png")} alt="Our goals" />
        <div>
          <p>Nos objectifs</p>
          <Link to="/about/goal">Suite</Link>
        </div>
      </div>
    </About>
  );
}
