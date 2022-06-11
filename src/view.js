const decEl = document.querySelector("input[name='decimal']");
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
}

export function removeSpan() {
  spanError.style.display = "none";
}
