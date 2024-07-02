import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "service/todosApi";
// Mango_mango@gmail.com
export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await instance.post("users/signup", credentials);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
