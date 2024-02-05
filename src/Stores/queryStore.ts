// store to manage query(state) through zustand lib.

import { create } from "zustand";
import { IGamesRequestData } from "../interfaces/interfaces";

export interface IQueryStore {
  gameQuery: IGamesRequestData;
  updateSearchText: (txt: string) => void;
  updateGenreId: (id: number) => void;
  updatePlatformId: (id: number) => void;
  setSortOrder: (sortBy: string) => void;
}

const useGameQueryStore = create<IQueryStore>((set) => ({
  gameQuery: {
    genreId: undefined,
    platformId: undefined,
    sortBy: "",
    searchText: "",
  },
  updateSearchText: (txt) => set(() => ({ gameQuery: { searchText: txt } })),
  updatePlatformId: (id) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId: id } })),
  setSortOrder: (by) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortBy: by } })),
  updateGenreId: (id) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId: id } })),
}));

export default useGameQueryStore;
