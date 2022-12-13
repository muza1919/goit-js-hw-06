function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChange = document.querySelector('button.change-color');
const body = document.querySelector('body');
const valueColor = document.querySelector('span.color')


btnChange.addEventListener('click', (event) => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  valueColor.textContent = color;
})
