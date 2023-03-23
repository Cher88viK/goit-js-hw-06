const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.createElement('ul');

ingredients.forEach((ingredient) => {
  let li = document.createElement('li');
  li.textContent = ingredient;
  li.setAttribute('class', 'item')
  ul.appendChild(li);
});

let ingredientsList = document.getElementById('ingredients')
console.log(ingredientsList);
ingredientsList.innerHTML = ul.innerHTML;
console.log(ul);