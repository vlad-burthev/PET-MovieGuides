import { createSlice } from "@reduxjs/toolkit";
import { I_Movie } from "../../interfaces";

interface I_InitialState {
  favorites: I_Movie[];
  favoritesList: string[];
}

const initialState: I_InitialState = {
  favorites: [],
  favoritesList: [],
};

const favoriteSlice = createSlice({
  name: "favoriteSlice",
  initialState,
  reducers: {
    setFavorites: (state, { payload }) => {
      state.favorites = payload;
      state.favoritesList = payload.map((movie: I_Movie) => movie._id);
    },
    addToFavorite: (state, { payload }) => {
      if (!state.favoritesList.includes(payload._id)) {
        state.favorites = [...state.favorites, payload];
        state.favoritesList = [...state.favoritesList, payload._id];
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    removeFromFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter(
        (movie) => movie._id !== payload
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
      state.favoritesList = state.favoritesList.filter((id) => id !== payload);
    },
  },
});

export const { addToFavorite, removeFromFavorites, setFavorites } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
