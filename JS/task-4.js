const counterValue = document.querySelector(`#value`);
const buttuncouter = document.querySelectorAll(`#counter button`);

const handleButtonDecrementClick = (value) => {
  const decrement = buttuncouter[0].addEventListener(`click`, (event) => {
    value.textContent--;
  });

  return decrement;
};
const handleButtonIncrementClick = (value) => {
  const increment = buttuncouter[1].addEventListener(`click`, (event) => {
    value.textContent++;
  });

  return increment;
};

handleButtonDecrementClick(counterValue);
handleButtonIncrementClick(counterValue);
