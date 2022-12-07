import { VideoInfoType } from "src/type";

const cleAPI = process.env.REACT_APP_API_URL;

export default async function getVideoInfo(): Promise<VideoInfoType> {
  const res = await fetch(`${cleAPI}/videoInfo`);
  const data = await res.json();
  return data;
}
