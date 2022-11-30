import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./favoriteSlice";

const store = configureStore({
  reducer: {
    favoriteMeals: favoriteSlice,
  },
});

export default store;
