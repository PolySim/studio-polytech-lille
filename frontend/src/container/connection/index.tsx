import React from "react";
import { Connection } from "src/styled";

export default function ConnectionView(): JSX.Element {
  return (
    <Connection>
      <div>
        <div>
          <h4>Connextion</h4>
          <button>❌</button>
        </div>
        <div>
          <form>
            <div>
              <label>Nom d'utilisateur</label>
              <input type="text" name="UserName" required={true}></input>
            </div>
            <div>
              <label>Mot de passe</label>
              <input
                type="password"
                name="UserPassword"
                required={true}
              ></input>
            </div>
            <div>
              <label htmlFor="Souvenir">
                <input type="checkbox" name="Souvenir" />
                Se souvenir de moi
              </label>
            </div>
          </form>
        </div>
        <div>
          <div>Plus d'infos</div>
          <div>Annuler</div>
          <div>Connexion</div>
        </div>
      </div>
    </Connection>
  );
}
