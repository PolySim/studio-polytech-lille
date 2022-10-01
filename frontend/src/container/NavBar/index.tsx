import React, { useContext } from "react";
import { NavBar } from "src/styled";
import { ConnectionContext } from "src/context";

export default function NavBarView(): JSX.Element {
  const { setConnection } = useContext(ConnectionContext);
  return (
    <NavBar>
      <div>
        <a href="#">Home</a>
        <a href="#">Acceuil</a>
      </div>
      <div
        onClick={() => {
          setConnection(true);
        }}
      >
        Connexion
      </div>
    </NavBar>
  );
}
