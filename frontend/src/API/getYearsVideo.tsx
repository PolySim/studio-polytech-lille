const cleAPI = process.env.REACT_APP_API_URL;

export default async function getYearsVideo(): Promise<number[]> {
  const res = await fetch(`${cleAPI}/yearsVideo`);
  const data = await res.json();
  return data;
}
