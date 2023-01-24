import React, { useContext } from "react";
import { NavBar } from "src/styled";
import { Link } from "react-router-dom";
import { ConnectionContext } from "src/context";

export default function NavBarView(): JSX.Element {
  const { iv } = useContext(ConnectionContext);
  return (
    <NavBar>
      {/* <div>
        <Link to="/">Home</Link>
        <Link to="/">Acceuil</Link>
      </div> */}
      <a href={`https://portail.polytech-lille.fr/le-studio/?r=${iv}`}>
        Connexion
      </a>
    </NavBar>
  );
}
