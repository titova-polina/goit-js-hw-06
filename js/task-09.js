function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector("body");
const buttonColor = document.querySelector(".change-color");
const spanText = document.querySelector(".color");
buttonColor.addEventListener("click", () => {
  const colorEl = getRandomHexColor();
  bodyEl.style.backgroundColor = colorEl;
  spanText.textContent = colorEl;
});
