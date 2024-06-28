import { toDoReducer } from "./todoSlice";
import { filterReducer } from "./filterSlice";
import { configureStore } from "@reduxjs/toolkit";
import { currencyReducer } from "./currencySlice";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "todos",
//   storage,
//   whitelist: ["items"],
// };

// const persistedReducer = persistReducer(persistConfig, toDoReducer);

export const store = configureStore({
  reducer: {
    todos: toDoReducer,
    filter: filterReducer,
    currency: currencyReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export const persistor = persistStore(store);
