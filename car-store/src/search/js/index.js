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
	bodyStylesTargetValue,
	idAuto;
const addImgToCarBlocks = ({ photoData: { seoLinkB }, autoId }) => {
	// console.log('photoData, ', seoLinkB);
	const imgSrc = seoLinkB;
	const img = document.createElement('img');
	img.setAttribute('class', 'cars__img');
	img.setAttribute('src', `${imgSrc}`);
	img.setAttribute('width', '100%');
	img.setAttribute('height', 'auto');
	img.setAttribute('id', autoId);
	carBlockElements.appendChild(img);
}
const addTitleAndPrice = ({ title, USD, autoId }) => {
	// console.log('title', title, 'USD', USD);
	const carName = document.createElement('p');
	const carCost = document.createElement('p');
	carCost.innerText = 'Вартість: ' + '$' + USD;
	carCost.setAttribute('class', 'cars__cost');
	carCost.setAttribute('id', autoId);
	carName.innerText = title;
	carName.setAttribute("class", "cars__title");
	carName.setAttribute('id', autoId);
	carBlockElements.appendChild(carName);
	carBlockElements.appendChild(carCost);
}
const addRaceAndYear = ({ raceInt, year, autoId }) => {
	// console.log('race', raceInt, "year", year);
	const raceValue = document.createElement('p');
	raceValue.setAttribute('class', 'cars__race');
	raceValue.setAttribute('id', autoId);
	raceValue.innerText = 'Пробіг: ' + raceInt + "тис. км.";
	carBlockElements.appendChild(raceValue);
	const yearOfManufacture = document.createElement('p');
	yearOfManufacture.setAttribute('class', 'cars__year');
	yearOfManufacture.setAttribute('id', autoId);
	yearOfManufacture.innerText = "Рік виготовлення: " + year + "p.";
	carBlockElements.appendChild(yearOfManufacture);
}
const createContainerBlocks = ({ autoData: { autoId, ...autodata }, ...data }) => {
	// console.log('userId', autoId);
	const carBlock = document.createElement('div');
	carBlock.setAttribute('class', 'cars__blocks');
	carBlock.setAttribute('id', `${autoId}`);
	output.appendChild(carBlock);
	carBlockElements = document.getElementById(`${autoId}`);
	// console.log(carBlock);
	carBlock.addEventListener('click', (e) => {
		window.open('./car.about.html', '_blank');
		// console.log(e.target.id, '=========CLICKED=====================');
		localStorage.setItem('autoId', e.target.id);
		localStorage.removeItem('autoIds');
	})
	addImgToCarBlocks({ ...data, autoId });
	addTitleAndPrice({ ...data, autoId });
	console.log('========================', { ...autodata, autoId });
	addRaceAndYear({ ...autodata, autoId });
	return carBlockElements;
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
			console.log(data, "DATA_FOR_EACH");
		})
}
const fetchForCarsCategories = (e) => {
	fetch(`${BASE_URL}categories/?api_key=${API_KEY}`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			data.forEach(item => {
				setOptionForCategories(item);
			})
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
const fetchForModels = (categoriesTargetValue, e) => {
	fetch(`${BASE_URL}categories/${categoriesTargetValue}/marks/${e}/models?api_key=${API_KEY}`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			data.forEach(item => {
				console.log(data, '================================DATA FOR MODELS=========================');
				setOptionsForModels(item);
			})
		})
}
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
const setOptionsForModels = ({ name, value }) => {
	const modelsOptions = document.createElement('option');
	modelsOptions.setAttribute('name', `${name}`);
	modelsOptions.setAttribute('value', `${value}`);
	modelsOptions.innerText = name;
	const carModels = document.querySelector('#models');
	carModels.appendChild(modelsOptions);
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
const fetchOnChangeModels = (stringUrlParams) => {
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
	fetchForCarsCategories();
}
if (categoriesSelect) categoriesSelect.addEventListener('change', (e) => {
	preloader.style.display = "block";
	output.innerHTML = '';
	categoriesTargetValue = e.target.value;
	fetchOnChangeCategories(e.target.value);
	urlParams.set('category_id', categoriesTargetValue);
	const stringUrlParams = urlParams.toString();
	history.pushState({}, '', '?' + stringUrlParams);
	console.log(e.target.value, '==========================TARGET VALUE=================');
	// CHANGE BODY STYLES
	if (e.target.value === '') {
		bodyStyles.innerHTML = '';
		const emptyOptionBodyStyle = document.createElement('option');
		emptyOptionBodyStyle.innerText = 'Оберіть тип транспорту';
		emptyOptionBodyStyle.setAttribute('value', '');
		bodyStyles.appendChild(emptyOptionBodyStyle);
	} else {
		bodyStyles.innerHTML = '';
		const emptyOptionBodyStyles = document.createElement('option');
		emptyOptionBodyStyles.innerText = 'Оберіть';
		emptyOptionBodyStyles.setAttribute('value', '');
		bodyStyles.appendChild(emptyOptionBodyStyles);
		fetchForBodyStyles(e.target.value);
	}
	// CHANGE CAR BRANDS
	if (e.target.value === "") {
		carBrands.innerHTML = '';
		const emptyOptionMark = document.createElement('option');
		emptyOptionMark.innerText = 'Оберіть тип транспорту';
		carBrands.appendChild(emptyOptionMark);
	} else {
		carBrands.innerHTML = '';
		const emptyOptionMarks = document.createElement('option');
		emptyOptionMarks.innerText = 'Оберіть';
		carBrands.appendChild(emptyOptionMarks);
		fetchForMarks(e.target.value);
	}

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
	fetchForModels(categoriesTargetValue, marksTargetValue);
	fetchOnChangeMarks(stringUrlParams);
	return marksTargetValue;
}) 
