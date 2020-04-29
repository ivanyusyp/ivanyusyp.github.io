const btn = document.createElement("button");
btn.setAttribute("class", "change-color-btn");
btn.style.width = "200px";
btn.style.height = "50px";
btn.style.background = "rgba(0,0,0,0.2)"
btn.style.fontSize = "20px";
btn.style.color = "gray";
document.body.appendChild(btn);
btn.innerText = "click";
const trafficLight = document.getElementById("tl");
btn.onclick = function red() {
	trafficLight.firstElementChild.style.background = "red";
	trafficLight.firstElementChild.nextElementSibling.style.background = "rgb(172, 162, 162";
	trafficLight.lastElementChild.style.background = "rgb(172, 162, 162)";
	btn.onclick = function orange() {
		trafficLight.firstElementChild.nextElementSibling.style.background = "orange";
		trafficLight.firstElementChild.style.background = "rgb(172, 162, 162)";
		trafficLight.lastElementChild.style.background = "rgb(172, 162, 162)";
		btn.onclick = function green() {
			trafficLight.firstElementChild.style.background = "rgb(172, 162, 162)";
			trafficLight.firstElementChild.nextElementSibling.style.background = "rgb(172, 162, 162";
			trafficLight.lastElementChild.style.background = "green";
			btn.onclick = function () {
				red();
			}
		}
	}
}


