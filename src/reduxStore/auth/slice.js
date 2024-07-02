import { createSlice } from "@reduxjs/toolkit";
import { registerThunk } from "./operation";

const initialState = {
  user: null,
  token: "",
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(registerThunk.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedIn = true;
    });
  },
});
export const authReducer = slice.reducer;
