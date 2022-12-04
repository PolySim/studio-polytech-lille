import { ListImageType } from "src/type";

const cleAPI = process.env.REACT_APP_API_URL;

export default async function getListImage(id: number): Promise<ListImageType> {
  const res = await fetch(`${cleAPI}/albumImage/${id}`);
  const data = await res.json();
  return data;
}
