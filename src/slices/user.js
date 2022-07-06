import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: {},
  },
  reducers: {
    login: (state, { payload}) => {
      state.currentUser = payload;
    },
  },
});


export const { login } = userSlice.actions;
export default userSlice.reducer;
