const list = document.querySelector("#categories");
const items = list.querySelectorAll("li.item");
console.log("Number of categories:", items.length);

items.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("li");
  console.log("Category:", title);
  console.log("Elements:", elements.length);
});
