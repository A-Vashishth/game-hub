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
//  interface for the fetched data from RAWG api
export interface IFetchGamesResponse {
  results: Array<IGameData>;
  count: number;
}
// interface for data related for each game
export interface IGameData {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: IPlatformData }[];
  metacritic: number;
  rating_top: number;
}
// interface to store meta data for fetching the specific type of games
export interface IGamesRequestData {
  genre: IGenreData | null;
  platform: IPlatformData | null;
  sortBy: string;
  searchText: string;
}