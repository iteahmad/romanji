import { romanToLatin, latinToRoman } from "./helper";
export const convertToRomanService = (value) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      const result = latinToRoman(value);
      resolve({ data: result });
    }, 1000)
  );
};

export const convertToLatinService = (value) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: romanToLatin(value) }), 1000)
  );
};
