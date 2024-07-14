import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favoretes",
  initialState: {
    ids: [],
  },
  reducers: {
    addfavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavore: (state, action) => {
      state.ids = state.ids.filter((id) => id !== action.payload.id);
    },
  },
});
export const { addfavorite, removeFavore } = favoritesSlice.actions;
export default favoritesSlice.reducer;