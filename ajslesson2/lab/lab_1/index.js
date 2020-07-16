const obj = {
	clicked: false,

	click: function () {
		this.clicked = true;
		console.log(obj.clicked);
		alert("Button is clicked");
	}
};

const button = document.getElementById("btn");
button.addEventListener("click", obj.click);