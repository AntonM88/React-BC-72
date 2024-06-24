import {combineReducers} from "redux";

const toDoReducer = (state = [], action) => {
  switch (action.type) {
    case "toDo/addToDo":
      return [...state, action.payload];

    case "toDo/deleteToDo":
      return state.filter((toDo) => toDo.id !== action.payload);

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

export const rootReducer = combineReducers({todos: toDoReducer, filter: filterReducer});
