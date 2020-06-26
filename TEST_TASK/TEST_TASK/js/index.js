const productBox = document.querySelector('.products-box');
const inputElements = document.getElementsByClassName('qty__item');
const inputElementsArray = Array.from(inputElements);
inputElementsArray.forEach(item => {
	item.min = 0;
});
const breakfastItems = document.getElementsByClassName('breakfast-item');
const breakfastItemsArray = Array.from(breakfastItems);
const garnishItems = document.getElementsByClassName('garnish-item');
const garnishItemsArray = Array.from(garnishItems);
const soupItems = document.getElementsByClassName('soup-item');
const soupItemsArray = Array.from(soupItems);
const allItems = document.getElementsByClassName('product-box__item');
const allItemsArray = Array.from(allItems);

const categorySelect = document.getElementById('category-select');
const priceSelect = document.querySelector('#price-select');
console.log(priceSelect);
if (priceSelect) priceSelect.addEventListener('change', (e) => {
	e.preventDefault();
	console.log(e.target.value);
	if (e.target.value == 0) {
		console.log(allItemsArray);
		allItemsArray.forEach(item => {
			item.setAttribute('class', 'display-flex');
		})
	}
	if (e.target.value == 30) {
		allItemsArray.forEach(item => {
			console.log(item.getElementsByClassName('product-box__item'));
			// if (item.value() >= 30) {
			// 	item.setAttribute('class', 'display-flex');
			// } else {
			// 	item.setAttribute('class', 'display-none');
			// }
		})
	}
})

console.log(inputElements);
console.log(inputElementsArray);