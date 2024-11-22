import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { username: null },
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload;
    },
    logout: (state) => {
      state.username = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;