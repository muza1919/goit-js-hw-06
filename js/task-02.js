const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredList = document.querySelector('#ingredients');
const arr = [];

ingredients.forEach(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.className = 'item';
  arr.push(itemEl);
});
ingredList.append(...arr);
