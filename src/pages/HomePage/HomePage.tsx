import { type FC } from "react";
import FilterBar from "../../components/HomePage/FilterBar";
import MovieList from "../../components/HomePage/MovieList";

interface HomePageProps {}

import styles from "./HomePage.module.scss";
import RecomendsBar from "../../components/blocks/RecomendsBar/RecomendsBar";

const HomePage: FC<HomePageProps> = () => {
  return (
    <div className={styles.container}>
      <FilterBar />
      <MovieList />
      <RecomendsBar />
    </div>
  );
};

export default HomePage;
