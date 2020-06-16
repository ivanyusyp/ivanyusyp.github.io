import * as $ from 'jquery';
import { data } from 'jquery';
$(document).ready(function () {
	const API_KEY = 'wF83X8QPO0vZqpQ50l8OfCcdjGSNU74TbPOTADl3';
	const BASE_URL = 'https://developers.ria.com/auto/';
	const AUTO_ID = localStorage.getItem('autoId');
	$('#about-car-title').click((e) => {
		e.preventDefault();
		fetchForCarAbout(AUTO_ID);
	});
	$('#about-car-img').click(function (e) {
		e.preventDefault();
		fetchForCarPhotos(AUTO_ID);
	});
	const fetchForCarAbout = (AUTO_ID) => {
		fetch(`${BASE_URL}info?api_key=${API_KEY}&auto_id=${AUTO_ID}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				addedTitleAboutCar(data);
				console.log(data, "===================DATA ABOUT====================");

			})
	}
	const addedTitleAboutCar = ({ title, USD, EUR, UAH }) => {
		$('#about-car-title').append(`
		<p class="car-about__title">${title}</p>
		<p class="car-about__price">${USD}</p>
		`);
		$('.car-about__price').append(`
		<span class='price__EUR'>${EUR}</span>
		<span class='price__UAH'>${UAH}</span>
		`);
	}
	const fetchForCarPhotos = () => {
		fetch(`${BASE_URL}/fotos/${AUTO_ID}?api_key=${API_KEY}`)
			.then((response) => {
				return response.json();
			})
			.then(({ data }) => {
				console.log(data, "===================DATA PHOTOS====================");
				console.log(AUTO_ID);
				console.log(data[AUTO_ID], '==============AUTO-ID===========');
				console.log(Object.entries(data[AUTO_ID]), '=============ENTRIES============');
				// addedImgsForBlock(data[AUTO_ID])
			})
	}
	const addedImgsForBlock = ({ AUTO_ID: { formats }, ...data }) => {
		$('#about-car-img').append(`
	<img src='${formats[0]}'>
	`);
	}
});