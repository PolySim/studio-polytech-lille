import React, { useState, useEffect } from "react";
import getPafInfo from "src/API/getPafInfo";
import { PAF } from "src/styled";
import { PafInfoType } from "src/type";
import ListArticleView from "src/container/PAF/listArticle";

export default function PafView(): JSX.Element {
  const [pafInfo, setPafInfo] = useState<PafInfoType>([]);

  useEffect(() => {
    async function getData() {
      const data = await getPafInfo();
      setPafInfo((curr) => data);
    }

    getData();
  }, []);

  return (
    <PAF>
      <div>
        <p>
          Le PAF!, pour les initiés, est LE journal officiel de l’école, réalisé
          par une dizaine d’étudiants tous issus des différentes sections de
          l’école.
        </p>
        <p>
          Le journal est composé essentiellement des infos de l’école, qu’elles
          soient administratives, associatives, sportives, festives, ou tout
          simplement WTF.
        </p>
        <p>
          Le PAF! est en fait un outil de communication au sein de l’école, pour
          faire connaître aux élèves toutes les infos du BDE, de
          l’administration et des clubs, afin de leur permettre de ne jamais
          rien manquer de ce qui se passe dans l’école. Le seul moyen de le
          connaître est de le lire, et il parait lorsque l'actu devient chaude.
        </p>
        <p>
          Si tu te sens l’âme d’un journaliste, ou tout simplement si tu as
          plein d’infos originales, distrayantes ou qui pourraient captiver tous
          les Polytech Lillois, ou des idées de dingue, n’hésites pas à faire
          partie du journal, tous les articles sont les bienvenus ! Si tu veux
          devenir un membre actif ou un intervenant, contactes nous soit à
          l’adresse du PAF!
        </p>
      </div>
      <ListArticleView pafArticle={pafInfo} />
    </PAF>
  );
}
