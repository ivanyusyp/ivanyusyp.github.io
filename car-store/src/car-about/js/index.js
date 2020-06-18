import * as $ from 'jquery';
$(document).ready(function () {
	const API_KEY = 'wF83X8QPO0vZqpQ50l8OfCcdjGSNU74TbPOTADl3';
	const BASE_URL = 'https://developers.ria.com/auto/';
	const AUTO_ID = localStorage.getItem('autoId');
	$(document).ready(() => {
		fetchForCarAbout(AUTO_ID);
		fetchForCarPhotos(AUTO_ID);
	});

	// $('#about-car-title').click((e) => {
	// 	e.preventDefault();
	// 	fetchForCarAbout(AUTO_ID);
	// });
	// $('#about-car-img').click(function (e) {
	// 	e.preventDefault();
	// 	fetchForCarPhotos(AUTO_ID);
	// });
	const fetchForCarAbout = (AUTO_ID) => {
		fetch(`${BASE_URL}info?api_key=${API_KEY}&auto_id=${AUTO_ID}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				addedTitleAboutCar(data);
				addDescription(data);
				addedGeneralDescriptionAboutCar(data);
				console.log(data, "===================DATA ABOUT====================");

			})
	}
	const addedTitleAboutCar = ({ title, USD, EUR, UAH }) => {
		$('#about-car-title').append(`
		<p class="car-about__title">${title}</p>
		<p class="car-about__price">${USD} $</p>
		<span class='price__EUR'>${EUR} € •</span>
		<span class='price__UAH'>${UAH} грн.</span>
		`);
	}
	const addDescription = ({ markName, modelName, locationCityName }
	) => {
		$('.car-about__attribute').append(`
	 <p>Марка:</p>
	 <p>Модель:</p>
		`);
		$('.car-about__description').append(`
		<p></p>
		<p>${markName}</p>
		<p>${modelName}</p>
		`);
	}

	const addedGeneralDescriptionAboutCar = ({ autoData: { description, driveName, fuelName, gearboxName, race, year } }) => {
		$('.car-about__attribute').append(`
		<p>Марка пального та об'єм двигуна:</p>
		<p>Привід:</p>
		<p>Коробка передач:</p>
		<p>Пробіг:</p>
		<p>Рік випуску:</p>
    <p>Коментар власника:</p>
		`);
		$('.car-about__description').append(`
		<p>${fuelName}</p>
		<p>${driveName}</p>
		<p>${gearboxName}</p>
		<p>${race}</p>
		<p>${year}</p>
		<p>${description}</p>
				`);
	}
	const fetchForCarPhotos = () => {
		fetch(`${BASE_URL}fotos/${AUTO_ID}?api_key=${API_KEY}`)
			.then((response) => {
				return response.json();
			})
			.then(({ data }) => {
				console.log(data, "===================DATA PHOTOS====================");
				console.log(AUTO_ID);
				console.log(data[AUTO_ID], '==============AUTO-ID===========');
				const collectionOfArrays = Object.entries(data[AUTO_ID]);
				console.log(collectionOfArrays, '=============ENTRIES============');
				collectionOfArrays.forEach(item => {
					addedImgsForBlock(item);
					console.log(item[1].formats[0], '==========ITEM=========');
				})
			})
	}
	const addedImgsForBlock = (item) => {
		$('.carousel-inner').append(`
		<div class="carousel-item">
	</div>
	`);
		$('.carousel-item').append(`
	<img src ="${item[1].formats[0]}" class="d-block w-100" alt="..." width = '100%' height = 'auto'>
	`);
		$('.carousel-inner .carousel-item:first').addClass('active');
	}
});
