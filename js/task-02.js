const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsListEl = document.querySelector("#ingredients");

const items = ingredients.map((ingredient) => {
  const listitemEl = document.createElement("li");
  listitemEl.classList.add("item");
  listitemEl.textContent = ingredient;
  return listitemEl;
});

ingredientsListEl.append(...items);
