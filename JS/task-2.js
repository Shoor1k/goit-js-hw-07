console.log(`__________________________TASK -- 2____________________________ `);
const listIngredients = document.querySelector(`#ingredients`);
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
let resault = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const ingredient = document.createElement(`li`);
  ingredient.textContent = ingredients[i];

  resault.push(ingredient);
}

listIngredients.append(...resault);
