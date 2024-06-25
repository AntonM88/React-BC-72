import {combineReducers, createStore} from "redux";
import {filterReducer} from "./reducer";
import {devToolsEnhancer} from "@redux-devtools/extension";
import { toDoReducer } from "./todoSlice";
export const rootReducer = combineReducers({
  todos: toDoReducer,
  filter: filterReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
