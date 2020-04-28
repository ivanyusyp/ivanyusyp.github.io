const button = document.createElement('button');
button.setAttribute("id", "open");
document.body.appendChild(button);
button.innerText = "open";
const modal = document.getElementById("modal-window");
const closeButton = document.getElementById("modal-button");
button.onclick = function () {
	modal.style.display = "block";
}
closeButton.onclick = function () {
	modal.style.display = "none";
}


