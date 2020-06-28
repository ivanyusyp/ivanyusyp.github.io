const productBox = document.querySelector('.products-box');
const inputElements = document.getElementsByClassName('qty__item');
const inputElementsArray = Array.from(inputElements);
inputElementsArray.forEach(item => {
	item.min = 0;
});
let priceTargetValue,
	categoryTargetValue;

const categorySelect = document.querySelector('#category-select');
const priceSelect = document.querySelector('#price-select');
console.log(priceSelect);
const filteredByPrice = (priceTargetValue) => {
	const priceItems = document.querySelectorAll("[data-dish-price]");
	const priceItemsArray = Array.from(priceItems);
	if (priceTargetValue != 0) {
		priceItemsArray.forEach(item =>
			item.style.display = 'none'
		)
		const filtered = priceItemsArray.filter(element => +(element.dataset.dishPrice) <= priceTargetValue);
		console.log(filtered);
		filtered.forEach(item =>
			item.style.display = 'flex'
		)
	}
	else {
		priceItemsArray.forEach(item =>
			item.style.display = 'flex'
		)
		console.log(priceItemsArray);
	}
};
const filteredByType = (categoryTargetValue) => {
	const typeItems = document.querySelectorAll("[data-dish-type]");
	const typeItemsArray = Array.from(typeItems);
	if (categoryTargetValue != 0) {
		typeItemsArray.forEach(item =>
			item.style.display = 'none'
		)
		const filtered = typeItemsArray.filter(element => +(element.dataset.dishType) == categoryTargetValue);
		console.log(filtered);
		filtered.forEach(item =>
			item.style.display = 'flex'
		)
	}
	else {
		typeItemsArray.forEach(item =>
			item.style.display = 'flex'
		)
		console.log(typeItemsArray);
	}
};
if (priceSelect) priceSelect.addEventListener('change', (e) => {
	e.preventDefault();
	console.log(e.target.value);
	priceTargetValue = e.target.value;
	filteredByPrice(priceTargetValue);
	return priceTargetValue;
})
if (categorySelect) categorySelect.addEventListener('change', (e) => {
	e.preventDefault();
	console.log(e.target.value);
	categoryTargetValue = e.target.value;
	filteredByType(categoryTargetValue);
	return categoryTargetValue;
})
console.log(inputElements);
console.log(inputElementsArray);