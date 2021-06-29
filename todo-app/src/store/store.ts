import { configureStore } from "@reduxjs/toolkit";

import { TodoReducer } from "./todoSlice";

const store = configureStore({
  reducer: { todo: TodoReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootStateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

export default store;
