import { call, put, takeEvery } from "redux-saga/effects";
import {
  convertToRomanService,
  convertToLatinService,
} from "../../api/requests";

import { sagaWithErrorHandler } from "../common";
import {
  convertToRoman,
  convertToLatin,
  setLatinNumber,
  setRomanNumber,
} from "./converter.slice";

function* handleConvertToRoman(action) {
  yield put(convertToRoman.pending(true));
  const { data } = yield call(convertToRomanService, action.payload);
  yield put(setRomanNumber(data));
  yield put(convertToLatin.fullfilled(true));
}

function* handleConvertToLatin(action) {
  yield put(convertToLatin.pending(true));
  const { data } = yield call(convertToLatinService, action.payload);
  yield put(setLatinNumber(data));
  yield put(convertToLatin.fullfilled(true));
}

function* converterWatcher() {
  yield takeEvery(
    convertToRoman.action.type,
    sagaWithErrorHandler(handleConvertToRoman, convertToRoman.rejected)
  );
  yield takeEvery(
    convertToLatin.action.type,
    sagaWithErrorHandler(handleConvertToLatin, convertToLatin.rejected)
  );
}

export default converterWatcher;
