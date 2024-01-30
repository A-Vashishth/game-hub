import { useInfiniteQuery } from "@tanstack/react-query";
import { IGameData, IGamesRequestData } from "../interfaces/interfaces";
import APIClient from "../services/api-client";

const gamesEndpoint_ = "/games";
const apiClientInstance_ = new APIClient<IGameData>(gamesEndpoint_);

const useGames = (query: IGamesRequestData) => {
  return useInfiniteQuery({
    queryKey: ["games", query],
    queryFn: ({ pageParam = 1 }) =>
      apiClientInstance_.getAll({
        params: {
          genres: query?.genreId,
          parent_platforms: query?.platformId,
          ordering: query?.sortBy,
          search: query?.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastpage, allpages) => {
      return lastpage.next ? allpages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: 24 * 60 * 60 * 1000, // 24hr
  });
};

export default useGames;
