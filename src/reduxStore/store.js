import { configureStore } from "@reduxjs/toolkit";
import { toDoReducer } from "./todo/todoSlice";
import { filterReducer } from "./filter/filterSlice";
import { currencyReducer } from "./currency/currencySlice";
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
