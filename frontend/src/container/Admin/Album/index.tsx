import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { EditAlbum } from "src/styled";
import { ListImageType } from "src/type";

export default function EditAlbumView(): JSX.Element {
  const { id } = useParams();
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [images, setImages] = useState<ListImageType>({
    album: ["", ""],
    images: [
      {
        id: 0,
        secure: 0,
      },
    ],
  });
  const titleRef: any = useRef();
  const dateRef: any = useRef();

  return (
    <EditAlbum>
      <div>
        <div>
          <div>
            <div>
              <svg
                x="0px"
                y="0px"
                viewBox="0 0 490.273 490.273"
                width={"20px"}
                height="20px"
              >
                <g>
                  <path d="M313.548,152.387l-230.8,230.9c-6.7,6.7-6.7,17.6,0,24.3c3.3,3.3,7.7,5,12.1,5s8.8-1.7,12.1-5l230.8-230.8     c6.7-6.7,6.7-17.6,0-24.3C331.148,145.687,320.248,145.687,313.548,152.387z" />
                  <path d="M431.148,191.887c4.4,0,8.8-1.7,12.1-5l25.2-25.2c29.1-29.1,29.1-76.4,0-105.4l-34.4-34.4     c-14.1-14.1-32.8-21.8-52.7-21.8c-19.9,0-38.6,7.8-52.7,21.8l-25.2,25.2c-6.7,6.7-6.7,17.6,0,24.3l115.6,115.6     C422.348,190.187,426.748,191.887,431.148,191.887z M352.948,45.987c7.6-7.6,17.7-11.8,28.5-11.8c10.7,0,20.9,4.2,28.5,11.8     l34.4,34.4c15.7,15.7,15.7,41.2,0,56.9l-13.2,13.2l-91.4-91.4L352.948,45.987z" />
                  <path d="M162.848,467.187l243.5-243.5c6.7-6.7,6.7-17.6,0-24.3s-17.6-6.7-24.3,0l-239.3,239.5l-105.6,14.2l14.2-105.6     l228.6-228.6c6.7-6.7,6.7-17.6,0-24.3c-6.7-6.7-17.6-6.7-24.3,0l-232.6,232.8c-2.7,2.7-4.4,6.1-4.9,9.8l-18,133.6     c-0.7,5.3,1.1,10.6,4.9,14.4c3.2,3.2,7.6,5,12.1,5c0.8,0,1.5-0.1,2.3-0.2l133.6-18     C156.748,471.587,160.248,469.887,162.848,467.187z" />
                </g>
              </svg>
            </div>
            <div>{id ? "Modifier " : "Créer "}un album</div>
          </div>

          <div>
            <div>Album photos</div>
            <div>
              <div>Titre</div>
              <input
                defaultValue={title}
                type="text"
                placeholder="Indiquez le titre"
                ref={titleRef}
              />
            </div>
            <div>
              <div>Date</div>
              <input defaultValue={date} type="date" ref={dateRef} />
            </div>
            <div>
              <div
                onClick={() => {
                  setTitle((curr) => titleRef.current.value);
                  setDate((curr) => dateRef.current.value);
                }}
              >
                Enregistrer
              </div>
              <div
                onClick={() => {
                  titleRef.current.value = title;
                  dateRef.current.value = date;
                }}
              >
                Annuler
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <svg
                x="0px"
                y="0px"
                viewBox="0 0 246.027 246.027"
                width={"20px"}
                height="20px"
              >
                <path d="M242.751,196.508L143.937,25.358c-4.367-7.564-12.189-12.081-20.924-12.081c-8.735,0-16.557,4.516-20.924,12.081  L3.276,196.508c-4.368,7.564-4.368,16.596,0,24.161s12.189,12.081,20.924,12.081h197.629c8.734,0,16.556-4.516,20.923-12.08  C247.119,213.105,247.118,204.073,242.751,196.508z M123.014,204.906c-8.672,0-15.727-7.055-15.727-15.727  c0-8.671,7.055-15.726,15.727-15.726s15.727,7.055,15.727,15.726C138.74,197.852,131.685,204.906,123.014,204.906z M138.847,137.68  c0,8.73-7.103,15.833-15.833,15.833s-15.833-7.103-15.833-15.833V65.013c0-4.142,3.358-7.5,7.5-7.5h16.667  c4.143,0,7.5,3.358,7.5,7.5V137.68z" />
              </svg>
            </div>
            <div>Informations</div>
          </div>
          <div>
            <div>Indication pour l'export Lightroom</div>
            <div>
              <div>- Paramètres de fichier : Limiter la taille à 500K</div>
              <div>
                - Dimension de l'image
                <div>
                  Redimensionner la largeur et la hauteur : 1500 x 1500 pixels
                </div>
                <div>Résolution: 240 pixels par pouce</div>
              </div>
              <div>
                - Application d'un filigrane
                <div>Image: celle-ci</div>
                <div>Opacité: 100</div>
                <div>Taille: proportionnel, 14</div>
                <div>Position: en bas à droite</div>
              </div>
            </div>
            <div>Notes</div>
            <div>
              <div>
                - Les photos apparaîtrons dans l'album dans l'ordre dans
                lesquelles elles ont été envoyées. Si vous envoyé plusieurs
                photo d'un coup, les photos les plus lourdes arriveront en
                dernier.
              </div>
              <div>
                - Les photos sont par défaut sécurisées, c'est à dire que seuls
                les élèves connecté pourront les voirs. Pensez à rendre public
                les photos où n'apparissent ni alcool, mousse ou élément pouvant
                dégrader l'image de l'école.
              </div>
              <div>- Pensez à choisir une photo de couverture publique .</div>
              <div>
                - Toute suppression de photo est faite sans préavis et est
                définitive, soyez prudent
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </EditAlbum>
  );
}
