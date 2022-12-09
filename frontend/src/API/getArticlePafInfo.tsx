import { PafArticleInfoType } from "src/type";

const cleAPI = process.env.REACT_APP_API_URL;

export default async function getArticlePafInfo(
  id: string
): Promise<PafArticleInfoType> {
  const res = await fetch(`${cleAPI}/pafArticleInfo/${id}`);
  const data = await res.json();
  return data;
}
