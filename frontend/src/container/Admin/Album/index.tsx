import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { EditAlbum } from "src/styled";

const cleAPI = process.env.REACT_APP_API_URL;

export default function EditAlbumView(): JSX.Element {
  const { id } = useParams();
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [images, setImages] = useState<{ id: number; secure: number }[]>([
    { id: 1, secure: 1 },
    { id: 2, secure: 0 },
    { id: 3, secure: 0 },
  ]);
  const [cover, setCover] = useState<number>(-1);
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

      <div>
        <div>
          <div>
            <svg
              x="0px"
              y="0px"
              viewBox="0 0 297 297"
              width={"20px"}
              height="20px"
            >
              <g>
                <path d="M268.338,64.67H203.56l-13.586-27.446c-1.667-3.368-5.101-5.499-8.858-5.499h-48.923c-3.758,0-7.19,2.131-8.857,5.499   L109.749,64.67H28.662C12.858,64.67,0,77.527,0,93.332v143.281c0,15.804,12.858,28.662,28.662,28.662h239.676   c15.804,0,28.662-12.858,28.662-28.662V93.332C297,77.527,284.142,64.67,268.338,64.67z M138.328,51.492h36.651l6.523,13.178   h-49.697L138.328,51.492z M268.338,84.437c4.905,0,8.896,3.99,8.896,8.896v20.261h-36.379   c-15.049-13.226-34.745-21.255-56.278-21.255c-21.534,0-41.232,8.029-56.28,21.255H19.767V93.332c0-4.905,3.99-8.896,8.896-8.896   H268.338z M184.576,244.056c-36.242,0-65.728-29.597-65.728-65.976s29.485-65.976,65.728-65.976   c36.239,0,65.724,29.597,65.724,65.976S220.815,244.056,184.576,244.056z M19.767,236.613V133.36h91.893   c-7.974,13.028-12.578,28.345-12.578,44.72c0,27.331,12.817,51.716,32.739,67.428H28.662   C23.757,245.508,19.767,241.518,19.767,236.613z M268.338,245.508h-31.009c19.922-15.712,32.737-40.097,32.737-67.428   c0-16.375-4.604-31.691-12.576-44.72h19.743v103.253C277.233,241.518,273.243,245.508,268.338,245.508z" />
                <path d="M184.576,127.988c-27.547,0-49.958,22.471-49.958,50.092s22.411,50.092,49.958,50.092   c27.545,0,49.955-22.471,49.955-50.092S212.121,127.988,184.576,127.988z M184.576,208.404c-16.648,0-30.191-13.604-30.191-30.324   s13.543-30.324,30.191-30.324c16.645,0,30.188,13.604,30.188,30.324S201.222,208.404,184.576,208.404z" />
              </g>
            </svg>
          </div>
          <div>Administrer un album</div>
        </div>
        <div>
          {images.map((image) => (
            <div key={image.id}>
              <img src={`${cleAPI}/getImage/${image.id}`} alt={`${image.id}`} />
              <div>
                <div>
                  <svg
                    x="0px"
                    y="0px"
                    viewBox="0 0 458.5 458.5"
                    width={"20px"}
                    height="20px"
                  >
                    <g>
                      <g>
                        <path d="M382.078,57.069h-89.78C289.128,25.075,262.064,0,229.249,0S169.37,25.075,166.2,57.069H76.421     c-26.938,0-48.854,21.916-48.854,48.854c0,26.125,20.613,47.524,46.429,48.793V399.5c0,32.533,26.467,59,59,59h192.508     c32.533,0,59-26.467,59-59V154.717c25.816-1.269,46.429-22.668,46.429-48.793C430.933,78.985,409.017,57.069,382.078,57.069z      M229.249,30c16.244,0,29.807,11.673,32.76,27.069h-65.52C199.442,41.673,213.005,30,229.249,30z M354.503,399.501     c0,15.991-13.009,29-29,29H132.995c-15.991,0-29-13.009-29-29V154.778c12.244,0,240.932,0,250.508,0V399.501z M382.078,124.778     c-3.127,0-302.998,0-305.657,0c-10.396,0-18.854-8.458-18.854-18.854S66.025,87.07,76.421,87.07h305.657     c10.396,0,18.854,8.458,18.854,18.854S392.475,124.778,382.078,124.778z" />
                        <path d="M229.249,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.715-15-15-15c-8.284,0-15,6.716-15,15v173.705     C214.249,385.607,220.965,392.323,229.249,392.323z" />
                        <path d="M306.671,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.716-15-15-15s-15,6.716-15,15v173.705     C291.671,385.607,298.387,392.323,306.671,392.323z" />
                        <path d="M151.828,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.716-15-15-15c-8.284,0-15,6.716-15,15v173.705     C136.828,385.607,143.544,392.323,151.828,392.323z" />
                      </g>
                    </g>
                  </svg>
                </div>
                <div>
                  {image.secure === 1 ? (
                    <svg
                      x="0px"
                      y="0px"
                      width={"20px"}
                      height="20px"
                      viewBox="0 0 591.6 591.6"
                    >
                      <path d="M540.6,224.4h-51v-30.6C489.6,86.904,402.696,0,295.8,0S102,86.904,102,193.8v30.6H51c-28.152,0-51,22.848-51,51v265.2    c0,28.152,22.848,51,51,51h489.6c28.152,0,51-22.848,51-51V275.4C591.6,247.248,568.752,224.4,540.6,224.4z M122.4,193.8    c0-95.676,77.724-173.4,173.4-173.4s173.4,77.724,173.4,173.4v30.6H122.4V193.8z M571.2,540.6c0,16.932-13.668,30.6-30.6,30.6H51    c-16.932,0-30.6-13.668-30.6-30.6V275.4c0-16.932,13.668-30.6,30.6-30.6h489.6c16.932,0,30.6,13.668,30.6,30.6V540.6z" />
                      <path d="M295.8,285.6c-29.376,0-56.1,18.36-66.708,45.9c-9.996,26.316-3.672,55.692,15.504,73.44v74.46    c0,18.156,9.792,35.088,25.5,44.268c7.752,4.488,16.524,6.732,25.5,6.732s17.748-2.448,25.5-6.732    c15.708-9.18,25.5-25.908,25.5-44.064v-74.46c19.176-17.748,25.704-47.124,15.504-73.44C351.9,303.96,325.176,285.6,295.8,285.6z     M330.48,392.088c-2.448,1.836-3.876,4.896-3.876,8.16v79.356c0,10.812-5.916,21.012-15.3,26.52c-9.384,5.304-21.216,5.304-30.6,0    c-9.384-5.508-15.3-15.504-15.3-26.52v-79.356c0-3.06-1.428-6.12-3.876-8.16c-15.096-11.832-20.604-33.66-13.056-53.448    c7.548-19.584,26.724-32.64,47.532-32.64c20.808,0,40.188,13.056,47.532,32.64C350.88,358.428,345.576,380.256,330.48,392.088z" />
                      <path d="M132.6,270.3H51c-2.856,0-5.1,2.244-5.1,5.1V357c0,2.856,2.244,5.1,5.1,5.1s5.1-2.244,5.1-5.1v-76.5h76.5    c2.856,0,5.1-2.244,5.1-5.1S135.456,270.3,132.6,270.3z" />
                    </svg>
                  ) : (
                    <svg
                      width={"20px"}
                      height="20px"
                      x="0px"
                      y="0px"
                      viewBox="0 0 459.292 459.292"
                    >
                      <g>
                        <g>
                          <path d="M359.078,172.256h-6.78v-49.603C352.299,55.022,297.276,0,229.646,0S106.992,55.022,106.992,122.653    c0,8.284,6.716,15,15,15h73.993c8.284,0,15-6.716,15-15c0-10.289,8.371-18.66,18.66-18.66c10.29,0,18.661,8.371,18.661,18.66    v49.603H100.214c-18.122,0-32.865,14.743-32.865,32.865v221.306c0,18.122,14.743,32.865,32.865,32.865h258.864    c18.122,0,32.864-14.743,32.864-32.865V205.121C391.943,186.999,377.2,172.256,359.078,172.256z M229.646,73.993    c-21.599,0-39.957,14.147-46.295,33.66h-45.145C145.394,63.669,183.661,30,229.646,30c51.089,0,92.653,41.564,92.653,92.653    v47.208h-43.992v-47.208C278.307,95.822,256.477,73.993,229.646,73.993z M361.943,426.426c0,1.58-1.285,2.865-2.864,2.865H100.214    c-1.58,0-2.865-1.285-2.865-2.865V205.121c0-1.58,1.285-2.865,2.865-2.865h258.864c1.579,0,2.864,1.285,2.864,2.865V426.426z" />
                        </g>
                      </g>
                    </svg>
                  )}
                </div>
                <div
                  style={{
                    backgroundColor: image.id === cover ? "#214e34" : "#70e000",
                  }}
                >
                  <svg
                    x="0px"
                    y="0px"
                    width="20px"
                    height="20px"
                    viewBox="0 0 606.365 606.366"
                  >
                    <g>
                      <path d="M547.727,144.345h-13.619v-13.618c0-32.059-26.08-58.14-58.139-58.14H58.64c-32.059,0-58.14,26.082-58.14,58.14v273.155     c0,32.058,26.082,58.14,58.14,58.14h13.618v13.618c0,32.059,26.082,58.14,58.14,58.14h417.327     c32.059,0,58.141-26.081,58.141-58.14V202.485C605.865,170.426,579.785,144.345,547.727,144.345z M563.025,475.639     c0,8.45-6.85,15.3-15.299,15.3H130.398c-8.45,0-15.3-6.85-15.3-15.3v-13.618v-21.42v-21.42V202.485c0-8.451,6.85-15.3,15.3-15.3     h360.87h21.42h21.42h13.619c8.449,0,15.299,6.85,15.299,15.3V475.639z M43.34,403.881V130.727c0-8.45,6.85-15.3,15.3-15.3     h417.329c8.449,0,15.299,6.85,15.299,15.3v13.618h-360.87c-32.058,0-58.14,26.082-58.14,58.14v216.696H58.641     C50.19,419.181,43.34,412.331,43.34,403.881z" />
                      <path d="M547.725,534.279H130.397c-32.334,0-58.64-26.306-58.64-58.64v-13.118H58.64c-32.334,0-58.64-26.306-58.64-58.64V130.727     c0-32.334,26.306-58.64,58.64-58.64h417.329c32.333,0,58.639,26.306,58.639,58.64v13.118h13.119     c32.333,0,58.639,26.306,58.639,58.64v273.154C606.365,507.973,580.06,534.279,547.725,534.279z M58.64,73.086     C26.857,73.086,1,98.944,1,130.727v273.155c0,31.782,25.857,57.64,57.64,57.64h14.118v14.118c0,31.782,25.857,57.64,57.64,57.64     h417.327c31.783,0,57.641-25.857,57.641-57.64V202.485c0-31.783-25.856-57.64-57.639-57.64h-14.119v-14.118     c0-31.783-25.856-57.64-57.639-57.64H58.64z M547.727,491.439H130.398c-8.712,0-15.8-7.088-15.8-15.8V202.485     c0-8.712,7.088-15.8,15.8-15.8h417.329c8.712,0,15.799,7.088,15.799,15.8v273.154     C563.525,484.351,556.438,491.439,547.727,491.439z M130.398,187.685c-8.161,0-14.8,6.64-14.8,14.8v273.154     c0,8.161,6.639,14.8,14.8,14.8h417.329c8.16,0,14.799-6.639,14.799-14.8V202.485c0-8.161-6.639-14.8-14.799-14.8H130.398z      M72.758,419.681H58.641c-8.712,0-15.801-7.088-15.801-15.8V130.727c0-8.712,7.088-15.8,15.8-15.8h417.329     c8.712,0,15.799,7.088,15.799,15.8v14.118h-361.37c-31.783,0-57.64,25.857-57.64,57.64V419.681z M58.64,115.926     c-8.161,0-14.8,6.639-14.8,14.8v273.155c0,8.16,6.64,14.8,14.801,14.8h13.118V202.485c0-32.334,26.306-58.64,58.64-58.64h360.37     v-13.118c0-8.161-6.639-14.8-14.799-14.8H58.64z" />
                    </g>
                    <g>
                      <path d="M502.035,427.5l-14.096-14.097l-68.252-68.252c-5.975-5.976-15.662-5.976-21.637,0l-38.783,38.782l-72.451-72.451     c-5.975-5.976-15.663-5.976-21.637,0L157.48,419.181l-8.32,8.319c-3.57,3.57-5.005,8.464-4.31,13.101     c0.469,3.124,1.904,6.132,4.31,8.537l8.656,8.655c2.281,2.281,5.104,3.688,8.054,4.228c1.827,0.334,3.702,0.334,5.528,0     c2.951-0.539,5.774-1.946,8.055-4.228l17.192-17.192l21.42-21.42l47.113-47.113c5.975-5.976,15.663-5.976,21.637,0l47.112,47.113     l21.42,21.42l17.193,17.192c2.281,2.281,5.104,3.688,8.055,4.228c1.826,0.334,3.701,0.334,5.527,0     c2.951-0.539,5.773-1.946,8.055-4.228l8.656-8.655c2.404-2.406,3.84-5.413,4.309-8.537c0.695-4.637-0.738-9.53-4.309-13.101     l-8.32-8.319l-4.953-4.954l19.307-19.309l24.264,24.263l21.42,21.42l17.191,17.192c2.156,2.155,4.797,3.529,7.57,4.129     c3.635,0.787,7.498,0.239,10.811-1.646c1.166-0.664,2.264-1.488,3.258-2.482l8.654-8.655c5.611-5.61,5.953-14.493,1.029-20.503     C502.742,428.245,502.4,427.866,502.035,427.5z" />
                      <path d="M383.359,462.772c-0.955,0-1.915-0.088-2.854-0.259c-3.164-0.578-6.04-2.088-8.318-4.366l-85.726-85.726     c-2.795-2.796-6.512-4.335-10.465-4.335s-7.67,1.539-10.465,4.335l-85.725,85.726c-2.277,2.278-5.154,3.788-8.318,4.366     c-1.877,0.342-3.83,0.342-5.708,0c-3.164-0.578-6.04-2.088-8.318-4.366l-8.656-8.655c-2.407-2.406-3.946-5.455-4.451-8.816     c-0.741-4.942,0.923-10,4.451-13.528l116.019-116.018c2.984-2.984,6.952-4.628,11.172-4.628s8.188,1.644,11.172,4.628     l72.098,72.098l38.43-38.429c2.984-2.984,6.951-4.628,11.172-4.628s8.188,1.644,11.172,4.628l82.348,82.349     c0.364,0.364,0.722,0.758,1.062,1.17c5.165,6.304,4.708,15.406-1.062,21.175l-8.654,8.655c-0.998,0.998-2.13,1.86-3.364,2.563     c-2.367,1.348-5.065,2.06-7.804,2.06c-0.001,0-0.001,0-0.001,0c-1.128,0-2.258-0.12-3.358-0.359     c-2.966-0.641-5.669-2.115-7.818-4.264l-62.521-62.521l-18.6,18.602l12.92,12.92c3.527,3.527,5.19,8.585,4.449,13.528     c-0.504,3.359-2.042,6.407-4.449,8.816l-8.656,8.655c-2.278,2.278-5.154,3.788-8.318,4.366     C385.274,462.684,384.314,462.772,383.359,462.772z M275.997,367.086c4.22,0,8.188,1.644,11.172,4.628l85.726,85.726     c2.134,2.134,4.828,3.548,7.791,4.089c1.758,0.322,3.59,0.322,5.348,0c2.963-0.541,5.657-1.955,7.791-4.089l8.656-8.655     c2.254-2.256,3.695-5.111,4.168-8.258c0.694-4.631-0.864-9.368-4.168-12.673l-13.627-13.627l20.014-20.016l63.229,63.229     c2.014,2.013,4.545,3.394,7.322,3.994c3.538,0.764,7.328,0.188,10.458-1.593c1.156-0.658,2.217-1.467,3.151-2.401l8.654-8.655     c5.404-5.403,5.832-13.93,0.996-19.833c-0.319-0.386-0.654-0.756-0.996-1.098l-82.348-82.349     c-2.795-2.796-6.512-4.335-10.465-4.335s-7.67,1.539-10.465,4.335l-39.137,39.136l-72.805-72.805     c-2.795-2.796-6.512-4.335-10.465-4.335s-7.669,1.539-10.465,4.335L149.514,427.854c-3.305,3.305-4.863,8.043-4.168,12.673     c0.472,3.148,1.914,6.004,4.168,8.258l8.656,8.655c2.134,2.134,4.828,3.548,7.791,4.089c1.76,0.322,3.59,0.322,5.349,0     c2.963-0.541,5.658-1.955,7.791-4.089l85.725-85.726C267.809,368.73,271.777,367.086,275.997,367.086z" />
                    </g>
                    <g>
                      <path d="M491.268,213.967c-6.672-2.622-13.934-4.063-21.523-4.063c-32.551,0-59.033,26.482-59.033,59.032     c0,32.551,26.482,59.032,59.033,59.032c7.59,0,14.852-1.441,21.523-4.063c8.188-3.218,15.486-8.214,21.42-14.51     c9.969-10.574,16.088-24.814,16.088-40.459c0-15.644-6.119-29.885-16.088-40.459     C506.754,222.181,499.455,217.184,491.268,213.967z M469.742,285.128c-8.941,0-16.191-7.25-16.191-16.192     c0-8.942,7.25-16.191,16.191-16.191c8.943,0,16.193,7.25,16.193,16.191C485.936,277.878,478.686,285.128,469.742,285.128z" />
                      <path d="M469.744,328.467c-32.827,0-59.533-26.706-59.533-59.532c0-32.826,26.706-59.532,59.533-59.532     c7.482,0,14.786,1.379,21.706,4.098c8.114,3.188,15.584,8.248,21.602,14.632c10.462,11.098,16.224,25.588,16.224,40.802     s-5.762,29.704-16.224,40.802c-6.016,6.383-13.485,11.442-21.602,14.633C484.531,327.088,477.229,328.467,469.744,328.467z      M469.744,210.403c-32.275,0-58.533,26.257-58.533,58.532c0,32.275,26.258,58.532,58.533,58.532     c7.358,0,14.538-1.355,21.341-4.029c7.979-3.136,15.323-8.11,21.238-14.387c10.287-10.912,15.952-25.158,15.952-40.116     s-5.665-29.205-15.952-40.116c-5.916-6.277-13.261-11.252-21.238-14.387C484.281,211.759,477.102,210.403,469.744,210.403z      M469.742,285.628c-9.204,0-16.691-7.488-16.691-16.692c0-9.204,7.487-16.691,16.691-16.691c9.205,0,16.693,7.488,16.693,16.691     C486.436,278.14,478.947,285.628,469.742,285.628z M469.742,253.244c-8.652,0-15.691,7.039-15.691,15.691     c0,8.653,7.039,15.692,15.691,15.692c8.653,0,15.693-7.04,15.693-15.692C485.436,260.283,478.396,253.244,469.742,253.244z" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </EditAlbum>
  );
}
