import React, { useState } from "react";
import { History } from "src/styled";

export default function HistoryView(): JSX.Element {
  const [history, setHistory] = useState<number>(1);
  const onTooggleHistory = (numberArticle: number) => {
    if (history === numberArticle) {
      setHistory(0);
    } else {
      setHistory(numberArticle);
    }
  };

  const textStyle = {
    select: {
      padding: "15px",
      maxHeight: "300px",
      overflowY: "scroll",
    },

    notSelect: {
      maxHeight: "0px",
    },
  };

  return (
    <History>
      <div>
        <div>
          <div onClick={() => onTooggleHistory(1)}>
            <strong>La génève</strong> le 01/12/2008 par Edouard Comtet
          </div>
          <div style={history === 1 ? textStyle.select : textStyle.notSelect}>
            <p>
              Au commencement, il y avait le Rien. Polytech était vide, sans
              sens ni but, sans direction ni matière. Le monde n’était pas
              encore créé, on ne distinguait que la coquille vide qui allait
              l’accueillir. Du Chaos naquit deux Êtres Suprêmes, Thomas et
              Davis. Pendant longtemps, le Thomas Suprême fut l'Essence
              Supérieur. Mais le Davis, imparfait, rongé par la jalousie,
              détrôna son Maître et pris le pouvoir. Et le Davis Suprême déclara
              (entre deux bières) : “Ch'ti qui crache in l'air, cha r'qué su sin
              bec" Le Davis Suprême pris de la terre, la modela, et lui insufla
              la Vie. Et le Davis Suprême créa Adri à son image. Il vit que
              c’était bon. Mais Adri s’ennuyait, seul dans ce monde vide. Dans
              toute sa bonté, il prit une culotte et lui insulfa la Vie. Et le
              Davis Suprême créa Clem à son image. Ca, par contre, il s‘en
              mordit les doigts pendant un bout de temps ! Clem et Adri se
              baladèrent dans le jardin d'Eden librement, innocents. Un jour, le
              Davis apparut en songe à Clem, et lui dit : "Tout ceci est à vous.
              Vous pouvez boire et manger à votre guise. Vous pouvez profiter de
              tous les coins de cet établissement merveilleux, car vous en avez
              les Clefs. Mais vous ne rentrerez point dans cette pièce" Car le
              Mal y règnait, et le Créateur ne voulait pas que sa création fût
              corrompue. La porte interdite était nimbée d'une lueur rouge,
              percant le noir absolu des alentours, et une fragrance délétère
              repoussait toute Vie hors de portée.
            </p>
            <br />
            <p>
              Clem se réveilla, et, fautive et pêcheresse par nature, pris Adri
              par la main, et lui fit ouvrir la porte sans le prévenir du Divin
              avertissement. Quand celui-ci enclencha le verrou, les cieux se
              déchirèrent dans un fracas de fin du monde, la tempête gronda et
              le sol se craquela. Des Enfers, les morts se réveillèrent et
              peuplèrent Polytech, les professeurs furent libérés de leurs
              prisons démoniaques dans lesquelles ils avaient été bannis par le
              Thomas des éons auparavant... Et Davis les attendait de l'autre
              coté, une bière à la main, saoul comme cochon. "B'invenu au Club,
              les jeunes !"
            </p>
          </div>
        </div>
        <div>
          <div onClick={() => onTooggleHistory(2)}>
            <strong>La légende Pastorienne</strong> le 02/05/2011 par Edouard
            Comtet
          </div>
          <div style={history === 2 ? textStyle.select : textStyle.notSelect}>
            <p>
              L'Histoire est faite de Rois, de Héros et de Grandes Guerres. Elle
              est faite d'hommes vaillants qui, un jour, se levèrent contre
              l'oppression infâme de régimes autocratiques, gouvernés par des
              Nero et des Caligulae modernes. Il est des Noms qui resteront
              inscrits à jamais dans la Légende : Caesar, Charlemagne, Pastor…
              Les Ecritures selon Saint Bière annonçaient dans un futur lointain
              la création d'une Compagnie Divine qui se mettrait en quête de
              l'artéfact ultime, le JVCGY100E (prononcé
              Jivéçégé-ygrèque-çan-eu), reliques des temps les plus reculés, et
              qui permettait, dit-on, de capturer la réalité et de l'enfermer
              indéfiniment dans une boite. C'est en l'an de Grâce MMIX de ce
              temps que se dressèrent, fières et hauts, les Serviteurs
              Troublions de l'Union Ducals des Ingénieurs Occidentaux, ordre
              respecté de tous, en proclamant qu’il était temps de se lancer
              dans la Sainte Quête. A la tête de la compagnie, le chevalier de
              Pastor, qu’on disait sage et bon, Apollon parmi les mortels tant
              sa beauté rayonnait, savant en toute chose, de tel sorte qu’on lui
              prétendait le don d’omniscience ; assisté de son fidèle bras
              droit, Geoffroy de Fouquet, gentilhomme et fin bretteur et de Dame
              Marianne, Grande Duchesse de Gossip.
            </p>
            <p>
              Le groupe, emmené par son charismatique leader, brava de nombreux
              obstacles qui s’interposaient entre eux et la Sainte Relique :
              suppo de la Guilde des Professeurs, guerriers de l’empire Bédé
              Heux, envahisseurs Erasmus. A force de raquettes et de pillages,
              d’escarmouches à proximité de Montbéliard, d’assauts forcenés
              contre les banques du Bédé Heux, le STUDIO accumula richesses et
              fortunes, et se montra bientôt le garant de la majorité des
              trésors de Polytech, gardant jalousement en son sein une colossale
              collection d’objets de valeur et d’armes anciennes.
            </p>
            <p>
              Le chevalier de Pastor convoqua alors le ban, et commença alors la
              Première Croisade Pastorienne. Les troupes fraichement recrutées
              furent envoyées au front, et toute la Divine Compagnie se mit en
              route pour le Sud, vers la grande Toulouse, où la relique les
              attendaient. Après un an et demi de voyage, les Serviteurs avaient
              acquis gloire et richesses, maintes victoires militaires et
              diplomatiques, une renommée traversant Monts et Mers, mais
              surtout, l’Artefact Ultime, qui assurait un avenir prospère et
              lumineux pour le STUDIO. Le Chevalier de Pastor, sentant sa fin
              arrivée, adouba son jeune lad, non pas parce qu’il avait pitié de
              lui comme on le pensa, mais parce qu’il reconnu en lui l’âme d’un
              leader. Et bien qu’il fût Lorrain, l’Histoire retenut de Pierre le
              Biflé qu’il fût un bon successeur.
            </p>
          </div>
        </div>
        <div>
          <div onClick={() => onTooggleHistory(3)}>
            <strong>Pax Pestrusienne Aubrionam</strong> le 25/02/2012 par
            Edouard Comtet
          </div>
          <div style={history === 3 ? textStyle.select : textStyle.notSelect}>
            <p>
              La légende pastorienne fut une époque furieuse et chaotique. Si de
              ce chaos, l’Artefact Ultime fut tiré de l’antre pyrénéen, ce n’est
              qu’au prix de multiples batailles et de trop nombreuses pertes. Au
              début de la quête, la communauté de l’ANO (Artefact Numérique
              Odieux-visuel) fut créée et commença sa longue quête en réalisant
              JTs et vidéos avec les moyens dérisoires de cette époque troublée…
            </p>
            <p>
              Le temps et la rudesse des combats firent fondre l’effectif de
              cette fière communauté si bien qu’à l’aube de la victoire finale,
              les survivants des Champs du Pelennor hésitèrent à crier victoire.
              Il est vrai que la compagnie dût pleurer le départ de nombre de
              belles créatures qui peuplèrent alors les vertes prairies de
              Polytech. Ainsi quand le digne et valeureux Pierre prit les
              commandes, il dut s’appuyer sur une troupe resserrée mais que les
              épreuves et Dame Bibine avaient soudée : Justin le Maître des
              Effets, Sam Gamegie le Grand porteur des Ecriteaux Non Ecrits et
              Damoiselle Marinette Maîtresse des Bourses ! Mais que dire de leur
              glorieux Capitaine ? Dresser là un portrait de Pierre (le Grand
              Blond, disait-on) n’est point chose aisée tant les éloges
              dithyrambiques dont il fut l’objet semblèrent trop nombreuses pour
              être crédibles. Nous retiendrons donc seulement que sa hardiesse
              et son génie n’avaient d’égales que sa proverbiale modestie.
            </p>
            <p>
              Après cette période tourmentée, cette fine équipe eut la tâche de
              consolider l’empire bâti si laborieusement par le Chevalier Pastor
              ! Combien d’empires survécurent à leurs illustres créateurs par la
              faute d’une organisation basée sur la figure du Chef ! Le Studio
              n’allait donc pas suivre l’exemple d’Alexandre le Grand,
              Charlemagne ou Napoléon… L’équipe jeta donc les bases d’une
              administration autocratique qui produit les plus grands bienfaits
              pour les masses studieuses de Polytech…
            </p>
            <p>
              Tel Léonidas aux Thermopyles, la compagnie dut faire à la Guilde
              des Professeurs toujours en embuscade et à l’empire Bédé Heux aux
              visées impérialistes. Mais suivant le bon mot de Foch : « Mon aile
              droite est enfoncée. Mon aile gauche recule. Mon centre plie :
              situation excellente, j'attaque », le Studio attaqua. Par une
              ambitieuse opération photographique, les caisses furent à nouveau
              garnies (opération au cours de laquelle un petit grassouillet
              nommé Edouard s’illustra). De hauts faits d’armes et d’habiles
              mouvements diplomatiques assurèrent au STUDIO son indépendance qui
              produisit alors de nombreuses œuvres cinématographiques de premier
              plan. Ainsi la compagnie put mettre la main sur une arme d’une
              puissance encore inégalée : une grosse boite noire accompagnée de
              deux tableaux lumineux. Cette arme fut le parfait complément de
              l’Artefact Ultime.
            </p>
            <p>
              Au bout d’une année de commandement prospère et avisée (période
              que l’on nomme dorénavant PAX PETRUSIENNE AUBRIONAM), le valeureux
              Capitaine Pierre prit pour successeur un jeune grassouillet cité
              plus haut, Edouard aux mains d’argent. (Ce surnom lui fut donné
              car, parait-il, ce jeune homme en surcharge graisseuse avait
              quelques talents pour dénicher la Chope en soirée.) On eut tantôt
              entendu que le jeune parvenu n’aurait jamais le talent du
              valeureux Pierre. Mais là réside le propre des Grands Hommes,
              savoir reconnaître leurs égaux. Et ainsi Pierre adouba à son tour
              le jeune Edouard, tout grassouillet qu’il peut être, la conscience
              tranquille, sachant qu’il avait là un digne successeur. Cette
              période faste se prolongea même jusqu’à Montbéliard où les deux
              Capitaines ferraillèrent ensemble au nom béni du STUDIO.
            </p>
          </div>
        </div>
      </div>
    </History>
  );
}
