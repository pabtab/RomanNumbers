const romanNumbers = {
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};

export const convertToDecimal = (romanNum) => {
  let numberResult = 0;
  const romanNumber = romanNum.toUpperCase();

  if (typeof romanNumber !== "string") throw new Error("Please add string roman number");
  if (!/^(CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(romanNumber))
    throw new Error("Insert a valid roman number");

  for (let i = 0; i < romanNumber.length; i++) {
    const firstChar = romanNumber[i];
    const nextChar = romanNumber[i + 1];

    if (firstChar && nextChar && romanNumbers[firstChar] < romanNumbers[nextChar]) {
      // It means is a 2 value number
      numberResult += romanNumbers[nextChar] - romanNumbers[firstChar];
      i++;
    } else {
      // It is a single roman number or its the end
      numberResult += romanNumbers[firstChar];
    }
  }

  return numberResult;
};

const result = convertToDecimal("XCII");
console.log(result);
