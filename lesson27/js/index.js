// 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
const getDescription = (color, text) => {
	const p = document.createElement('p');
	p.innerText = text;
	p.style.color = color;
	return p;
}
const getButton = () => {
	const sortBtn = document.createElement('button');
	sortBtn.innerText = "Sort by bought";
	sortBtn.style.border = "1px solid green";
	sortBtn.style.borderRadius = "10px";
	sortBtn.style.height = "40px";
	sortBtn.style.backgroundColor = "lightgreen";
	return sortBtn;
}
function getLiElement({ productName, requiredAmount, bought }) {
	const li = document.createElement('li');
	li.innerHTML = `${productName} - `;
	li.style.border = "1px solid green";
	li.style.padding = "10px";
	li.style.margin = "5px";
	li.style.borderRadius = "5px";
	li.style.textAlign = "justify";
	const amount = document.createElement('span');
	amount.innerHTML = requiredAmount;
	amount.setAttribute("id", `${productName}`);
	li.appendChild(amount);





	if (bought) {
		li.style.color = "green";
		li.style.border = "1px solid green";
		const plusButton = document.createElement('button');
		plusButton.innerText = '+';
		const minusButton = document.createElement("button");
		minusButton.innerText = "-";
		plusButton.addEventListener('click', () => {
			const i = document.getElementById(productName);
			i = requiredAmount++;
			console.log(i);
		})
		li.appendChild(plusButton);
		li.appendChild(minusButton);

	} else {
		li.style.color = "red";
		li.style.border = "1px solid red";
		const plusButton = document.createElement('button');
		plusButton.innerText = '+';
		li.appendChild(plusButton);

	}

	return li;

}
const shoppingList = [
	{
		productName: 'apple',
		requiredAmount: 10,
		bought: true
	},
	{
		productName: 'orange',
		requiredAmount: 7,
		bought: false
	},
	{
		productName: 'bread',
		requiredAmount: 1,
		bought: true
	},
	{
		productName: 'milk',
		requiredAmount: 2,
		bought: false
	},
	{
		productName: 'carrots',
		requiredAmount: 2,
		bought: false
	},
];
const h1 = document.createElement('h1');
h1.innerText = "Shopping List";
h1.style.textAlign = "center";
document.body.appendChild(h1);
const ol = document.createElement('ol');
ol.setAttribute("id", "sl");
document.body.appendChild(ol);
shoppingList.forEach((item) => {
	document.getElementById("sl").appendChild(getLiElement(item));
});
const descriptionBought = getDescription("green", "Green - you bought this product");
const descriptionNotBought = getDescription("red", "Red - you didn't bought this product");
const button = getButton();
document.body.appendChild(descriptionBought);
document.body.appendChild(descriptionNotBought);
document.body.appendChild(button);
button.addEventListener('click', () => {
	const removedList = document.getElementById('sl');
	removedList.innerHTML = "";
	const sortedList = shoppingList.sort((a, b) => { return a.bought - b.bought });
	sortedList.forEach((item) => {
		document.getElementById("sl").appendChild(getLiElement(item));
	})
	console.log(sortedList);
})















// 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:

// Распечатка чека на экран;
// Подсчет общей суммы покупки;
// Получение самой дорогой покупки в чеке;
// Подсчет средней стоимости одного товара в чеке.
// 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

// 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^

// Вывод на экран всех аудиторий;
// Вывод на экран аудиторий для указанного факультета;
// Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
// Функция сортировки аудиторий по количеству мест;
// Функция сортировки аудиторий по названию (по алфавиту).