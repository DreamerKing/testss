import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
// import createSagaMiddleware from "redux-saga";
import systemSlice from '@/slices/system';
// import counterReducer from "@/slices/counter";
import userReducer from '@/slices/user';
import { apiSlice } from '@/slices/api/apiSlice';

console.log(apiSlice, 'apiSlice');
// import mySaga from "@/saga";
// import { pokemonApi } from "@/services/pokemon";

// const sagaMiddleware = createSagaMiddleware();

const store = configureStore(
  {
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      // [pokemonApi.reducerPath]: pokemonApi.reducer,
      // counter: counterReducer,
      system: systemSlice,
      user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
  }
);

setupListeners(store.dispatch);
// sagaMiddleware.run(mySaga);

export default store;


