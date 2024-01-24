import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://anime-db.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "20f608a9a5msh87e2814b43bbe5fp1f7168jsn1fc93d55ecaa"
      );
      headers.set("X-RapidAPI-Host", "anime-db.p.rapidapi.com");

      return headers;
    },
  }),
  endpoints: (build) => ({
    getGenres: build.query({
      query: () => ({
        url: "genre",
        method: "GET",
        refetchOnReconnect: true,
      }),
    }),
    getAllMovies: build.query({
      query: ({ type, genres, sortBy, size = 12, page = 1 }) => ({
        url: "anime",
        method: "GET",
        params: {
          size: size || 10,
          page: page || 1,
          type: type,
          genres: genres,
          sortBy: sortBy,
        },
      }),
    }),
    getOneMovie: build.query({
      query: (id) => `anime/by-id/${id}`,
    }),
  }),
});

export const {
  useLazyGetGenresQuery,
  useLazyGetAllMoviesQuery,
  useGetAllMoviesQuery,
  useGetOneMovieQuery,
} = movieApi;
