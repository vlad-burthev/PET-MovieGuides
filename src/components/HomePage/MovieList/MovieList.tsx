import { useEffect, type FC } from "react";
import { useLazyGetAllMoviesQuery } from "../../../services/movieApi/movieApi";
import { I_Movie } from "../../../interfaces";
import MovieListItem from "../MovieListItem/MovieListItem";

interface MovieListProps {}

import styles from "./MovieList.module.scss";
import { useAppSelector } from "../../../store";
import Pagination from "../../blocks/Pagination/Pagination";

const MovieList: FC<MovieListProps> = () => {
  const [getAllMovies, { data, isLoading, isFetching }] =
    useLazyGetAllMoviesQuery();
  const { page } = useAppSelector((state) => state.movieSlice);

  const getAllMoviesHandler = async () => {
    await getAllMovies({
      type: type.join(","),
      genres: genres.join(","),
      page: page,
    });
  };

  const { type, genres } = useAppSelector((state) => state.movieSlice);

  useEffect(() => {
    getAllMoviesHandler();
  }, [type, genres, page]);

  return (
    <>
      {isLoading || isFetching ? (
        "Loading..."
      ) : (
        <div>
          <div className={styles.list}>
            {data &&
              data?.data.map((data: I_Movie) => (
                <MovieListItem key={data._id} {...data} />
              ))}
          </div>
          {data?.meta?.totalPage && (
            <div>
              <Pagination totalPages={data?.meta?.totalPage} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MovieList;
