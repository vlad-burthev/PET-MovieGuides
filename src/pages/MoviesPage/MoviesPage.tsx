import { useEffect, type FC } from "react";
import {
  useGetOneMovieQuery,
  useLazyGetAllMoviesQuery,
} from "../../services/movieApi/movieApi";
import { useParams } from "react-router-dom";

interface MoviesPageProps {}

import styles from "./MoviesPage.module.scss";
import { Helmet } from "react-helmet-async";
import { I_Movie } from "../../interfaces";
import MovieListItem from "../../components/HomePage/MovieListItem/MovieListItem";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  addToFavorite,
  removeFromFavorites,
} from "../../store/favoriteSlice/favoriteSlice";

const MoviesPage: FC<MoviesPageProps> = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const { data: movie } = useGetOneMovieQuery(id);
  const { favoritesList } = useAppSelector((state) => state.favoriteSlice);

  const [getRecMovies, { data: recom }] = useLazyGetAllMoviesQuery();

  const getRecMoviesHandler = async () => {
    await getRecMovies({ genres: movie.genres.join(","), size: 10 });
  };

  const addToFavoritesHandler = (movie: I_Movie) => {
    dispatch(addToFavorite(movie));
  };
  const removeFromFavoritesHandler = (id: number) => {
    dispatch(removeFromFavorites(id));
  };

  useEffect(() => {
    if (movie) getRecMoviesHandler();
  }, [movie]);

  return (
    <>
      <Helmet>
        <title>{movie?.title || "Movie page"}</title>
      </Helmet>

      <div className={styles.page}>
        {movie ? (
          <>
            <div className={styles.content}>
              <div className={styles.info}>
                <div className={styles.synopsis}>
                  <img src={movie.image} alt={movie.title} />
                  {movie.synopsis}
                </div>
              </div>
              <div className={styles.params}>
                <h1>{movie.title}</h1>
                <ul className={styles["params-list"]}>
                  <li>
                    Status: <span>{movie.status}</span>
                  </li>
                  <li>
                    Episodes: <span>{movie.hasEpisode || 0}</span>
                  </li>
                  <li>
                    Ranked: <span>#{movie.ranking}</span>
                  </li>
                  <li>
                    Type: <span>{movie.type}</span>
                  </li>
                  <li>
                    Genres: <span>{movie.genres.join(", ")}</span>
                  </li>
                  <li className={styles.alternative}>
                    Alternative:
                    <ul>
                      {movie.alternativeTitles.map((movie: string) => (
                        <li key={movie}>{movie}</li>
                      ))}
                    </ul>
                  </li>
                </ul>
                <a className={styles["link-btn"]} href={movie.link}>
                  Watch Online
                </a>
                {favoritesList.includes(movie._id) ? (
                  <button
                    onClick={() => removeFromFavoritesHandler(movie._id)}
                    className={styles["btn-favorites"]}
                  >
                    Remove from Favorites
                  </button>
                ) : (
                  <button
                    onClick={() => addToFavoritesHandler(movie)}
                    className={styles["btn-favorites"]}
                  >
                    Add to Favorites
                  </button>
                )}
              </div>
            </div>
            <div className={styles.recommends}>
              <h2>Recomends</h2>
              {
                <div className={styles["recom-list"]}>
                  {recom?.data &&
                    recom.data.map((movie: I_Movie) => (
                      <MovieListItem {...movie} key={movie._id} />
                    ))}
                </div>
              }
            </div>
          </>
        ) : (
          <>
            <h1>Loading...</h1>
          </>
        )}
      </div>
    </>
  );
};

export default MoviesPage;
