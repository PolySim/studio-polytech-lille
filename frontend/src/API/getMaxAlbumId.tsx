const cleAPI = process.env.REACT_APP_API_URL;

export default async function getMaxAlbumId(): Promise<number> {
  const res = await fetch(`${cleAPI}/maxAlbumId`);
  const data = await res.json();
  return data[0];
}
