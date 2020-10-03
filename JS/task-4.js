let counterValue = 0;
const textAreaVelue = document.querySelector(`#value`);
const buttuncouter = document.querySelectorAll(`#counter button`);

const decrement = () => {
  textAreaVelue.textContent--;
  counterValue = textAreaVelue.textContent;
  return counterValue;
};

const increment = () => {
  textAreaVelue.textContent++;
  counterValue = textAreaVelue.textContent;
  return counterValue;
};

buttuncouter[0].addEventListener(`click`, decrement);
buttuncouter[1].addEventListener(`click`, increment);
