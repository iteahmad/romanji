import { createAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";

export const generateAction = (actionKey) => {
  const action = createAction(actionKey);
  const pending = createAction(actionKey + ".pending");
  const fullfilled = createAction(actionKey + ".fulfilled");
  const rejected = createAction(actionKey + ".rejected");

  return {
    action,
    pending,
    fullfilled,
    rejected,
  };
};

export const sagaWithErrorHandler = (saga, errorHandler, ...args) =>
  function* (action) {
    try {
      yield call(saga, ...args, action);
    } catch (err) {
      if (err?.response && errorHandler) {
        const errorData = err?.response?.data;
        yield put(errorHandler(errorData?.errors || errorData?.message || ""));
      }
    }
  };

export const generateBuilderAction = (builder, action) => {
  builder
    .addCase(action.pending, (state) => {
      console.log("pending");
      state.isLoading = true;
      state.hasError = false;
    })
    .addCase(action.fullfilled, (state) => {
      console.log("fullfilled");
      state.isLoading = false;
      state.hasError = false;
    })
    .addCase(action.rejected, (state, { payload }) => {
      console.log("rejected");
      state.isLoading = false;
      state.hasError = true;
      state.errorMessage = payload;
    });
};
