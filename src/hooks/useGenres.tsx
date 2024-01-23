import { IGenreData } from "../interfaces/interfaces";
import useData from "./useData";
// hook for fetching based on different generes
export default function useGenres() {
  return useData<IGenreData>("/genres");
}
