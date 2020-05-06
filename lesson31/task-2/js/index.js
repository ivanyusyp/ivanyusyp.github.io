$(document).ready(function () {
	$(".numbers").click(function () {
		$(".numbers").val();
		const numberVal = $(this.value);
		$('.calculator-screen').val(function (i, numberVal) {
			return i + numberVal;
		})
	});
	$(".all-clear").click(function () {
		$(".calculator-screen").val('0');
	});
	$(".operator").click(function () {
		alert("click");
	});

})

