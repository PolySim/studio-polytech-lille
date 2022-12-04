import { InfoTeamType } from "src/type";

const cleAPI = process.env.REACT_APP_API_URL;

export default async function getInfoTeam(): Promise<InfoTeamType> {
  const res = await fetch(`${cleAPI}/infoTeam`);
  const data = await res.json();
  return data;
}
