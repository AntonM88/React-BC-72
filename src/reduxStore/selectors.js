export const selectCurrentTodo = (state) => state.todos.currentTodo;
export const selectTodos = (state) => state.todos.items;
export const selectFilter = (state) => state.filter.value;
export const selectIsLoading = (state) => state.todos.isLoading;
export const selectIsError = (state) => state.todos.isError;
