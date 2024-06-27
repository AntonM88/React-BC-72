import {createSlice} from "@reduxjs/toolkit";
import {fetchTodos, addTodo, deleteTodo, updateTodo} from "./operations";
const initialState = {
  items: [],
  currentTodo: null,
  isLoading: false,
  isError: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setCurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.items = state.items.map((item) =>
          item.id === state.currentTodo.id ? {...action.payload} : item
        );
        state.currentTodo = null;
      })

      .addMatcher(
        (action) => action.type.endsWith("pending"),
        (state) => {
          state.isLoading = true;
          state.isError = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("fulfilled"),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("rejected"),
        (state, action) => {
          state.isLoading = false;
          state.isError = action.payload;
        }
      );
  },
});
export const {setCurrentTodo} = todoSlice.actions;
export const toDoReducer = todoSlice.reducer;
