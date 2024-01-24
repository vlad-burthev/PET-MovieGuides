import { useEffect, type FC } from "react";

interface GenresListProps {}

import styles from "./GenresList.module.scss";
import { useLazyGetGenresQuery } from "../../../../services/movieApi/movieApi";
import CheckBoxList from "../../../blocks/CheckBoxList";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { addGenre, removeGenre } from "../../../../store/movieSlice/movieSlice";

const GenresList: FC<GenresListProps> = () => {
  const [getAllGenres, { data: genres }] = useLazyGetGenresQuery();
  const { genres: selectedGenres } = useAppSelector(
    (state) => state.movieSlice
  );

  const getAllGenresHandler = async () => {
    await getAllGenres("");
  };

  useEffect(() => {
    setTimeout(() => {
      getAllGenresHandler();
    }, 3000);
  }, []);

  const dispatch = useAppDispatch();

  const selectGenresHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    _id: string
  ) => {
    if (event.currentTarget.checked) {
      dispatch(addGenre(_id));
    } else {
      dispatch(removeGenre(_id));
    }
  };

  return (
    <div className={styles.genre}>
      <h2>Select genres</h2>
      <CheckBoxList
        selected={selectedGenres}
        selectHandler={selectGenresHandler}
        data={genres}
      />
    </div>
  );
};

export default GenresList;
