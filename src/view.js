const decEl = document.querySelector("input[name='decimal']");
const binEl = document.querySelector("input[name='binary']");
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

  decEl.value = "";
  binEl.style.outline = "1px solid #DA0000";
}

export function removeSpan() {
  spanError.style.display = "none";
  binEl.style.outline = "";
}
