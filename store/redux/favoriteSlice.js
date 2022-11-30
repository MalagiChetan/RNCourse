import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorites: (state, action) => {
      state.ids.push(action.payload);
    },
    removeFavorites: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload), 1);
    },
  },
});

export default favoriteSlice.reducer;
export const { addFavorites, removeFavorites } = favoriteSlice.actions;
