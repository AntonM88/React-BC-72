// https://667d4741297972455f645a16.mockapi.io/v1/todos

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://667d4741297972455f645a16.mockapi.io/v1",
});

export const fetchTodos = createAsyncThunk(
  "todos/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("/todos");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
