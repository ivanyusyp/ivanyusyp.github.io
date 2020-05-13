$(document).ready(function () {
	let inputData,
		selectData,
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
							`<div class='result-div${item.imdbID} result-div'><img class="result-img" src="${item.Poster}" alt="">
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
										`<p>${results.Plot}</p>`
									)

								}
							});
						});
					});
					const totalResult = searchResult.totalResults;
					if (+(totalResult) > 10) {
						$('.pagination').append(
							`<button class="previous-btn"><<</button>
							<button class="pagination-btn" value="1">1</button>
							<button class="next-btn">>></button>
							<button class="last-btn">last</button>`
						);
					}
					console.log(`Current value: ${pageValue}`);
					$(`.pagination-btn`).click(function (e) {
						e.preventDefault();
						let bntValue = $(".pagination-btn").val();
						console.log(`btnvalue : ${bntValue}`);
						pageValue = bntValue;
						$(".results").empty();
						$(".pagination").empty();
						nextPage(e);
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
				} else {
					$(".results").append(
						`<p class= "not-found" > Movie not found! </ p> `
					);
				}
			}
		})
	});
});
