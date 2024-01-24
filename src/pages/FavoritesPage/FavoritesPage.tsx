import type { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import MovieListItem from "../../components/HomePage/MovieListItem/MovieListItem";

import styles from "./FavoritesPage.module.scss";
import { removeFromFavorites } from "../../store/favoriteSlice/favoriteSlice";

interface FavoritesPageProps {}

const FavoritesPage: FC<FavoritesPageProps> = () => {
  const { favorites } = useAppSelector((state) => state.favoriteSlice);

  const dispatch = useAppDispatch();
  const removeFromFavoritesHandler = (id: string) => {
    dispatch(removeFromFavorites(id));
  };
  return (
    <>
      {favorites.length === 0 ? (
        "oops, nothing"
      ) : (
        <div className={styles.favorites}>
          <div className={styles.list}>
            {favorites.map((movie) => (
              <div key={movie._id} className={styles["list-item"]}>
                <MovieListItem {...movie} />
                <button
                  onClick={() => removeFromFavoritesHandler(movie._id)}
                  className={styles["btn-remove"]}
                >
                  Remove from Favorites
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FavoritesPage;
