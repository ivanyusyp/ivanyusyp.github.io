/* Todo:
				 Функция substract возвращает разность двух чисел a - b
				 Реализовать функцию, которая принимает аргументом функцию add
				 но возвращать будет разность  b - a
				*/

function substract(a, b) {
	return a - b;
}
function reverse(fn) {
	return function add(a, b) {
		return b - a;
	}
}
console.log(substract(10, 5)); // return  5

const subtractReverse = reverse(substract);
console.log(subtractReverse(10, 5)); // return  -5