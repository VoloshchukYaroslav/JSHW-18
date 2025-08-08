const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll(".item");

console.log(`У списку ${categoryItems.length} категорії.`);

categoryItems.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const elementsCount = item.querySelectorAll("ul li").length;
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${elementsCount}`);
});

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];
const listRef = document.querySelector("#ingredients");

const addIngredients = ingredients.map((item) => {
  const liRef = document.createElement("li");
  liRef.textContent = item;
  return liRef;
});

istRef.append(...addIngredients);

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const secondLiRef = document.querySelector("#gallery");

const createImgRef = images.map((item) => {
  const itemRef = document.createElement("li");
  const imageRef = document.createElement("img");
  imageRef.src = item.url;
  imageRef.alt = item.alt;
  itemRef.appendChild(imageRef);
  itemRef.classList.add("gallery-item");
  imageRef.classList.add("gallery-img");
  return itemRef;
});

secondLiRef.append(...createImgRef);

const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector("#value");
let counterValue = 0;
decrementBtnRef.addEventListener("click", () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});

incrementBtnRef.addEventListener("click", () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});
