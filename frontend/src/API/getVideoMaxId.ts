const cleAPI = process.env.REACT_APP_API_URL;

export async function getMaxVideoId(): Promise<[number]> {
  const res = await fetch(`${cleAPI}/maxVideoId`);
  const data = res.json();
  return data;
}
