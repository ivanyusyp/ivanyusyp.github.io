/*
При клике на любой элемент li мы в alert() получаем цифру 5
а по логике должны получать номер элемента на который кликнули

Задачи
1. С помощью debugger проанализировать почему так получается
2. С помощью замыкания сделать так, чтобы при клике на элемент
li получали его номер (let НЕ ИСПОЛЬЗОВАТЬ)
3. Выполнить задачу 2 но при этом используя объявление
итерационной переменной через let
*/

const list = document.getElementById("list"),
	els = list.getElementsByTagName("li");

for (let i = 0, len = els.length; i < len; ++i) {
	els[i].onclick = function () {
		console.log(i + 1);
	};
}

