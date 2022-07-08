import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import counterReducer from "../slices/counter";
import userReducer from '../slices/user'
import mySaga from "../saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore(
  {
    reducer: {
      counter: counterReducer,
      user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
  }
);

sagaMiddleware.run(mySaga);

export default store;
