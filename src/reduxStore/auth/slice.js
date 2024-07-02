import {createSlice} from "@reduxjs/toolkit";
import {logOutThunk, loginThunk, refreshUserThunk, registerThunk} from "./operation";

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
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUserThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUserThunk.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(logOutThunk.fulfilled, (state) => {
        state.user = null;
        state.token = "";
        state.isLoggedIn = false;
        state.isLoading = false;
        state.isRefreshing = false;
      });
  },
});
export const authReducer = slice.reducer;
