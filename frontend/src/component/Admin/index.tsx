import React from "react";
import { Admin } from "src/styled";

export default function AdminView(): JSX.Element {
  return (
    <Admin>
      <div>
        <div>Acceuil</div>
        <div>News</div>
        <div>Photos</div>
        <div>Vidéos</div>
        <div>Equipe</div>
        <div>Mails</div>
        <div>Utilisateurs</div>
        <div>Documents</div>
        <div>Compta</div>
        <div>PAF</div>
        <div>A propos</div>
      </div>
      <div>
        <div>
          <div>
            <div>
              {/* Home Icon */}
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 1280.000000 1280.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                  fill="#333"
                  stroke="none"
                >
                  <path
                    d="M4969 10256 c-646 -572 -1825 -1616 -2620 -2320 -794 -703 -1445
-1282 -1447 -1286 -3 -8 537 -620 548 -620 4 0 407 354 896 788 489 433 1515
1341 2278 2017 764 677 1426 1263 1472 1302 l82 73 2358 -2090 c1298 -1149
2364 -2089 2369 -2089 6 0 131 138 279 306 196 223 267 309 260 319 -5 7
-1185 1054 -2621 2327 -2305 2040 -2617 2313 -2645 2314 -30 1 -146 -100
-1209 -1041z"
                  />
                  <path
                    d="M2470 9648 l0 -992 33 30 c31 30 1280 1156 1284 1158 0 1 5 180 9
399 l7 397 -667 0 -666 0 0 -992z"
                  />
                  <path
                    d="M5744 9127 c-236 -210 -1070 -949 -1852 -1641 l-1422 -1259 0 -2371
c0 -2275 1 -2373 19 -2411 23 -51 74 -101 120 -117 28 -10 286 -13 1216 -13
l1180 0 5 1065 c5 985 6 1067 22 1097 23 42 80 88 127 102 28 8 315 11 1027
11 939 0 991 -1 1030 -19 57 -26 110 -92 123 -153 7 -33 11 -392 11 -1078 l0
-1030 1163 0 c1261 0 1218 -2 1291 54 19 14 43 45 55 69 l21 43 1 2375 1 2374
-314 280 c-289 258 -3344 2963 -3378 2991 -13 10 -83 -48 -446 -369z"
                  />
                </g>
              </svg>
            </div>
            <div>Bienvenue !</div>
          </div>
          <div>
            <div>
              Bienvenue sur la partie administrative du site du studio !
            </div>
            <div>
              Un souci, une amélioration à proposer ou simplement besoin d'aide
              ? N'hésitez pas et laissez un message sur le groupe Facebook ou en
              parler en réunion !
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div>
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  width="24px"
                  height="24px"
                >
                  <g fill="#000">
                    <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
                  </g>
                </svg>
              </div>
              <div>Raccourcis</div>
            </div>
            <div>
              <div>
                <div></div>
                <div>Retour site</div>
              </div>
              <div>
                <div>
                  <svg
                    x="0px"
                    y="0px"
                    viewBox="0 0 242.937 242.937"
                    width={"48px"}
                    height="48px"
                  >
                    <g>
                      <path d="M235.437,60.699h-31.709V30.927c0-4.142-3.358-7.5-7.5-7.5H7.5c-4.142,0-7.5,3.358-7.5,7.5v161.478   c0,14.945,12.159,27.104,27.104,27.104h188.728c14.945,0,27.105-12.159,27.105-27.104V68.199   C242.937,64.057,239.579,60.699,235.437,60.699z M15,192.405V38.427h173.728v29.771v124.206c0,4.349,1.036,8.458,2.864,12.104   H27.104C20.43,204.509,15,199.079,15,192.405z M215.832,204.509c-6.674,0-12.104-5.43-12.104-12.104V75.699h24.209v116.706   C227.937,199.079,222.506,204.509,215.832,204.509z" />
                      <path d="M39.351,78.374h125.025c4.142,0,7.5-3.358,7.5-7.5c0-4.142-3.358-7.5-7.5-7.5H39.351c-4.142,0-7.5,3.358-7.5,7.5   C31.851,75.016,35.208,78.374,39.351,78.374z" />
                      <path d="M39.008,115.893c0,12.44,10.12,22.561,22.56,22.561c12.438,0,22.558-10.121,22.558-22.561   c0-12.441-10.119-22.563-22.558-22.563C49.128,93.33,39.008,103.452,39.008,115.893z M69.125,115.893   c0,4.169-3.39,7.561-7.558,7.561c-4.168,0-7.56-3.392-7.56-7.561c0-4.17,3.391-7.563,7.56-7.563   C65.735,108.33,69.125,111.723,69.125,115.893z" />
                      <path d="M39.351,180.02c4.142,0,7.5-3.358,7.5-7.5v-8.361c0-3.899,3.174-7.072,7.075-7.072h15.277c3.903,0,7.078,3.172,7.078,7.072   v8.361c0,4.142,3.358,7.5,7.5,7.5c4.142,0,7.5-3.358,7.5-7.5v-8.361c0-12.17-9.904-22.072-22.078-22.072H53.926   c-12.172,0-22.075,9.901-22.075,22.072v8.361C31.851,176.662,35.208,180.02,39.351,180.02z" />
                      <path d="M164.376,97.063h-57.763c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h57.763c4.142,0,7.5-3.358,7.5-7.5   C171.876,100.421,168.518,97.063,164.376,97.063z" />
                      <path d="M164.376,164.443h-57.763c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h57.763c4.142,0,7.5-3.358,7.5-7.5   S168.518,164.443,164.376,164.443z" />
                      <path d="M164.376,130.753h-57.763c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h57.763c4.142,0,7.5-3.358,7.5-7.5   C171.876,134.111,168.518,130.753,164.376,130.753z" />
                    </g>
                  </svg>
                </div>
                <div>Nouvelle news</div>
              </div>
              <div>
                <div>
                  <svg
                    x="0px"
                    y="0px"
                    viewBox="0 0 297 297"
                    width={"48px"}
                    height="48px"
                  >
                    <g>
                      <path d="M268.338,64.67H203.56l-13.586-27.446c-1.667-3.368-5.101-5.499-8.858-5.499h-48.923c-3.758,0-7.19,2.131-8.857,5.499   L109.749,64.67H28.662C12.858,64.67,0,77.527,0,93.332v143.281c0,15.804,12.858,28.662,28.662,28.662h239.676   c15.804,0,28.662-12.858,28.662-28.662V93.332C297,77.527,284.142,64.67,268.338,64.67z M138.328,51.492h36.651l6.523,13.178   h-49.697L138.328,51.492z M268.338,84.437c4.905,0,8.896,3.99,8.896,8.896v20.261h-36.379   c-15.049-13.226-34.745-21.255-56.278-21.255c-21.534,0-41.232,8.029-56.28,21.255H19.767V93.332c0-4.905,3.99-8.896,8.896-8.896   H268.338z M184.576,244.056c-36.242,0-65.728-29.597-65.728-65.976s29.485-65.976,65.728-65.976   c36.239,0,65.724,29.597,65.724,65.976S220.815,244.056,184.576,244.056z M19.767,236.613V133.36h91.893   c-7.974,13.028-12.578,28.345-12.578,44.72c0,27.331,12.817,51.716,32.739,67.428H28.662   C23.757,245.508,19.767,241.518,19.767,236.613z M268.338,245.508h-31.009c19.922-15.712,32.737-40.097,32.737-67.428   c0-16.375-4.604-31.691-12.576-44.72h19.743v103.253C277.233,241.518,273.243,245.508,268.338,245.508z" />
                      <path d="M184.576,127.988c-27.547,0-49.958,22.471-49.958,50.092s22.411,50.092,49.958,50.092   c27.545,0,49.955-22.471,49.955-50.092S212.121,127.988,184.576,127.988z M184.576,208.404c-16.648,0-30.191-13.604-30.191-30.324   s13.543-30.324,30.191-30.324c16.645,0,30.188,13.604,30.188,30.324S201.222,208.404,184.576,208.404z" />
                    </g>
                  </svg>
                </div>
                <div>Nouvel album</div>
              </div>
              <div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="54px"
                    height="54px"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M14.25 4.74L11 6.62V4.5l-.5-.5h-9l-.5.5v7l.5.5h9l.5-.5v-2l3.25 1.87.75-.47V5.18l-.75-.44zM10 11H2V5h8v6zm4-1l-3-1.7v-.52L14 6v4z" />
                  </svg>
                </div>
                <div>Nouvelle vidéo</div>
              </div>
              <div>
                <div>
                  <svg
                    width={"48px"}
                    height="48px"
                    x="0px"
                    y="0px"
                    viewBox="0 0 488.9 488.9"
                  >
                    <g>
                      <g>
                        <g>
                          <path d="M438.9,126.9L332.8,7.3c-4.2-5.2-9.4-7.3-15.6-7.3H65.5C54.1,0,44.7,9.4,44.7,20.8v447.3c0,11.4,9.4,20.8,20.8,20.8     h357.9c11.4,0,19.8-9.4,20.8-19.8V140.5C444.1,135.3,442.1,131.1,438.9,126.9z M337,73.6l40.7,46.1H337V73.6z M402.5,448.4     l-316.2,0V40.6h210.1v98.8c0,11.4,9.4,20.8,20.8,20.8h85.3V448.4z" />
                          <path d="M136.2,235.1c0,11.4,9.4,20.8,20.8,20.8h174.8c11.4,0,20.8-9.4,20.8-20.8c0-11.4-9.4-20.8-20.8-20.8H157     C145.6,214.3,136.2,223.7,136.2,235.1z" />
                          <path d="M331.8,343.3H157c-11.4,0-20.8,9.4-20.8,20.8c0,11.4,9.4,20.8,20.8,20.8h174.8c11.4,0,20.8-9.4,20.8-20.8     C352.6,352.7,343.2,343.3,331.8,343.3z" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div>Nouveau document</div>
              </div>
              <div>
                <div></div>
                <div>Nouveau PAF</div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 460 460"
                  width="24px"
                  height="24px"
                >
                  <g id="XMLID_1055_">
                    <g>
                      <path d="M230,0C102.975,0,0,102.975,0,230s102.975,230,230,230s230-102.974,230-230S357.025,0,230,0z M268.333,377.36    c0,8.676-7.034,15.71-15.71,15.71h-43.101c-8.676,0-15.71-7.034-15.71-15.71V202.477c0-8.676,7.033-15.71,15.71-15.71h43.101    c8.676,0,15.71,7.033,15.71,15.71V377.36z M230,157c-21.539,0-39-17.461-39-39s17.461-39,39-39s39,17.461,39,39    S251.539,157,230,157z" />
                    </g>
                  </g>
                </svg>
              </div>
              <div>Statistique</div>
            </div>
            <div>Bientôt disponible</div>
          </div>
        </div>
      </div>
    </Admin>
  );
}
