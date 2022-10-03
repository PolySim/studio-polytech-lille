import React, { useContext } from "react";
import { NavBar } from "src/styled";
import { ConnectionContext } from "src/context";
import { Link } from "react-router-dom";

export default function NavBarView(): JSX.Element {
  const { setConnection } = useContext(ConnectionContext);
  return (
    <NavBar>
      <div>
        <Link to="/">Home</Link>
        <Link to="/">Acceuil</Link>
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
