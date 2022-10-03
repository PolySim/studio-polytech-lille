import React from "react";
import { Goal } from "src/styled";

export default function GoalView(): JSX.Element {
  return (
    <Goal>
      <div>
        <h2>Nos objectifs</h2>
        <h4>Le Studio, pourquoi?</h4>
      </div>
      <div>
        <p>
          Le club « Le Studio » de Polytech Lille naquit en 2007. En un mot,
          c’est LE club photo-vidéo de l’école. Nous nous proposons de couvrir
          les temps forts de la vie de l’école au travers de reportages photos
          ou vidéos. Le réflex et la caméra sont nos outils privilégiés et nous
          disposons désormais d’un matériel de qualité pour réaliser nos
          projets.
        </p>
        <p>
          Chaque année, nous présentons sous forme de journaux télévisés (JT)
          les deux temps forts de la vie étudiante à Polytech : le mois
          d'Intégration et les Campagnes BDE. Les projections dans l'école de
          ces JT sont devenues au fil des années des moments incontournables de
          la vie associative. Ces JT mélangent reportages lancés par de
          véritables faux journalistes, publicités et création originales sur un
          ton décalé et jovial.
        </p>
        <p>
          Notre activité ne se limite pas seulement à ces deux moments phares.
          Nous participons également à de nombreux concours photo et vidéo
          d’envergures régionales ou nationales. Ces diverses participations
          sont l’occasion pour nous améliorer en scénarisation, actoring,
          cadrage, postproduction. A noter qu’une équipe du Studio gagna au FF1J
          (Festival du Film d’1 Jour) de Montbéliard le prix du meilleur
          scénario en 2008 pour un court métrage nommé : « Vodka frappée à
          l’italienne ».
        </p>
        <p>
          Une grosse partie de notre activité est destinée à « l’interne », par
          la production de publicité pour les différents clubs de l’associatif
          ou la couverture des événements qu’ils organisent.
        </p>
        <p>
          Toutes nos productions sont consultables par les étudiants et
          centralisées sur ce site web.
        </p>
        <p>
          Enfin et avant toute chose, le Studio est un club – une bande de potes
          – dans lequel on prend du plaisir à jouer avec l’image sans se prendre
          au sérieux !
        </p>
      </div>
    </Goal>
  );
}
