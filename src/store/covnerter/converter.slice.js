import { createSlice } from "@reduxjs/toolkit";
import { generateAction, generateBuilderAction } from "../common";

const sliceName = "converter";

const conveterInitialState = {
  mode: "latin2roman",
  latinNumber: 0,
  romanNumber: "",
  isLoading: false,
  hasError: false,
  errorMessage: "",
};

export const convertToRoman = generateAction(sliceName + "/toRoman");
export const convertToLatin = generateAction(sliceName + "/toLatin");

const converter = createSlice({
  name: sliceName,
  initialState: conveterInitialState,
  reducers: {
    setRomanNumber(state, action) {
      state.romanNumber = action.payload;
    },
    setLatinNumber(state, action) {
      state.latinNumber = action.payload;
    },
    setMode(state, action) {
      state.mode = action.payload;
    },
  },
  extraReducers: (builder) => {
    generateBuilderAction(builder, convertToRoman);
    generateBuilderAction(builder, convertToLatin);
  },
});

export const { setRomanNumber, setLatinNumber, setMode } = converter.actions;

export const converterSelector = (state) => state.converter;

export default converter.reducer;
