import { useState, type FC } from "react";

interface HeaderProps {}

import styles from "./Header.module.scss";

import LogoIcon from "../../assets/images/logo.svg?react";

import { Link, NavLink } from "react-router-dom";
import { paths } from "../../routes/paths";
import { useAppSelector } from "../../store";

const Header: FC<HeaderProps> = () => {
  const { favoritesList } = useAppSelector((state) => state.favoriteSlice);
  const [open, setOpen] = useState<boolean>(false);
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Link to={paths.home}>
            <LogoIcon />
            <span>Movie</span>
          </Link>
        </div>

        <nav className={`${styles.nav} ${open && styles.open}`}>
          <ul className={styles.list}>
            <li>
              <NavLink
                to={paths.home}
                className={({ isActive }) =>
                  isActive ? styles["current-page"] : ""
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={paths.favorites}>
                Favorites
                {favoritesList.length > 0 && (
                  <span className={styles["favorites-item"]}>
                    {favoritesList.length}
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={`${styles["btn-burger"]} ${open && styles.open}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
