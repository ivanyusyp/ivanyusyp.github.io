const search = document.getElementById("searchBtn");
const output = document.getElementById("searchOutput");
const categoriesSelect = document.getElementById('categories');
const bodyStyles = document.querySelector('#bodystyles');
const API_KEY = 'wF83X8QPO0vZqpQ50l8OfCcdjGSNU74TbPOTADl3';
const BASE_URL = 'https://developers.ria.com/auto/';
const preloader = document.querySelector('#loader');
const currentUrl = window.location.href;
let carBlockElements;
const addImgToCarBlocks = ({ photoData: { seoLinkB } }) => {
	// console.log('photoData, ', seoLinkB);
	const imgSrc = seoLinkB;
	const img = document.createElement('img');
	img.setAttribute('class', 'cars__img');
	img.setAttribute('src', `${imgSrc}`);
	img.setAttribute('width', '240px');
	img.setAttribute('height', 'auto');
	carBlockElements.appendChild(img);

}
const addTitleAndPrice = ({ title, USD }) => {
	// console.log('title', title, 'USD', USD);
	const carName = document.createElement('p');
	const carCost = document.createElement('p');
	carCost.innerText = 'Вартість: ' + '$' + USD;
	carCost.setAttribute('class', 'cars__cost');
	carName.innerText = title;
	carName.setAttribute("class", "cars__title");
	carBlockElements.appendChild(carName);
	carBlockElements.appendChild(carCost);
}
const addRaceAndYear = ({ autoData: { raceInt, year } }) => {
	// console.log('race', raceInt, "year", year);
	const raceValue = document.createElement('p');
	raceValue.setAttribute('class', 'cars__race');
	raceValue.innerText = 'Пробіг: ' + raceInt + "тис. км.";
	carBlockElements.appendChild(raceValue);
	const yearOfManufacture = document.createElement('p');
	yearOfManufacture.setAttribute('class', 'cars__year');
	yearOfManufacture.innerText = "Рік виготовлення: " + year + "p.";
	carBlockElements.appendChild(yearOfManufacture);
}
const createContainerBlocks = ({ secureKey, ...data }) => {
	// console.log('userId', secureKey);
	const carBlock = document.createElement('div');
	carBlock.setAttribute('class', 'cars__blocks');
	carBlock.setAttribute('id', `${secureKey}`);
	output.appendChild(carBlock);
	carBlockElements = document.getElementById(`${secureKey}`);
	addImgToCarBlocks(data);
	addTitleAndPrice(data);
	addRaceAndYear(data);
}
const fetchCarDataById = (item) => {
	fetch(`${BASE_URL}info?api_key=${API_KEY}&auto_id=${item}`)
		.then(function (response) { return response.json(); })
		.then((data) => {
			createContainerBlocks(data);
			// console.log(data, "DATA_FOR_EACH");
		})
}
const fetchForCarsCategories = () => {
	fetch(`${BASE_URL}categories/?api_key=${API_KEY}`)
		.then(function (response) { return response.json(); })
		.then((data) => {
			console.log(data, "DATA_FOR_CATEGORIES");
		})
}
const setOptionForCategories = ({ name, value }) => {

	const categoriesOption = document.createElement('option');
	categoriesOption.setAttribute('name', `${name}`);
	categoriesOption.setAttribute('value', `${value}`);
	categoriesOption.innerText = name;
	categoriesSelect.appendChild(categoriesOption);
}
const fetchOnChangeCategories = (e) => {
	fetch(`${BASE_URL}search?api_key=${API_KEY}&category_id=${e}`)
		.then(function (response) { return response.json(); })
		.then(function (data) {
			const dataResult = data.result;
			const resultSearchResult = dataResult.search_result;
			const autoIdArray = resultSearchResult.ids;
			autoIdArray.forEach(item => {
				fetchCarDataById(item);
			})
		})
		.finally(() => {
			preloader.style.display = 'none';
		})
}
const fetchOnChangeBodyStyles = (e) => {
	fetch(`${BASE_URL}search?api_key=${API_KEY}&category_id=${e}&bodystyle__id=${e}`)
}
const fetchForBodyStyles = (e) => {
	fetch(`${BASE_URL}categories/${e}/bodystyles?api_key=${API_KEY}`)
		.then(function (response) { return response.json(); })
		.then((data) => {
			data.forEach(item => {
				setOptionForBodyStyles(item);
			})
			console.log(data, "DATA_FOR_BODYSTYLES");
		})
}

const setOptionForBodyStyles = ({ name, value }) => {
	const bodyStylesOption = document.createElement('option');
	bodyStylesOption.setAttribute('name', `${name}`);
	bodyStylesOption.setAttribute('value', `${value}`);
	bodyStylesOption.innerText = name;
	bodyStyles.appendChild(bodyStylesOption);
}

window.onload = (e) => {
	fetch(`${BASE_URL}search?api_key=${API_KEY}&category_id=1`)
		.then(function (response) { return response.json(); })
		.then(function (data) {
			const dataResult = data.result;
			const resultSearchResult = dataResult.search_result;
			const autoIdArray = resultSearchResult.ids;
			autoIdArray.forEach(item => {
				fetchCarDataById(item);
			})
		})
	fetch(`${BASE_URL}categories/?api_key=${API_KEY}`)
		.then(function (response) { return response.json(); })
		.then((data) => {
			data.forEach(item => {
				setOptionForCategories(item);
			})
		})
}
if (categoriesSelect) categoriesSelect.addEventListener('change', (e) => {
	preloader.style.display = "block";
	output.innerHTML = '';
	bodyStyles.innerHTML = "";
	fetchOnChangeCategories(e.target.value);
	console.log(e.target.value);
	fetchForBodyStyles(e.target.value);
	console.log(currentUrl, '===================CURRENT URL========================');
})
if (bodyStyles) bodyStyles.addEventListener('change', (e) => {
	preloader.style.display = "block";
	output.innerHTML = '';
	bodyStyles.innerHTML = "";
	// fetch(`${BASE_URL}search?api_key=${API_KEY}&category_id=1&bodystyle__id=3`)
	// 	.then(function (response) { return response.json(); })
	// 	.then((data) => {
	// 		console.log(data, "DATA_FOR_BODYSTYLE3");
	// 	})
})
