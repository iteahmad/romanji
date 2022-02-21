import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import converterReducer from "./covnerter/converter.slice";
import converterWatcher from "./covnerter/converter.saga";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    converter: converterReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(converterWatcher);

export default store;
