import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import systemSlice from '@/slices/system';
import { apiSlice } from '@/slices/api/apiSlice';

const store = configureStore(
  {
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      system: systemSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
  }
);

setupListeners(store.dispatch);

export default store;


