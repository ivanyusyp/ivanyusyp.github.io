$(document).ready(function () {
	let inputData,
		selectData,
		firstBntValue = 1,
		secondBtnValue = firstBntValue + 1,
		thirdBntValue = secondBtnValue + 1,
		pageValue = 1;
	$(".btn").click(function nextPage(e) {
		e.preventDefault();
		$(".results").empty();
		$(".pagination").empty();
		inputData = $("#search-movies").val(),
			selectData = $("#select-video-type").val();
		$.ajax({
			url: `http://www.omdbapi.com/?s=${inputData}&type=${selectData}&page=${pageValue}&apikey=e7bc09c9`,
			type: 'post',
			success: function (result) {
				const searchResult = result;
				const searchArray = searchResult.Search;
				console.log(searchArray);
				console.log(searchResult);
				if (searchResult.Response === "True") {
					searchArray.map(item => {
						$(".results").append(
							`<div class='result-div${item.imdbID} result-div'><p class="film-title">${item.Title}</p><img class="result-img" src="${item.Poster}" alt="">
							<button id="${item.imdbID}" class="details-btn">Details</button>
							</div>`
						);
						$(`#${item.imdbID}`).click(function (e) {
							$.ajax({
								type: "post",
								url: `http://www.omdbapi.com/?i=${item.imdbID}&apikey=e7bc09c9`,
								success: function (results) {
									console.log(results);
									$(`.result-div${item.imdbID}`).append(
										`<p class="plot${item.imdbID}">${results.Plot}</p>`
									)
								}
							});
						});
					});
					const totalResult = searchResult.totalResults,
						lastPage = Math.ceil(totalResult / 10);
					if (+(totalResult) > 10) {
						console.log(lastPage);
						$('.pagination').append(
							`
							<button class="previous-btn"><<</button>
							<button class="first-btn" value="1">1</button>
							<button class="second-btn" value="2">2 </button>
							<button class="third-btn" value="3">3</button>
							<button class="next" >...</button>
							<button class=" before-the-last-btn" value="L-1">${lastPage - 1}</button>
							<button class=" last-btn" value="L">${lastPage}</button>
							<button class="next-btn">>></button>
							`
						);
					}
					console.log(`Current value: ${pageValue}`);
					$(`.first-btn`).click(function (e) {
						e.preventDefault();
						pageValue = firstBntValue;
						$(".results").empty();
						$(".pagination").empty();
						nextPage(e);
					});
					$(`.second-btn`).click(function (e) {
						e.preventDefault();
						pageValue = secondBtnValue;
						$(".results").empty();
						$(".pagination").empty();
						nextPage(e);
					});
					$(`.third-btn`).click(function (e) {
						e.preventDefault();
						pageValue = thirdBntValue;
						$(".results").empty();
						$(".pagination").empty();
						nextPage(e);
					});
					$(`.next`).click(function (e) {
						e.preventDefault();
						$(".second-btn").empty();
						$(".third-btn").empty();
						console.log(secondBtnValue);
						console.log(thirdBntValue);
						let secondBtnCurrentValue = +(thirdBntValue + 1);
						let secondBtnCurrentText = +(thirdBntValue + 1);
						let thirdBtnCurrentValue = +(thirdBntValue + 2);
						let thirdBtnCurrentText = +(thirdBntValue + 2);
						$(`.second-btn`).val(`${secondBtnCurrentValue}`);
						$(`.second-btn`).text(`${secondBtnCurrentText}`);
						$(`.third-btn`).val(`${thirdBtnCurrentValue}`);
						$(`.third-btn`).text(`${thirdBtnCurrentText}`);
						console.log(`2v = ${secondBtnCurrentValue} \n2t = ${secondBtnCurrentText}`)
					});
					console.log(`New value: ${pageValue}`);
					$(`.next-btn`).click(function (e) {
						e.preventDefault();
						let currentValue = +(pageValue) + 1;
						pageValue = currentValue;
						$(".results").empty();
						$(".pagination").empty();
						nextPage(e);
					});
					$(`.previous-btn`).click(function (e) {
						e.preventDefault();
						if (pageValue > 1) {
							let currentValue = +(pageValue) - 1;
							pageValue = currentValue;
							$(".results").empty();
							$(".pagination").empty();
							nextPage(e);
						} else {
							$(".results").empty();
							$(".pagination").empty();
							nextPage(e);
						}
					});
					$(`.last-btn`).click(function (e) {
						e.preventDefault();
						let endPage = lastPage;
						pageValue = endPage;
						$(".results").empty();
						$(".pagination").empty();
						nextPage(e);
					});
					$(`.before-the-last-btn`).click(function (e) {
						e.preventDefault();
						let endPage = lastPage - 1;
						pageValue = endPage;
						$(".results").empty();
						$(".pagination").empty();
						nextPage(e);
					});
				} else {
					$(".results").append(
						`<p class= "not-found" > Movie not found! </ p> `
					);
				}
			}
		})
	});
});
