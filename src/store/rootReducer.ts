import { combineReducers } from "@reduxjs/toolkit";
import { movieApi } from "../services/movieApi/movieApi";
import movieSlice from "./movieSlice/movieSlice";
import favoriteSlice from "./favoriteSlice/favoriteSlice";

export const rootReducer = combineReducers({
  [movieApi.reducerPath]: movieApi.reducer,
  movieSlice: movieSlice,
  favoriteSlice: favoriteSlice,
});
