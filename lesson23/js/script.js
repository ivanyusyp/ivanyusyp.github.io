/* 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне. */
// let firstDigitRange = +prompt('Введіть першу цифру діапазону для знаходження суми:', 0);
// const secondDigitRange = +prompt('Введіть другу цифру діапазону для знаходження суми:', 0);
// let sum = 0;
// for (firstDigitRange; firstDigitRange <= secondDigitRange; firstDigitRange++) {
// 	sum += firstDigitRange;
// }
// alert(sum);
//!work
/* 2. Запросить 2 числа и найти только наибольший общий делитель. */
// let firstUserNumber = +prompt("Введіть перше число:", 0);
// let secondUserNumber = +prompt("Введіть друге число:", 0);

// for (let i = secondUserNumber; i >= 1; i--) {
// 	if (secondUserNumber % i === 0) {
// 		secondNumberDividers.push(i);
// 	}
// }

// for (let i = firstUserNumber; i >= 1; i--) {
// 	if (firstUserNumber % i === 0) {
// 		firstNumberDividers.push(i);
// 	}
// }

// for (let i = 0; i < firstNumberDividers.length; i++) {
// 	const currentDivider = firstNumberDividers[i];
// 	if (secondNumberDividers.includes(currentDivider)) {
// 		console.log(`Найбільший спільний дільник ваших чисел : ${currentDivider}`);
// 		break
// 	}
// }
//!work

/* 3. Запросить у пользователя число и вывести все делители этого числа.*/
// let userNumberForDivide = +prompt('Введіть довільне ціле число :', 0)
// let dividerForUserNumber = 1;
// for (dividerForUserNumber; dividerForUserNumber <= userNumberForDivide; dividerForUserNumber++) {
// 	if (userNumberForDivide % dividerForUserNumber === 0) {
// 		alert(`Ділителі вашого числа:${dividerForUserNumber}`);
// 	}

// }
//!work



/* 4. Определить количество цифр в введенном числе.*/
// const userNumber4 = prompt('Ввведіть довільне число', 0);
// alert(`Кількість цифр у вашому числі: ${userNumber4.length} `);
//!work

/* 5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.*/
// let userNumber5 = prompt('Введіть десять довільних чисел через кому (0,1,2,3,4,5,6,7,8,9):', 0);
// let arr = userNumber5.split(',');
// function getPositiveNumbers(i) {
// 	return i > 0;
// }
// function getNegativeNumbers(i) {
// 	return i < 0;
// }

// function getZeroNumbers(i) {
// 	return i == 0;
// }

// function getEvenNumbers(i) {
// 	return i % 2 === 0;
// }

// function getOddNumbers(i) {
// 	return i % 2 != 0;
// }
// let positiveNumbers = arr.filter(getPositiveNumbers);
// let negativeNumbers = arr.filter(getNegativeNumbers);
// let zeroNumbers = arr.filter(getZeroNumbers);
// let evenNumbers = arr.filter(getEvenNumbers);
// let oddNumbers = arr.filter(getOddNumbers);
// console.log(`Ви ввели ${positiveNumbers.length} додатніх чисел`);
// console.log(`Ви ввели ${negativeNumbers.length} від\'ємних чисел`);
// console.log(`Ви ввели ${zeroNumbers.length} нулів`);
// console.log(`Ви ввели ${evenNumbers.length} парних чисел`);
// console.log(`Ви ввели ${oddNumbers.length} непарних чисел`);
// !work

/* 6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.*/
// do {
// 	let firstUserOperand = +prompt('Введіть перше число:', 0);
// 	let secondUserOperand = +prompt('Введіть друге число:', 0);
// 	let userOperator = prompt('Введіть дію якую необхідно виконати з числами додати + , відняти - , поділити / чи помножити *', "+");
// 	let result = 0;
// 	if (userOperator === "+") {
// 		result = firstUserOperand + secondUserOperand;
// 	} else if (userOperator === "-") {
// 		result = firstUserOperand - secondUserOperand;
// 	} else if (userOperator === "*") {
// 		result = firstUserOperand * secondUserOperand;
// 	} else if (userOperator === "/") {
// 		result = firstUserOperand / secondUserOperand;
// 	} alert(result);
// } while (confirm('Бажаєте порахувати ще один приклад?') === true)
// !work

/* 7. Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).*/

// let userNumberForAction = prompt('Введіть довільне число яке містить мінімум цифри:', "000");
// let arr = userNumberForAction.split('');
// let firstArrElement = arr[0];
// let secondArrElement = arr[1];
// arr.push(firstArrElement, secondArrElement);
// arr.shift(firstArrElement, secondArrElement);
// console.log(arr);
//!work

/* 8. Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.*/
// let daysOfTheWeek = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя'];
// let i = 0;
// while (confirm(`${daysOfTheWeek[i]} Хочете побачити наступний день?`)) {
// 	if (i === 6) {
// 		i = -1;
// 	}
// 	i++;
// }
//!work


/* 9. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.*/
// for (let i = 2; i <= 9; i++) {
// 	for (let j = 1; j <= 10; j++) {
// 		console.log("" + i + "X" + j + "=" + (j * i));
// 	}
// }
//!work


/* 10. Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N. */
// const userNumber = prompt('Ввведіть число від 0 до 100', 0);
// let currentUserNumber = 50;
// let minRange = 0;
// let maxRange = 100;
// let currentUserAnswer;
// do {
// 	currentUserAnswer = prompt(`Ваше число > ${currentUserNumber}, < ${currentUserNumber}, чи = ${currentUserNumber} ? `, '');
// 	if (currentUserAnswer === ">") {
// 		if (minRange === 0 && maxRange === 100) {
// 			minRange = 50;
// 			maxRange = 100;
// 		}
// 		minRange = currentUserNumber;
// 		currentUserNumber = Math.floor(((maxRange - minRange) / 2) + minRange);
// 	} else if (currentUserAnswer === "<") {
// 		if (maxRange === 100 && minRange === 0) {
// 			maxRange = 50;
// 			minRange = 0;
// 		}
// 		maxRange = currentUserNumber;
// 		currentUserNumber = Math.floor((maxRange + minRange) / 2);
// 	}
// }
// while (currentUserAnswer !== '=');
// console.log(`Ваше число: ${currentUserNumber}`); 
// ! work