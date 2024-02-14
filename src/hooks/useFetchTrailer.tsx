import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { IGameTrailerData } from "../interfaces/interfaces";

function useFetchTrailer(gameId: number) {
  const apiClientInstance_ = new APIClient<IGameTrailerData>(
    `/games/${gameId}/movies`
  );
  return useQuery({
    queryKey: ["trailer", gameId],
    queryFn: () => apiClientInstance_.getAll(),
  });
}

export default useFetchTrailer;
