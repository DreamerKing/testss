import { createSlice } from "@reduxjs/toolkit";

export const systemSlice = createSlice({
  name: "system",
  initialState: {
    mainMenuVisible: true,
  },
  reducers: {
    toggleMainMenuVisible: (state) => {
      state.mainMenuVisible = !state.mainMenuVisible;
    },
  },
});


export const { toggleMainMenuVisible } = systemSlice.actions;
export default systemSlice.reducer;
