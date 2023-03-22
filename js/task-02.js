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
  var li = document.createElement('li');
  li.innerText = ingredient;
  li.setAttribute('class', 'item')
  ul.appendChild(li);
});

var ingredientsList = document.getElementById('ingredients')
console.log(ingredientsList);
ingredientsList.innerHTML = ul.innerHTML;
console.log(ul);