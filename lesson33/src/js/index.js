import * as $ from 'jquery';
$(document).ready(function () {
	let inputData,
		selectData,
		firstBntValue = 1,
		secondBtnValue = firstBntValue + 1,
		thirdBntValue = secondBtnValue + 1,
		pageValue = 1;
	// function removeItemOnce(arr, value) {
	// 	var index = arr.indexOf(value);
	// 	if (index > -1) {
	// 		arr.splice(index, 1);
	// 	}
	// 	return arr;
	// }

	// function removeItemAll(arr, value) {
	// 	var i = 0;
	// 	while (i < arr.length) {
	// 		if (arr[i] === value) {
	// 			arr.splice(i, 1);
	// 		} else {
	// 			++i;
	// 		}
	// 	}
	// 	return arr;
	// }
	$(".btn").click(function nextPage(e) {
		e.preventDefault();
		$(".results").empty();
		inputData = $("#search-movies").val(),
			selectData = $("#select-video-type").val();
		$.ajax({
			url: `http://www.omdbapi.com/?s=${inputData}&type=${selectData}&page=${pageValue}&apikey=e7bc09c9`,
			type: 'post',
			success: function appendResult(result) {
				const searchResult = result;
				const searchArray = searchResult.Search;
				console.log(searchArray);
				console.log(searchResult);
				if (searchResult.Response === "True") {
					searchArray.map(item => {
						$(".results").append(
							`<div class='result-div${item.imdbID} result-div'><p class="film-title">${item.Title}</p><img class="result-img" src="${item.Poster}" alt="">
							<button value='${item.imdbID}' class ="add-to-favorite-btn" >add to favorite</button>
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
						if (!$('.first-btn').val()) {
							$('.pagination').append(
								`
							<button class="previous-btn"><<</button>
							<button class="first-btn" value="1">1</button>
							<button class="second-btn" value="2">2 </button>
							<button class="third-btn" value="3">3</button>
							<button class="next" >...</button>
							<button class=" before-the-last-btn" value=${lastPage - 1}>${lastPage - 1}</button>
							<button class=" last-btn" value="${lastPage}">${lastPage}</button>
							<button class="next-btn">>></button>
							`
							);
						}
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
						pageValue = e.target.innerHTML;
						nextPage(e);
					});
					$(`.third-btn`).click(function (e) {
						e.preventDefault();
						pageValue = e.target.innerHTML;
						nextPage(e);
					});
					$(`.next`).click(function (e) {
						e.preventDefault();
						const secondBtnCurrentValue = +($('.second-btn').val());
						const thirdBtnCurrentValue = +($('.third-btn').val());
						if ($('.before-the-last-btn').val() != thirdBtnCurrentValue + 1) {
							$(`.second-btn`).val(secondBtnCurrentValue + 1);
							$(`.second-btn`).text(secondBtnCurrentValue + 1);
							$(`.third-btn`).val(thirdBtnCurrentValue + 1);
							$(`.third-btn`).text(thirdBtnCurrentValue + 1);
						}
						console.log(thirdBtnCurrentValue);
						console.log($('.before-the-last-btn').val());

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
						let endPage = +(lastPage - 1);
						pageValue = endPage;
						$(".results").empty();
						$(".pagination").empty();
						nextPage(e);
					});
					const favoriteMovies = [];
					$('.add-to-favorite-btn').click(function (e) {
						e.preventDefault();
						console.log(e.target.value);
						const filmId = e.target.value;
						if (!favoriteMovies.includes(filmId, 0)) {
							favoriteMovies.push(filmId);
						}
						localStorage.setItem('idfilm', favoriteMovies);
						console.log(favoriteMovies);
					});
				} else {
					$(".results").append(
						`<p class= "not-found" > Movie not found! </ p> `
					);
				}
			}
		})
	});
	$('.favorit').click(function (e) {
		e.preventDefault();
		$(".results").empty();
		$(".pagination").empty();
		const result = localStorage.getItem('idfilm');
		const arrayOfMovies = result.split(',');
		arrayOfMovies.forEach(function (e) {
			$.ajax({
				type: "post",
				url: `http://www.omdbapi.com/?i=${e}&apikey=e7bc09c9`,
				success: function (results) {
					const searchResults = results;
					console.log(searchResults);
					$(".results").append(
						`<div class='result-div${searchResults.imdbID} result-div'><p class="film-title">${searchResults.Title}</p><img class="result-img" src="${searchResults.Poster}" alt="">
								<button id="${searchResults.imdbID}"class="details-btn">Details</button>
								<button style="	height: 18px;
								position: absolute;
								right: 0px;
								text-decoration: none;
								color: lightslategray;
								border: 1px solid lightslategray;
								border-radius: 4px;
								" 
								class ="del-from-favorite-btn"
								id="${searchResults.imdbID}-del">delete form favorite</button>
								</div>`
					)
					$(`#${searchResults.imdbID}-del`).click(function (e) {
						e.preventDefault();
						console.log('=============CLICK==================')
						$(`.result-div${searchResults.imdbID}`).empty();
						$(`.result-div${searchResults.imdbID}`).css('display', 'none');
						const localData = localStorage.getItem('idfilm');
						const localDataArray = localData.split(',');
						console.log(localDataArray);
						console.log(searchResults.imdbID);
						const filteredArray = localDataArray.filter((item) => {
							return item != searchResults.imdbID;
						})
						localStorage.setItem('idfilm', filteredArray);
						console.log(filteredArray, "===IT\'S NEW ARRAY======");
					});
					$(`#${searchResults.imdbID}`).click(function (e) {
						$.ajax({
							type: "post",
							url: `http://www.omdbapi.com/?i=${searchResults.imdbID}&apikey=e7bc09c9`,
							success: function (results) {
								console.log(results);
								$(`.result-div${searchResults.imdbID}`).append(
									`<p class="plot${searchResults.imdbID}">${results.Plot}</p>`
								)
							}
						});
					});

				}
			});
		});
	});
})
