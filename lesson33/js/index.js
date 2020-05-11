$(document).ready(function () {
	let inputData = 'goliaf',
		selectData = 'movie';
	$.ajax({
		url: `http://www.omdbapi.com/?t=${inputData}&type=${selectData}&apikey=e7bc09c9`,
		type: 'post',
		success: function (result) {
			const searchResult = result;
			console.log(searchResult);
			if (result) {
				$(".results").append(
					`<div class="result-div"><img class="result-img" src="${searchResult.Poster}" alt="">
					<p class="result-p">IMDb: ${searchResult.imdbRating}</p>
					<button id="details">Details</button>
					</div>`
				);
				$("#details").click(function (e) {
					$(".result-div").append(
						`<p class="plot-text">${searchResult.Plot}</p>`
					)
				})
			}
		}




	})
});
