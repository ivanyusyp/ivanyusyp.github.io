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
				breakpoint: 1370,
				settings: {
					arrows: false,
				}
			},
			{
				breakpoint: 1276,
				settings: {
					infinite: true,
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true,
					autoplay: true,
					autoplaySpeed: 4000,
					centerPadding: '10px',
					arrows: false,
				}
			},
			{
				breakpoint: 920,
				settings: {
					adaptiveHeight: false,
					slidesToShow: 1,
					arrows: true,
					dots: false,
					centerPadding: "2px"
				}
			}
		],
	});
	$(".slick-prev").text('<');
	$(".slick-next").text('>');

});