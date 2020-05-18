$(document).ready(function () {
	$('.column').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
	});
	$(".slick-prev").text('<');
	$(".slick-next").text('>');
});