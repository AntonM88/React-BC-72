import { createStore } from "redux";
import { toDoReducer } from "./reducer";
import { devToolsEnhancer } from "@redux-devtools/extension";

const enhancer = devToolsEnhancer();

export const store = createStore(toDoReducer, enhancer);
