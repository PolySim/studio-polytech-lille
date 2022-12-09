import { NewsInfoType } from "src/type";

const cleAPI = process.env.REACT_APP_API_URL;

export default async function getNewsInfo(): Promise<NewsInfoType> {
  const res = await fetch(`${cleAPI}/newsInfo`);
  const data = await res.json();
  return data;
}
