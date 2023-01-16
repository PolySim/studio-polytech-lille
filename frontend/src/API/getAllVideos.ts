import { AllVideosType } from "src/type";

const cleAPI = process.env.REACT_APP_API_URL;

export default async function getAllVideo(): Promise<AllVideosType> {
  const res = await fetch(`${cleAPI}/getAllVideos`);
  const data = await res.json();
  return data;
}
