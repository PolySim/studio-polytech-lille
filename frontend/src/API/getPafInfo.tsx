import { PafInfoType } from "src/type";

const cleAPI = process.env.REACT_APP_API_URL;

export default async function getPafInfo(): Promise<PafInfoType> {
  const res = await fetch(`${cleAPI}/pafInfo`);
  const data = await res.json();
  return data;
}
