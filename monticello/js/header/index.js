$(document).ready(function () {
	$('.single-item').slick({
		adaptiveHeight: false,
		slidesToShow: 1,
		arrows: false,
		dots: true,
	});
	$('.icon').click(function (e) {
		$('.list').css({
			display: 'flex',
			flexFlow: 'column wrap',
			justifyContent: 'space-beetween',
			height: '100%',
			width: '100%',
			maxWidth: "100%",
			position: 'fixed',
			'z-index': '1',
			top: '0',
			left: '0',
			'background-color': 'rgb(0,0,0)',
			'background-color': 'rgba(0,0,0, 0.9)',
			'overflow-x': 'hidden',
			transition: '0.5s',
		});
		$('.list__item').css({
			position: 'relative',
			top: '25%',
			width: '100%',
			'text-align': 'center',
			'margin': '40px',
			fontSize: '50px',
		});
		$('.list').append(`<a class="close-btn" href="#">&times;</a>`);
		$('.close-btn').css({
			position: 'absolute',
			top: '0%',
			right: "-50%",
			width: '100%',
			'text-align': 'center',
			'margin': '40px',
			fontSize: '50px',
			textDecoration: "none",
			color: "white"
		})
		$(".close-btn").click(function (e) {
			$('.list').css({
				display: 'none',
			});
		});
	});
});