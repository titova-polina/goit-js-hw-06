let counterValue = 0;
const text = document.querySelector("span#value");
const checkBtnUp = document.querySelector('[data-action="increment"]');
checkBtnUp.addEventListener("click", () => {
  text.textContent = counterValue += 1;
});
const checkBtnDown = document.querySelector('[data-action="decrement"]');
checkBtnDown.addEventListener("click", () => {
  text.textContent = counterValue -= 1;
});
