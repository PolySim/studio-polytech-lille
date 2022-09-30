import React from "react";
import { NavBar } from "src/styled";

export default function NavBarView(): JSX.Element {
  return (
    <NavBar>
      <div>
        <a href="#">Home</a>
        <a href="#">Acceuil</a>
      </div>
      <div onClick={() => {}}>Connection</div>
    </NavBar>
  );
}
