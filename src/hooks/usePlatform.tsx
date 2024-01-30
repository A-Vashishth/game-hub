import { useQuery } from "@tanstack/react-query";
import { IPlatformData } from "../interfaces/interfaces";
import APIClient from "../services/api-client";
import ms from "ms";

const _platformEndpoint = "/platforms/lists/parents";
const apiClientInstance_ = new APIClient<IPlatformData>(_platformEndpoint);

// hook for fetching based on different generes
export default function usePlatforms() {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClientInstance_.getAll(),
    staleTime: ms("24h"), // 24hr
  });
}
