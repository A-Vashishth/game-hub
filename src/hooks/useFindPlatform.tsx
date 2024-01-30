import usePlatforms from "./usePlatform";

export default function useFindPlatform(id?: number) {
  return usePlatforms().data?.results?.find((platform) => platform.id === id)
    ?.name;
}
