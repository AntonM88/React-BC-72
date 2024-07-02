import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance, setAuthHeader} from "service/todosApi";
import {clearAuthHeader} from "../../service/todosApi";

// Mango_mango@gmail.com
export const registerThunk = createAsyncThunk("auth/register", async (credentials, thunkApi) => {
  try {
    const {data} = await instance.post("users/signup", credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const loginThunk = createAsyncThunk("auth/login", async (credentials, thunkApi) => {
  try {
    const {data} = await instance.post("users/login", credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUserThunk = createAsyncThunk("auth/refresh", async (_, thunkApi) => {
  const {auth} = thunkApi.getState();

  if (!auth.token) {
    return thunkApi.rejectWithValue("Not found token");
  }
  try {
    setAuthHeader(auth.token);
    const {data} = await instance.get("users/me");
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logOutThunk = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    await instance.post("users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
