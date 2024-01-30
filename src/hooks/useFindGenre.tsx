import useGenres from "./useGenres";

export default function useFindGenre(id?: number) {
  return useGenres().data?.results?.find((genre_) => genre_.id === id)?.name;
}
