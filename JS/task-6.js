const inputTextArea = document.querySelector(`#validation-input`);
console.log(inputTextArea);

const onFocusInputTextArea = inputTextArea.addEventListener(`blur`, (event) => {
  console.log(event.currentTarget.value.length);
  if (event.currentTarget.value.length == inputTextArea.dataset.length) {
    inputTextArea.classList.add(`valid`);
    inputTextArea.classList.remove(`invalid`);
    // inputTextArea.setAttribute(`id`, `validation-input .valid`);
  } else if (event.currentTarget.value.length == "") {
    inputTextArea.classList.remove(`invalid`, `valid`);
  } else {
    inputTextArea.classList.add(`invalid`);
    inputTextArea.classList.remove(`valid`);
  }
});
