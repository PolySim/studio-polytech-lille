import React from "react";
import { AlbumType } from "src/type";

const cleAPI = process.env.REACT_APP_API_URL;

export default function ListAlbumView({
  listAlbum,
}: {
  listAlbum: AlbumType[];
}): JSX.Element {
  return (
    <div>
      {listAlbum.map((album) => (
        <div key={album.id}>
          <img src={`${cleAPI}/getImage/${album.cover_id}`} alt={album.title} />
          <p>{album.title}</p>
        </div>
      ))}
    </div>
  );
}
