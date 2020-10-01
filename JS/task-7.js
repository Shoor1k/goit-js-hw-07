const FontSizeControl = document.querySelector(`#font-size-control`);
const textContent = document.querySelector(`#text`);

const onFontSizeControl = FontSizeControl.addEventListener(`input`, (event) => {
  const onfontSize = event.currentTarget.value;
  textContent.style.fontSize = `${onfontSize}px`;
});
