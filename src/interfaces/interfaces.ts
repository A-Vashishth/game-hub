// interface for the platforms= related data
export interface IPlatformData {
  id: number;
  name: string;
  slug: string;
}
// interface for the genre related data
export interface IGenreData {
  id: number;
  name: string;
  image_background: string;
}
// data for the trailers of the game
export interface IGameTrailerData {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}
// data for the screenshots of the games
export interface IGameScreenshotData {
  id: number;
  image: string;
  width: number;
  height: number;
}
// interface for the fetched data from RAWG api
export interface IFetchGamesResponse<T> {
  results: Array<T>;
  count: number;
  next: string | null;
}
// for the information about the publisher of the game
export interface IGamePublisherData {
  id: number;
  name: string;
}
// interface for data related for each game
export interface IGameData {
  id: number;
  name: string;
  slug: string;
  genres: IGenreData[];
  publishers: IGamePublisherData[];
  background_image: string;
  description_raw: string;
  parent_platforms: { platform: IPlatformData }[];
  metacritic: number;
  rating_top: number;
}
// interface to store meta data for fetching the specific type of games
export interface IGamesRequestData {
  genreId?: number;
  platformId?: number;
  sortBy?: string;
  searchText?: string;
}
