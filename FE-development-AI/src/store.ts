import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./services/api";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
