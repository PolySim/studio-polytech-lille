import { VideoLinkAdminType } from "src/type";

const cleAPI = process.env.REACT_APP_API_URL;

export default async function getVideoLinkAdmin(
  id: string
): Promise<VideoLinkAdminType> {
  const res = await fetch(`${cleAPI}/videoLinkAdmin/${id}`);
  const data = await res.json();
  return data;
}
