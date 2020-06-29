const quantityAndAmountOfGoods = document.querySelector('.top-cart-info__item');
const productAddButton = document.querySelector('.product-box__btn');
productAddButton.addEventListener('click', () => {
	e.preventDefault();
	console.log(quantityAndAmountOfGoods);
})























const productBox = document.querySelector('.products-box');
const inputElements = document.getElementsByClassName('qty__item');
const inputElementsArray = Array.from(inputElements);
inputElementsArray.forEach(item => {
	item.min = 0;
});


function filteredByPrice(a, filteredTypes, isInitialCall) {
	const priceItems = filteredTypes || document.querySelectorAll("[data-dish-price]");
	const priceItemsArray = Array.from(priceItems);
	const typeSelect = document.querySelector('#category-select').value;
	if (a != 0) {
		priceItemsArray.forEach(item =>
			item.style.display = 'none'
		)
		const filtered = priceItemsArray.filter(element => +(element.dataset.dishPrice) <= a);
		console.log(filtered);
		filtered.forEach(item =>
			item.style.display = 'flex'
		)
		if (typeSelect && isInitialCall) {
			filteredByType(typeSelect, filtered);
		}
	}
	else {
		priceItemsArray.forEach(item =>
			item.style.display = 'flex'
		)
		if (typeSelect && isInitialCall) {
			filteredByType(typeSelect);
		}
		console.log(priceItemsArray);
	}

};
function filteredByType(a, filtered, isInitialCall) {
	const typeItems = filtered || document.querySelectorAll("[data-dish-type]");
	const typeItemsArray = Array.from(typeItems);
	const priceSelect = document.querySelector('#price-select').value;
	if (a != 0) {
		typeItemsArray.forEach(item =>
			item.style.display = 'none'
		)
		const filteredByType = typeItemsArray.filter(element => +(element.dataset.dishType) == a);
		console.log(filteredByType);
		filteredByType.forEach(item =>
			item.style.display = 'flex'
		)
		if (priceSelect && isInitialCall) {
			filteredByPrice(priceSelect, filteredByType);
		}
	}
	else {
		typeItemsArray.forEach(item =>
			item.style.display = 'flex'
		)
		if (priceSelect && isInitialCall) {
			filteredByPrice(priceSelect);
		}
	};
};
const priceSelect = document.querySelector('#price-select');
priceSelect.addEventListener('change', (e) => {
	e.preventDefault();
	console.log(e.target.value);
	filteredByPrice(e.target.value, null, true);
})
const categorySelect = document.querySelector('#category-select');
categorySelect.addEventListener('change', (e) => {
	e.preventDefault();
	console.log(e.target.value);
	filteredByType(e.target.value, null, true);
})
console.log(inputElements);
console.log(inputElementsArray);