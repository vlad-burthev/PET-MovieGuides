import { type FC } from "react";

interface FilterBarProps {}

import styles from "./FilterBar.module.scss";
import GenresList from "./GenresList";
import TypeList from "./TypeList/TypeList";

const FilterBar: FC<FilterBarProps> = () => {
  return (
    <div className={styles.filter}>
      <GenresList />
      <TypeList />
    </div>
  );
};

export default FilterBar;
