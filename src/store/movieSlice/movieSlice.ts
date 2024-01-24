import { createSlice } from "@reduxjs/toolkit";

interface I_InitialState {
  page: number;
  size: number;
  type: string[];
  genres: string[];
  sortBy: null | "ranking" | "title";
}

const initialState: I_InitialState = {
  page: 1,
  size: 30,
  type: [],
  genres: [],
  sortBy: null,
};

const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    addType: (state, { payload }) => {
      state.type = [...state.type, payload];
      state.page = 1;
    },
    removeType: (state, { payload }) => {
      state.type = state.type.filter((type) => type !== payload);
      state.page = 1;
    },
    addGenre: (state, { payload }) => {
      state.genres = [...state.genres, payload];
    },
    removeGenre: (state, { payload }) => {
      state.genres = state.genres.filter((genre) => genre !== payload);
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },
});

export const { addType, removeType, addGenre, removeGenre, setPage } =
  movieSlice.actions;
export default movieSlice.reducer;
