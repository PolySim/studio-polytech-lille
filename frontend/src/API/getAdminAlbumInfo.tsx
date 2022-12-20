import { AdminAlbumInfo } from "src/type";

const cleAPI = process.env.REACT_APP_API_URL;

export default async function getAdminAlbumInfo(
  id: number
): Promise<AdminAlbumInfo> {
  const res = await fetch(`${cleAPI}/admin/albumInfo/${id}`);
  const data = await res.json();
  return data;
}
