$(document).ready(function () {
	$(".btn").click(function (e) {
		e.preventDefault();
		const inputData = $("#search-movies").val(),
			selectData = $("#select-video-type").val();
		let pageValue = 1;
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
							<button class="active-pagination-btn pagination-btn">1</button>
							<button class="pagination-btn">2</button>
							<button class="pagination-btn">3</button>
							<button class="pagination-btn">4</button>
							<button class="pagination-btn">5</button>
							<button class="pagination-btn">6</button>
							<button class="pagination-btn">7</button>
							<button class="pagination-btn">8</button>
							<button class="pagination-btn">9</button>
							<button class="pagination-btn">10</button>
							<button class="next-btn">>></button>`
						);
						$(".pagination-btn").click(function (e) {
							$(".pagination-btn").removeClass('active-pagination-btn');
							$(".pagination-btn").attr('class', 'active-pagination-btn');
							let bntValue = $(".active-pagination-btn").val();
							pageValue = bntValue;
						});
					}

				} else {
					$(".results").append(
						`< p class= "not-found" > You did not enter anything </ > `
					);
				}
			}
		})
	});
});
