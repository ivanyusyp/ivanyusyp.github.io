$(document).ready(function () {

	$('.column').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					infinite: true,
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true,
					autoplay: true,
					autoplaySpeed: 4000,
					centerPadding: '10px'
				}
			},
			{
				breakpoint: 1000,
				settings: {
					adaptiveHeight: false,
					slidesToShow: 1,
					arrows: false,
					dots: false,
					centerPadding: "2px"
				}
			}
		],
	});
	$(".slick-prev").text('<');
	$(".slick-next").text('>');

});