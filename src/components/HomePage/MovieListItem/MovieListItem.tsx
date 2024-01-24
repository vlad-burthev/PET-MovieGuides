import type { FC } from "react";
import { I_Movie } from "../../../interfaces";

interface MovieListItemProps extends I_Movie {}

import styles from "./MovieListItem.module.scss";
import { Link } from "react-router-dom";
import { paths } from "../../../routes/paths";

const MovieListItem: FC<MovieListItemProps> = ({
  _id,
  title,
  episodes,
  genres,
  image,
  ranking,
  status,
  type,
}) => {
  return (
    <Link to={paths.movie + _id} className={styles.item}>
      <img src={image} alt={title} />
      <div className={styles["movie-info"]}>
        <ul>
          <li>{title}</li>
          <li>{type}</li>
          <li>Rank: {ranking}</li>
          <li>{status}</li>
          <li>{episodes} episodes</li>
          <li>{genres.join(", ")}</li>
        </ul>
      </div>
    </Link>
  );
};

export default MovieListItem;
