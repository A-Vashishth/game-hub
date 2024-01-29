import { useQuery } from "@tanstack/react-query";
import { IFetchGamesResponse, IPlatformData } from "../interfaces/interfaces";
import apiClient from "../services/api-client";

// hook for fetching based on different generes
export default function usePlatforms() {
  const _platformEndpoint = "/platforms/lists/parents";
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<IFetchGamesResponse<IPlatformData>>(_platformEndpoint)
        .then((res_) => res_.data),
    staleTime: 24 * 60 * 60 * 1000, // 24hr
  });
}
