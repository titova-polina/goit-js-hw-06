const input = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
input.addEventListener("input", () => {
  spanEl.style.fontSize = input.value + "px";
});
