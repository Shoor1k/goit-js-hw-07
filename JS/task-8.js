const form = document.querySelector(`#controls`);
const box = document.querySelector(`#boxes`);

const numbersCreateElColection = form.children[0];
numbersCreateElColection.addEventListener(`input`, (event) => {
  return event.currentTarget.value;
});

const buttonCreateElColection = form.children[1];
buttonCreateElColection.addEventListener(`click`, createBoxes);

function createBoxes(amout) {
  amout = numbersCreateElColection.value;

  let initial = 30;
  const step = 10;

  for (let i = 0; i < amout; i += 1) {
    const createEl = document.createElement(`div`);
    createEl.style.backgroundColor = `rgb(${getRandomColor(
      255
    )}, ${getRandomColor(255)}, ${getRandomColor(255)})`;

    createEl.style.width = `${initial}px`;
    createEl.style.height = `${initial}px`;

    box.append(createEl);
    initial += step;
  }
}

function getRandomColor(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const colorPicker = {
  red: getRandomColor(255),
  gren: getRandomColor(255),
  blue: getRandomColor(255),
};

const buttonDeleteColection = form.children[2];
buttonDeleteColection.addEventListener(`click`, destroyBoxes);

function destroyBoxes(event) {
  return (box.innerHTML = "");
}
