const binEl = document.querySelector("input[name='binary']");
const decEl = document.querySelector("input[name='decimal']");
const buttonEl = document.querySelector("button");
const spanError = document.querySelector(".convert__error");

export function setDecimalInput(value) {
  if (typeof value === "number") {
    decEl.value = value;
    return;
  }
  setSpanError(value);
}

export function setSpanError(value) {
  spanError.style.display = "block";
  spanError.innerHTML = Array.isArray(value)
    ? `${value} não são valores válidos`
    : `valor inválido`;
}

export function removeSpan() {
  spanError.style.display = "none";
}
