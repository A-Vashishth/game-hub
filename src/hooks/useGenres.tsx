import { useQuery } from "@tanstack/react-query";
import { IFetchGamesResponse, IGenreData } from "../interfaces/interfaces";
import apiClient from "../services/api-client";
import genreData from "../data/genreData";
// hook for fetching based on different generes
export default function useGenres() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<IFetchGamesResponse<IGenreData>>("/genres")
        .then((res_) => res_.data),
    staleTime: 24 * 60 * 60 * 1000, // 24hr
    initialData: { count: genreData.length, results: genreData },
  });
}
