// 1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
// function getNumbers(a, b) {
// 	if (a === b)
// 		return '0';
// 	if (a > b)
// 		return '1';
// 	if (a < b)
// 		return '-1';
// }
// console.log(getNumbers());
//!work

// 2. Написать функцию, которая вычисляет факториал переданного ей числа.
// function calcFactorial(n) {
// 	if (n < 0)
// 		return "Факторіала від'ємного числа не існує";
// 	let startValue = 1;
// 	for (let i = 2; i <= n; i++)
// 		startValue = startValue * i;
// 	return startValue;

// }
// console.log(calcFactorial())
//!work

// 3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
// function getСombineNumber (a,b,c) {
// 	return ''+a+b+c;
// }
// console.log(getСombineNumber(1,4,6))
//!work

// 4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
// function calcSquare(a, b) {
// 	if (a <= 0 || b <= 0) {
// 		return "Ви ввели невірні дані";
// 	}
// 	if (!b) {
// 		return a * a;
// 	}

// 	if (a > 0 || b > 0) {
// 		return a * b;
// 	}
// }
// console.log(calcSquare(5, 7))
//!work

// 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.

// function getPerfectNumber(a) {
// 	let dividers = [];
// 	for (let i = 1; i < a; i++) {
// 		if (a % i === 0) {
// 			dividers.push(i);
// 		}
// 	}
// 	let result = dividers.reduce((sum, current) => sum + current, 0);
// 	if (result == a) {
// 		return "це число є досконалим"
// 	} else {
// 		return "це число не є досколалим"
// 	}
// }
// console.log(checkPerfectNumber(8128));
//!work



// 6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 
// let divider;
// let dividers;
// let number;
// function checkPerfectNumber(min, max) {
// 	for (let j = min; j <= max; j++) {
// 		number = j;
// 		console.log(`number${number}`);
// 		function getPerfectNumber(number) {
// 			let dividers = [];
// 			for (let i = 1; i < number; i++) {
// 				if (number % i === 0) {
// 					dividers.push(i);
// 				}
// 			}
// 			let result = dividers.reduce((sum, current) => sum + current, 0);
// 			console.log(`result${result}`);
// 				if (result == number) {
// 					return "це число є досконалим"
// 				} else {
// 					return "це число не є досколалим"
// 				}
// 			}

// 		}
// 	}
// 	console.log(checkPerfectNumber(1, 10));

//?doesn't work

// 7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
// function getTime(a = "00", b = "00", c = "00") {
// 	if (0 > a || a > 23 || b < 0 || b > 59 || c < 0 || c > 59) {
// 		return "Ви ввели невірні дані"
// 	}
// 	return a + ':' + b + ':' + c
// }
// console.log(getTime());
// !work

// 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
// function getTime(a = 0, b = 0, c = 0) {
// 	if (0 > a || a > 23 || b < 0 || b > 59 || c < 0 || c > 59) {
// 		return "Ви ввели невірні дані"
// 	} else {
// 		return a * 3600 + b * 60 + c + '';
// 	}
// }
// console.log(getTime(20, 4));
// !work

// 9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
// function calcTime(a = "0") {
// 	if (a > 86399 || a < 0||!a) {
// 		return "Ви ввели невірні дані"
// 	}
// 	h = Math.floor(a / 3600);
// 	m = Math.floor((a % 3600) / 60);
// 	s = ((a % 3600) % 60);
// 	return h + ':' + m + ':' + s;

// }
// console.log(calcTime(3661));
// !work 

// 10. Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»
// let firstDateInSecond;
// let secondDateInSecond;
// let dateDifference;
// function calcDateDifference(a = 0, b = 0, c = 0, d = 0, e = 0, f = 0) {
// 	if (0 > a || a > 23 || b < 0 || b > 59 || c < 0 || c > 59 || 0 > d || d > 23 || e < 0 || e > 59 || f < 0 || f > 59) {
// 		return "Ви ввели невірні дані"
// 	} else {
// 		firstDateInSecond = a * 3600 + b * 60 + c,
// 			secondDateInSecond = d * 3600 + e * 60 + f;
// 		dateDifference = firstDateInSecond - secondDateInSecond;
// 		let h = Math.floor(dateDifference / 3600);
// 		let m = Math.floor((dateDifference % 3600) / 60);
// 		let s = ((dateDifference % 3600) % 60);
// 		return h + ':' + m + ':' + s;
// 	}

// }
// console.log(calcDateDifference(20, 6, 4, 14, 7, 2))
// !work
