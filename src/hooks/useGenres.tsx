import { useQuery } from "@tanstack/react-query";
import genreData from "../data/genreData";
import { IGenreData } from "../interfaces/interfaces";
import APIClient from "../services/api-client";
import ms from "ms";

const genreEndpoint_ = "/genres";
const apiClientInstance_ = new APIClient<IGenreData>(genreEndpoint_);

// hook for fetching based on different generes
export default function useGenres() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClientInstance_.getAll(),
    staleTime: ms("24h"), // 24hr
    initialData: { count: genreData.length, results: genreData, next: null },
  });
}
