import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { IGameScreenshotData } from "../interfaces/interfaces";

function useFetchScreenshots(gameId: number) {
  const apiClientInstance_ = new APIClient<IGameScreenshotData>(
    `/games/${gameId}/screenshots`
  );
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: () => apiClientInstance_.getAll(),
  });
}

export default useFetchScreenshots;
