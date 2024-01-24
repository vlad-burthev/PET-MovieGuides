import { useEffect, type FC } from "react";
import { useLazyGetAllMoviesQuery } from "../../../services/movieApi/movieApi";
import { I_Movie } from "../../../interfaces";
import MovieListItem from "../../HomePage/MovieListItem/MovieListItem";

interface RecomendsBarProps {}

import styles from "./RecomendBar.module.scss";

const RecomendsBar: FC<RecomendsBarProps> = () => {
  const [getRecomends, { data }] = useLazyGetAllMoviesQuery();
  const getRecomendsHandler = async () => {
    await getRecomends({ sortBy: "ranking", size: 3, page: 1 });
  };
  useEffect(() => {
    getRecomendsHandler();
  }, []);

  return (
    <div>
      <h2>Recommends</h2>
      <div className={styles["movie-list"]}>
        {data?.data &&
          data?.data.map((movie: I_Movie) => (
            <MovieListItem key={movie._id} {...movie} />
          ))}
      </div>
    </div>
  );
};

export default RecomendsBar;
