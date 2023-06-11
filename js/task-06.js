const input = document.querySelector("#validation-input");
input.addEventListener("blur", onTextBlur);
function onTextBlur() {
  const textEl = input.value.trim();
  if (textEl.length === Number(input.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
