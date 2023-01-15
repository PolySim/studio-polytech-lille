import React from "react";
import { Link } from "react-router-dom";
import { AlbumType } from "src/type";

const cleAPI = process.env.REACT_APP_API_URL;

export default function ListAlbumAdminView({
  listAlbum,
}: {
  listAlbum: AlbumType[];
}): JSX.Element {
  return (
    <div>
      {listAlbum ? (
        listAlbum.map((album) => (
          <Link to={`/admin/album/${album.id}`} key={album.id}>
            <img
              src={`${cleAPI}/getImage/${album.cover_id}`}
              alt={album.title}
            />
            <p>{album.title}</p>
          </Link>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
