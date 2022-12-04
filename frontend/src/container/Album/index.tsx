import React, { useState, useEffect } from "react";
import getInfoAlbum from "src/API/getInfoAlbum";
import { InfoAlbumType } from "src/type";
import { Album } from "src/styled";
import NavBarAlbumView from "src/component/Album/navBar";
import ListAlbumView from "src/component/Album/listAlbum";

export default function AlbumView(): JSX.Element {
  const [albums, setAlbums] = useState<InfoAlbumType>({});
  const [albumSelected, setAlbumSelected] = useState<string>("");

  useEffect(() => {
    async function getData() {
      const result = await getInfoAlbum();
      setAlbums((curr) => result);
      if (albumSelected === "") {
        setAlbumSelected((curr) => Object.keys(result).reverse()[0]);
      }
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
      <ListAlbumView listAlbum={albums[parseInt(albumSelected)]} />
    </Album>
  );
}
