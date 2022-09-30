import React from "react";
import { Footer } from "src/styled";

export default function FooterView(): JSX.Element {
  return (
    <Footer>
      <div>
        <p>Version</p>
        <p>Copyright @ 2007 - 2022 Le Studio Polytech Lille</p>
        <p>Tous droits reservés</p>
        <p>Mentions légales</p>
      </div>
      <div>
        <p>Contactez-nous</p>
        <p>L'histoire du studio</p>
        <p>Restons en contact</p>
        <p>Administration</p>
      </div>
      <div>
        <a href="#top">Le PAF!</a>
        <a href="https://www.polytech-reseau.org/">Polytech</a>
        <a href="http://www.polytech-lille.fr/">Polytech Lille</a>
        <a href="http://www.polytech-lille.fr/formation/a-decouvrir-egalement/la-vie-etudiante/">
          BDE de Polytech Lille
        </a>
      </div>
      <div>
        <a href="#top">Retour en haut</a>
      </div>
    </Footer>
  );
}
