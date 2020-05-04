// Создать HTML-страницу для отображения/редактирования текста. При открытии страницы текст отображается с помощью тега div. При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать. При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом. Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.
const getTextFromDiv = () => {
	const node = document.getElementById('div'),
		htmlContent = node.innerHTML,
		textContent = node.textContent;
	return textContent;
}

const setTextareaText = () => {
	const textArea = document.getElementById("text-area");
	textArea.innerText = getTextFromDiv();
	const div = document.querySelector("div");
	div.style.display = "none";
	textArea.style.display = "block";
}

const getTextFromTextarea = () => {
	const textArea = document.querySelector("textarea"),
		text = textArea.value;
	console.log(text);
	return text;

}

const setTexForDiv = () => {
	const textForDiv = getTextFromTextarea(),
		ta = document.querySelector("textarea"),
		div = document.getElementById('div');
	div.innerHTML = textForDiv;
	ta.style.display = "none";
	div.style.display = "inline-block";
}

document.addEventListener('keydown', function (event) {
	if (event.which == 107 && (event.ctrlKey || event.metaKey)) {
		setTexForDiv();
		event.preventDefault();
	}
})

document.addEventListener('keydown', function (event) {
	if (event.which == 69 && (event.ctrlKey || event.metaKey)) {
		setTextareaText();
		event.preventDefault();
	}
})



