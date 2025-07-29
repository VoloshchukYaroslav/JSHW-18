// ===== Завдання 1 =====
const categoriesList = document.querySelectorAll("#categories .item");
console.log(`У списку ${categoriesList.length} категорії.`);

categoriesList.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const itemsCount = category.querySelectorAll("ul li").length;
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${itemsCount}`);
});

// ===== Завдання 2 =====
const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientsList = document.querySelector("#ingredients");

if (ingredientsList) {
  const items = ingredients.map((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    return li;
  });
  ingredientsList.append(...items);
} else {
  console.warn('Елемент з id="ingredients" не знайдено. Пропускаю завдання 2.');
}

// ===== Завдання 3 =====
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

const gallery = document.querySelector("#gallery");

if (gallery) {
  gallery.classList.add("gallery");

  const markup = images
    .map(
      ({ url, alt }) =>
        `<li class="gallery-item"><img src="${url}" alt="${alt}" width="300"></li>`
    )
    .join("");

  gallery.insertAdjacentHTML("beforeend", markup);
} else {
  console.warn('Елемент з id="gallery" не знайдено. Пропускаю завдання 3.');
}
