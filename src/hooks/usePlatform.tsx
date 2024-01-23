import { IPlatformData } from "../interfaces/interfaces";
import useData from "./useData";

// hook for fetching based on different generes
export default function usePlatforms() {
  const _platformEndpoint = "/platforms/lists/parents";
  return useData<IPlatformData>(_platformEndpoint);
}
