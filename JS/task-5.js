const nameInputForm = document.querySelector(`#name-input`);
const nameOutput = document.querySelector(`#name-output`);

const handleChangeName = (value) => {
  const userNameInput = value.addEventListener(`input`, (event) => {
    if (event.currentTarget.value !== ``) {
      nameOutput.textContent = event.currentTarget.value;
    } else {
      nameOutput.textContent = `незнакомец`;
    }
  });
  return userNameInput;
};
handleChangeName(nameInputForm);
