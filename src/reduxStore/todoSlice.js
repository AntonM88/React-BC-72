import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  currentTodo: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === state.currentTodo.id
          ? { ...state.currentTodo, text: action.payload }
          : item
      );
      state.currentTodo = null;
    },
    setCurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
  },
});
export const { addTodo, deleteTodo, updateTodo, setCurrentTodo } =
  todoSlice.actions;
export const toDoReducer = todoSlice.reducer;
