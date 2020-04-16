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
// const firstUserDigit = +prompt('Введіть перше число:', 0);
// const secondtUserDigit = +prompt('Введіть друге число:', 0);
// let firstDivider = 1;
// let secondDivider = 1;
// let jointDivider = 1;
// let arrFirst = [];
// let arrSecond = [];
// for (firstDivider; firstDivider <= firstUserDigit; firstDivider++) {
// 	if (firstUserDigit % firstDivider === 0) {
// 		firstDivider = arrFirst;
// 	}
// }

// for (secondDivider; secondDivider <= secondtUserDigit; secondDivider++) {
// 	if (secondUserDigit % secondDivider === 0) {
// 		secondDivider = arrSecond;
// 	}
// }

// alert(arrFirst);
// alert(arrSecond);
//?doesn't work

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










/* 6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.*/
// let firstUserOperand = +prompt('Введіть перше число:', 0);
// let secondUserOperand = +prompt('Введіть друге число:', 0);
// let userOperator = prompt('Введіть дію якую необхідно виконати з числами додати + , відняти - , поділити / чи помножити *', "+");
// let result = 0;
// for (result; false;) {


// }



/* 7. Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).*/

// let userNumberForAction = prompt('Введіть довільне число яке містить мінімум цифри:', "000");
// let arr = userNumberForAction.split('');
// function shiftNumbers(params) {
// 	arr.shift(arr[0], arr[1]);
// 	return arr;
// }

// function pushNumbers() {
// 	arr.push(arr[0], arr[1]);
// }




/* 8. Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.*/
// let daysOfTheWeek = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя'];
// for (let i = 0; i < daysOfTheWeek.length; i++) {
// 	alert(`${daysOfTheWeek[i]}, Хочете побачити наступний день?`);
// }
//? doesn't work





/* 9. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.*/



/* 10. Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.*/