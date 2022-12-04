import { AlbumType } from "src/type";

const cleAPI = process.env.REACT_APP_API_URL;

export default async function getInfoAlbum(): Promise<AlbumType> {
  const res = await fetch(`${cleAPI}/albumInformation`);
  const data = res.json();
  return data;
}
