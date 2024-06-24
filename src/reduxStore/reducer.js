import { combineReducers } from "redux";
const initialStateTodos = {
  items: [],
  currentTodo: null,
};
const toDoReducer = (state = initialStateTodos, action) => {
  switch (action.type) {
    case "toDo/addToDo":
      return { ...state, items: [...state.items, action.payload] };

    case "toDo/deleteToDo":
      return {
        ...state,
        items: state.items.filter((toDo) => toDo.id !== action.payload),
      };
    case "todo/changeTodo":
      return {
        items: state.items.map((todo) =>
          todo.id === state.currentTodo.id
            ? { ...todo, text: action.payload }
            : todo
        ),
        currentTodo: null,
      };
    case "todo/setCurrentTodo":
      return { ...state, currentTodo: action.payload };
    default:
      return state;
  }
};

const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "filter/setFilter":
      return action.payload;

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  todos: toDoReducer,
  filter: filterReducer,
});
