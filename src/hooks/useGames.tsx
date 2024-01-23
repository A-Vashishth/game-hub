import { IGameData, IGamesRequestData } from "../interfaces/interfaces";
import useData from "./useData";

const useGames = (query: IGamesRequestData) =>
  useData<IGameData>(
    "/games",
    {
      params: {
        genres: query?.genre?.id,
        platforms: query?.platform?.id,
        ordering: query?.sortBy,
        search: query?.searchText,
      },
    },
    [query]
  );

export default useGames;
