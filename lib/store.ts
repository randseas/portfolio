import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/slices/counterReducer";

export const createStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
};

// type definitions
export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
