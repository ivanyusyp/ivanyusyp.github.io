const search = document.getElementById("searchBtn");
search.onclick = (e) => {
	e.preventDefault();
	fetch("https://uk1.ukvehicledata.co.uk/api/datapackage/VehicleTaxData?v=2&api_nullitems=1&auth_apikey=7f9e4d83-7e76-4c62-9bbf-0612e561655b&key_VRM=KM12AKK")
		.then(response => {
			console.log(response);
		})
		.catch(err => {
			console.log(err);
		});
}