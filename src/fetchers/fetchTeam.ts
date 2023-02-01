
import { ITeam } from "../types/Types";
export const fetchTeam = async (): Promise<ITeam[]> => {
    return fetch("https://random-data-api.com/api/v2/users?size=10")
    .then((response) => response.json())
    .then((data)=> data as ITeam[])
    }