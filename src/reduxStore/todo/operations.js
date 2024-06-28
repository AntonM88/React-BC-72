// https://667d4741297972455f645a16.mockapi.io/v1/todos

import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://667d4741297972455f645a16.mockapi.io/v1",
});

export const fetchTodos = createAsyncThunk("todos/fetchAll", async (_, thunkAPI) => {
  try {
    const {data} = await instance.get("/todos");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addTodo = createAsyncThunk("todos/addTodo", async (todo, thunkAPI) => {
  try {
    const {data} = await instance.post("/todos", todo);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id, thunkAPI) => {
  try {
    const {data} = await instance.delete(`/todos/${id}`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateTodo = createAsyncThunk("todos/updateTodo", async (todo, thunkAPI) => {
  try {
    const {data} = await instance.put(`/todos/${todo.id}`, todo);
    console.log(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
