export const romanToLatin = function (roman) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const current = romanMap[roman[i]];
    const next = romanMap[roman[i + 1]];

    if (current < next) {
      result += next - current; // IV -> 5 - 1 = 4
      i++;
    } else {
      result += current;
    }
  }

  return result;
};

export const latinToRoman = (latin) => {
  const romans = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  const integers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let output = "";

  for (let i = 0; i <= integers.length; i++) {
    while (latin % integers[i] < latin) {
      output = output + romans[i];
      latin = latin - integers[i];
    }
  }
  return output;
};
