import { VideoLinkType } from "src/type";

const cleAPI = process.env.REACT_APP_API_URL;

export default async function getVideoLink(id: string): Promise<VideoLinkType> {
  const res = await fetch(`${cleAPI}/videoLink/${id}`);
  const data = res.json();
  return data;
}
