export function Bin2Dec(binNum) {
  const value = binNum.trim();
  let typoNumbers;

  typoNumbers = verifyBinary(value);

  if (!verifyNumber(value)) return "Valor inválido.";
  if (typoNumbers.length) return typoNumbers;

  let numElements = value.length - 1;
  let decNumber = 0;

  for (let i = 0; i < value.length; i++) {
    decNumber += value[i] * 2 ** numElements--;
  }

  return decNumber;
}

const verifyNumber = (value) => {
  if (!verifyType(value)) return false;
  if (verifyLength(value)) return false;
  if (onlyNumbers(value)) return false;
  return true;
};

const verifyType = (value) => typeof value === "string";

const verifyLength = (value) => value.length > 8;

const onlyNumbers = (value) => isNaN(parseFloat(value));

function verifyBinary(value) {
  const decNumbers = [];
  for (let i = 0; i < value.length; i++) {
    if (parseFloat(value[i]) > 1) decNumbers.push(value[i]);
  }

  return decNumbers;
}
