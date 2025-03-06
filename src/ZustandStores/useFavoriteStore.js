import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFavoriteStore = create(
  persist(
    (set) => ({
      favorites: [],

      addToFavorites: (event) =>
        set((state) => ({
          favorites: [...state.favorites, event],
        })),

      removeFromFavorites: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((item) => item.id !== id),
        })),
    }),
    {
      name: "favorite-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useFavoriteStore;
