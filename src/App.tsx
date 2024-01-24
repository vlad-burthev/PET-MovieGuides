import { useEffect } from "react";
import AppRouter from "./routes/AppRouter";
import { useAppDispatch } from "./store";
import { setFavorites } from "./store/favoriteSlice/favoriteSlice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      dispatch(setFavorites(JSON.parse(favorites)));
    }
  }, []);

  return <AppRouter />;
}

export default App;
