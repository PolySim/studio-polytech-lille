import React from "react";
import { Footer } from "src/styled";
import { Link } from "react-router-dom";

export default function FooterView(): JSX.Element {
  return (
    <Footer>
      <div>
        <p>Version</p>
        <p>Copyright @ 2007 - 2022 Le Studio Polytech Lille</p>
        <p>Tous droits reservés</p>
        <Link to="/legal">Mentions légales</Link>
      </div>
      <div>
        <Link to="/about/contact">Contactez-nous</Link>
        <Link to="/about/history">L'histoire du studio</Link>
        <a href="https://www.instagram.com/le_studio_lille/?hl=fr">Instagram</a>
        <Link to="/admin">Administration</Link>
      </div>
      <div>
        <Link to="/paf">Le PAF!</Link>
        <a href="https://www.polytech-reseau.org/">Polytech</a>
        <a href="http://www.polytech-lille.fr/">Polytech Lille</a>
        <a href="http://www.polytech-lille.fr/formation/a-decouvrir-egalement/la-vie-etudiante/">
          BDE de Polytech Lille
        </a>
      </div>
      <div>
        <a href="#top">Retour en haut</a>
        <div></div>
      </div>
    </Footer>
  );
}
