export const validateRomanNumeral = (value) => {
  const regex = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  return regex.test(value);
};

export const validateLatinNumeral = (value) => {
  const regex = /\d+/;
  return regex.test(value);
};
