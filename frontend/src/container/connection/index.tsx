import React, { useContext } from "react";
import { Connection } from "src/styled";
import { ConnectionContext } from "src/context";

export default function ConnectionView(): JSX.Element {
  const { setConnection } = useContext(ConnectionContext);

  return (
    <Connection>
      <div>
        <div>
          <h4>Connexion</h4>
          <button
            onClick={() => {
              setConnection(false);
            }}
          >
            ❌
          </button>
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
          <div
            onClick={() => {
              setConnection(false);
            }}
          >
            Annuler
          </div>
          <div>Connexion</div>
        </div>
      </div>
    </Connection>
  );
}
