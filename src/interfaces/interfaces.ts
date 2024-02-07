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
// interface for the fetched data from RAWG api
export interface IFetchGamesResponse<T> {
  results: Array<T>;
  count: number;
  next: string | null;
}
// interface for data related for each game
export interface IGameData {
  id: number;
  name: string;
  slug: string;
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
