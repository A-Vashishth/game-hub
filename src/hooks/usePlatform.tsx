import { useQuery } from "@tanstack/react-query";
import { IPlatformData } from "../interfaces/interfaces";
import APIClient from "../services/api-client";

const _platformEndpoint = "/platforms/lists/parents";
const apiClientInstance_ = new APIClient<IPlatformData>(_platformEndpoint);

// hook for fetching based on different generes
export default function usePlatforms() {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClientInstance_.getAll(),
    staleTime: 24 * 60 * 60 * 1000, // 24hr
  });
}
