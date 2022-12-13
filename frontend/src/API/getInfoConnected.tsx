import { ConnectedType } from "src/type";

const cleAPI = process.env.REACT_APP_API_URL;

export default async function getInfoConnected(
  iv: string,
  u: string
): Promise<ConnectedType> {
  const res = await fetch(`${cleAPI}/getUsername/${iv}?u=${u}`);
  const data = await res.json();
  return data;
}
