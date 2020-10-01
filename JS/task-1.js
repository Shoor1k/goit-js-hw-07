console.log(`__________________________TASK -- 1____________________________ `);

const allCategories = document.querySelectorAll(`.item`);
console.log(`В списке ${allCategories.length} категории`);

for (let i = 0; i < allCategories.length; i += 1) {
  let curentCategories = allCategories[i].firstElementChild.textContent;

  let lengthCurentCategories =
    allCategories[i].lastElementChild.children.length;

  console.log(`Категория: ${curentCategories}`);
  console.log(`Количество елементов: ${lengthCurentCategories}`);
}
