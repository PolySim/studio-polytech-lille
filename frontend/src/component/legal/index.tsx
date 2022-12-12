import React from "react";
import { Legal } from "src/styled";
import { Link } from "react-router-dom";

export default function LegalView(): JSX.Element {
  return (
    <Legal>
      <h2>Mentions légales</h2>
      <div>
        <h3>Réalisation</h3>
        <div>
          <p>
            Le présent site internet a été réalisé par les personnes / entités
            suivantes :
          </p>
          <div>
            <a href="https://ecomtet.com/">Édouard Comtet </a> : idées
            originales, code original et design
          </div>
          <div>
            <a href="#">Le Club Info</a> (
            <a href="https://geoffrey.frogeye.fr/"> Geoffrey Preud'homme</a> ) :
            mises à jour et maintenance
          </div>
          <div>
            <a href="https://www.instagram.com/simondesdevises/">
              Simon Desdevises{" "}
            </a>{" "}
            : Refonte et maintenance
          </div>
          <div>
            Les photos et les vidéos ont été réalisées par{" "}
            <Link to="/team"> les membres du Studio</Link>.
          </div>
          <div>
            Les journaux ont été réalisés par les membres du{" "}
            <Link to="paf">PAF</Link>.
          </div>
        </div>
        <h3>Vos droits</h3>
        <div>
          Les éléments du présent site, les photos, les vidéos, les journaux, et
          textes sont la propriété exclusive du club "Le Studio" du BDE Polytech
          Lille.
        </div>
        <div>
          Toute reproduction est interdite sans autorisation au préalable de
          l'auteur. Tous droits reservés.
        </div>
        <div>© Copyright 2007 - 2022 Le Studio Polytech Lille</div>
      </div>
    </Legal>
  );
}
