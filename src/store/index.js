import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import systemSlice from '@/slices/system';
import { apiSlice } from '@/slices/api/apiSlice';
import roleReducer from '@/slices/api/role';

const store = configureStore(
  {
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      system: systemSlice,
      role: roleReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
  }
);

setupListeners(store.dispatch);

export default store;


