$(document).ready(function () {
	$(".nav__item").click(function () {
		$(".nav__item").removeClass("active");
		$(this).addClass("active");
	})
	$(".nav__item").hover(function () {
		$(".nav__item").removeClass("hover");
		$(this).addClass("hover");
	})
})