import { VideoCategoryType } from "src/type";

const cleAPI = process.env.REACT_APP_API_URL;

export default async function getVideoCategory(): Promise<VideoCategoryType> {
  const res = await fetch(`${cleAPI}/videoCategory`);
  const data = await res.json();
  return data;
}
