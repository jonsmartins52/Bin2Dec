import { Bin2Dec } from "./bin2Dec.js";
import { setDecimalInput, removeSpan } from "./view.js";

const buttonEl = document.querySelector("button");
const binEl = document.querySelector("input[name='binary']");

function handleSubmit(event) {
  event.preventDefault();
  const binNumber = binEl.value;
  const decNumber = Bin2Dec(binNumber);
  setDecimalInput(decNumber);
}

buttonEl.addEventListener("click", handleSubmit);
binEl.addEventListener("change", removeSpan);
