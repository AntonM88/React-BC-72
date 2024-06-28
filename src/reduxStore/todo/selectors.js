import { createSelector } from "@reduxjs/toolkit";

export const selectCurrentTodo = (state) => state.todos.currentTodo;
export const selectTodos = (state) => state.todos.items;
export const selectFilter = (state) => state.filter.value;
export const selectIsLoading = (state) => state.todos.isLoading;
export const selectIsError = (state) => state.todos.isError;
export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
