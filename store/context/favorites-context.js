import { createContext, useState } from "react";

export const FavouritesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavorite: (id) => {},
});

function FavouritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  const addFavourite = (id) => {
    setFavoriteMealIds((prevMealIds) => [...prevMealIds, id]);
  };
  const removeFavorite = (id) => {
    setFavoriteMealIds((prevMealIds) =>
      prevMealIds.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favoriteMealIds,
    addFavourite: addFavourite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContextProvider;
