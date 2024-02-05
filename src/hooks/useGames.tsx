import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import useGameQueryStore from "../Stores/queryStore";
import { IGameData } from "../interfaces/interfaces";
import APIClient from "../services/api-client";

const gamesEndpoint_ = "/games";
const apiClientInstance_ = new APIClient<IGameData>(gamesEndpoint_);

const useGames = () => {
  // state to keep track of the selected genre and platform
  const query_ = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery({
    queryKey: ["games", query_],
    queryFn: ({ pageParam = 1 }) =>
      apiClientInstance_.getAll({
        params: {
          genres: query_?.genreId,
          parent_platforms: query_?.platformId,
          ordering: query_?.sortBy,
          search: query_?.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastpage, allpages) => {
      return lastpage.next ? allpages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: ms("24h"),
  });
};

export default useGames;
