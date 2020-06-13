
const openBtn = document.querySelector('.icon-open-nav');
const closeBtn = document.querySelector('.closebtn');
console.log(openBtn);
openBtn.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);
function openNav() {
	document.getElementById("myNav").style.width = "100%";
	console.log('dsaaaaaaaaaa');
}

function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}

