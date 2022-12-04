import React, { useState, useEffect } from "react";
import getInfoAlbum from "src/API/getInfoAlbum";
import { InfoAlbumType } from "src/type";
import { Album } from "src/styled";
import NavBarAlbumView from "src/component/Album/navBar";

export default function AlbumView(): JSX.Element {
  const [albums, setAlbums] = useState<InfoAlbumType>({});
  const [albumSelected, setAlbumSelected] = useState<string>(
    Object.keys(albums).reverse()[0]
  );

  useEffect(() => {
    async function getData() {
      const result = await getInfoAlbum();
      setAlbums((curr) => result);
    }
    getData();
  }, []);

  return (
    <Album>
      <NavBarAlbumView
        yearSelected={albumSelected}
        setAlbumSelected={setAlbumSelected}
        years={Object.keys(albums).reverse()}
      />
    </Album>
  );
}
