import { useQuery } from "@tanstack/react-query";
import { IGameData } from "../interfaces/interfaces";
import APIClient from "../services/api-client";

const apiClientInstance_ = new APIClient<IGameData>("/games");

export default function useGameDetails(slug: string) {
  return useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClientInstance_.get(slug),
  });
}
