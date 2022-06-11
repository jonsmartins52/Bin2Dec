export function Bin2Dec(binNum) {
  const value = binNum.trim();
  let typoNumbers;

  typoNumbers = verifyBinary(value);

  if (!numberIsValid(value)) return "Valor inválido.";
  if (typoNumbers.length) return typoNumbers;

  let numElements = value.length - 1;
  let decNumber = 0;

  for (let i = 0; i < value.length; i++) {
    decNumber += value[i] * 2 ** numElements--;
  }

  return decNumber;
}

const numberIsValid = (value) => {
  const validation = [
    itsNotString(value),
    lengthBiggerThanEight(value),
    hasSpecialCaracters(value),
    hasOnlyNumbers(value),
  ];

  let result = validation.some((functionResult) => functionResult);
  return !result;
};

const itsNotString = (value) => typeof value !== "string";

const lengthBiggerThanEight = (value) => value.length > 8;

const hasSpecialCaracters = (value) =>
  /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value);

const hasOnlyNumbers = (value) => isNaN(parseFloat(value));

function verifyBinary(value) {
  const decNumbers = [];
  for (let i = 0; i < value.length; i++) {
    if (parseFloat(value[i]) > 1) decNumbers.push(value[i]);
  }

  return decNumbers;
}
