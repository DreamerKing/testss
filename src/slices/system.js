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
    setMenuKey: (state, { payload: { key, keyPath = [] } }) => {
      state.menuKey = key || 'user';
      state.keyPath = [...keyPath]
    }
  },
});


export const { toggleMainMenuVisible, setMenuKey } = systemSlice.actions;
export default systemSlice.reducer;
