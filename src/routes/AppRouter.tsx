import { lazy, type FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { paths } from "./paths";

const Layout = lazy(() => import("../layout"));
const ContactsPage = lazy(() => import("../pages/ContactsPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage"));
const FavoritesPage = lazy(() => import("../pages/FavoritesPage"));
const HomePage = lazy(() => import("../pages/HomePage"));

interface AppRouterProps {}

const AppRouter: FC<AppRouterProps> = () => {
  return (
    <Suspense fallback={false}>
      <Routes>
        <Route path={paths.home} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={paths.favorites} element={<FavoritesPage />} />
          <Route path={paths.movie + ":id"} element={<MoviesPage />} />
          <Route path={paths.about} element={<AboutPage />} />
          <Route path={paths.contacts} element={<ContactsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
