
const search = document.getElementById("searchBtn");
const output = document.getElementById("searchOutput");
const categoriesSelect = document.getElementById('categories');
const bodyStyles = document.querySelector('#bodystyles');
const carBrands = document.querySelector('#marks');
const API_KEY = 'wF83X8QPO0vZqpQ50l8OfCcdjGSNU74TbPOTADl3';
const BASE_URL = 'https://developers.ria.com/auto/';
const preloader = document.querySelector('#loader');
const urlParams = new URLSearchParams(window.location.search);
let carBlockElements,
	categoriesTargetValue,
	bodyStylesTargetValue;
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
const forEmptyResult = () => {
	const emptyResult = document.createElement('p');
	emptyResult.setAttribute('class', 'empty-message');
	emptyResult.innerText = "За вашим запитом нічого не знайдено.";
	output.appendChild(emptyResult);
}
const fetchCarDataById = (item) => {
	fetch(`${BASE_URL}info?api_key=${API_KEY}&auto_id=${item}`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			createContainerBlocks(data);
			// console.log(data, "DATA_FOR_EACH");
		})
}
const fetchForCarsCategories = () => {
	fetch(`${BASE_URL}categories/?api_key=${API_KEY}`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data, "DATA_FOR_CATEGORIES");
		})
}
const fetchForBodyStyles = (e) => {
	fetch(`${BASE_URL}categories/${e}/bodystyles?api_key=${API_KEY}`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			data.forEach(item => {
				setOptionForBodyStyles(item);
			})
			console.log(data, "DATA_FOR_BODYSTYLES");
		})
}
const fetchForMarks = (e) => {
	fetch(`${BASE_URL}categories/${e}/marks?api_key=${API_KEY}`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			data.forEach(item => {
				setOptionForMarks(item);
			})
			console.log(data, '==================================DATA FOR MARKS=======================');
		})
}
// const fetchForModels = (e) => {
// 	fetch(`${BASE_URL}categories/${e}/marks/${e}/_group?api_key=${API_KEY}`)
// 		.then((response) => {
// 			return response.json();
// 		})
// 		.then((data) => {
// 			data.forEach(item => {
// 				setOptionsForModels(item);
// 			})
// 			console.log(data, '================================DATA FOR MODELS=========================');
// 		})
// }
const setOptionForCategories = ({ name, value }) => {
	const categoriesOption = document.createElement('option');
	categoriesOption.setAttribute('name', `${name}`);
	categoriesOption.setAttribute('value', `${value}`);
	categoriesOption.innerText = name;
	categoriesSelect.appendChild(categoriesOption);
}
const setOptionForBodyStyles = ({ name, value }) => {
	const bodyStylesOption = document.createElement('option');
	bodyStylesOption.setAttribute('name', `${name}`);
	bodyStylesOption.setAttribute('value', `${value}`);
	bodyStylesOption.innerText = name;
	bodyStyles.appendChild(bodyStylesOption);
}
const setOptionForMarks = ({ name, value }) => {
	const marksOptions = document.createElement('option');
	marksOptions.setAttribute('name', `${name}`);
	marksOptions.setAttribute('value', `${value}`);
	marksOptions.innerText = name;
	carBrands.appendChild(marksOptions);
}
const fetchOnChangeCategories = (e) => {
	fetch(`${BASE_URL}search?api_key=${API_KEY}&category_id=${e}`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			const dataResult = data.result;
			const resultSearchResult = dataResult.search_result;
			const count = resultSearchResult.count;
			if (count === 0) {
				forEmptyResult();
			} else {
				const autoIdArray = resultSearchResult.ids;
				autoIdArray.forEach(item => {
					fetchCarDataById(item);
				})
			}
		})
		.finally(() => {
			preloader.style.display = 'none';
		})
}
const fetchOnChangeBodyStyles = (stringUrlParams) => {
	fetch(`${BASE_URL}search?api_key=${API_KEY}&${stringUrlParams}`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			const dataResult = data.result;
			const resultSearchResult = dataResult.search_result;
			const count = resultSearchResult.count;
			if (count === 0) {
				forEmptyResult();
			} else {
				const autoIdArray = resultSearchResult.ids;
				autoIdArray.forEach(item => {
					fetchCarDataById(item);
				})
			}
		})
		.finally(() => {
			preloader.style.display = 'none';
		})
}
const fetchOnChangeMarks = (stringUrlParams) => {
	fetch(`${BASE_URL}search?api_key=${API_KEY}&${stringUrlParams}`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			const dataResult = data.result;
			const resultSearchResult = dataResult.search_result;
			const count = resultSearchResult.count;
			if (count === 0) {
				forEmptyResult();
			} else {
				const autoIdArray = resultSearchResult.ids;
				autoIdArray.forEach(item => {
					fetchCarDataById(item);
				})
			}
		})
		.finally(() => {
			preloader.style.display = 'none';
		})
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
	categoriesTargetValue = e.target.value;
	urlParams.set('category_id', categoriesTargetValue);
	const stringUrlParams = urlParams.toString();
	history.pushState({}, '', '?' + stringUrlParams);
	fetchOnChangeCategories(e.target.value);
	console.log(e.target.value);
  bodyStyles.innerHTML = '';
  const emptyOption = document.createElement('option');
	emptyOption.innerText ='Оберіть';
  bodyStyles.appendChild(emptyOption);
	fetchForBodyStyles(e.target.value);
	fetchForMarks(categoriesTargetValue);
	return categoriesTargetValue;
})
if (bodyStyles) bodyStyles.addEventListener('change', (e) => {
	e.preventDefault();
	console.log(categoriesTargetValue);
	console.log(e.target.value);
	preloader.style.display = "block";
	output.innerHTML = '';
	bodyStylesTargetValue = e.target.value;
	// urlParams.delete('marka_id');
	urlParams.set('bodystyle', bodyStylesTargetValue);
	const stringUrlParams = urlParams.toString();
	console.log(stringUrlParams, '=============STRING==============');
	history.pushState({}, '', '?' + stringUrlParams);
	fetchOnChangeBodyStyles(stringUrlParams);
	return bodyStylesTargetValue;
})
if (carBrands) carBrands.addEventListener('change', (e) => {
	e.preventDefault();
	preloader.style.display = "block";
	output.innerHTML = '';
	marksTargetValue = e.target.value;
	console.log(marksTargetValue, "===================MARKS TAR VAL================");
	// urlParams.delete('bodystyle');
	urlParams.set('marka_id', marksTargetValue);
	const stringUrlParams = urlParams.toString();
	console.log(stringUrlParams, '=================URL PARAMS===================');
	fetchOnChangeMarks(stringUrlParams);
	return marksTargetValue;
}) 
