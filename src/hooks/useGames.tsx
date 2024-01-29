import { useQuery } from "@tanstack/react-query";
import {
  IFetchGamesResponse,
  IGameData,
  IGamesRequestData,
} from "../interfaces/interfaces";
import apiClient from "../services/api-client";

const useGames = (query: IGamesRequestData) => {
  console.log("entering fetch games with query:", query);
  return useQuery({
    queryKey: ["games", query],
    queryFn: () =>
      apiClient
        .get<IFetchGamesResponse<IGameData>>("/games", {
          params: {
            genres: query?.genre?.id,
            parent_platforms: query?.platform?.id,
            ordering: query?.sortBy,
            search: query?.searchText,
          },
        })
        .then((res_) => res_.data),
  });
};

export default useGames;
