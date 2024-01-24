import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { T_AppDispatch, T_RootState } from "./types";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { movieApi } from "../services/movieApi/movieApi";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export const useAppDispatch: () => T_AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<T_RootState> = useSelector;
