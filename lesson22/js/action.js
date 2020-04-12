// const userAge = prompt('How old are you?:', 0);
// if (userAge < 12 && userAge > 0) {
// 	alert('You are child')
// };
// if (userAge >= 12 && userAge < 18) {
// 	alert('You are teenager')
// };
// if (userAge >= 18 && userAge < 60) {
// 	alert('You are adult')
// };
// if (userAge >= 60) {
// 	alert('You are pensioner')
// };

// const userSymbol = prompt('Enter digit from 0 to 9', 0);
// const message = (userSymbol == 0) ? ')' :
// 	(userSymbol == 1) ? '!' :
// 		(userSymbol == 2) ? '@' :
// 			(userSymbol == 3) ? '#' :
// 				(userSymbol == 4) ? '$' :
// 					(userSymbol == 5) ? '%' :
// 						(userSymbol == 6) ? '^' :
// 							(userSymbol == 7) ? '&' :
// 								(userSymbol == 8) ? '*' :
// 									(userSymbol == 9) ? '(' :
// 										'You are enter wrong digit';
// alert(message);

const userDigit = prompt('Enter three digit number:', 100);
const firstDigit = (userDigit[0]);
const secondDigit = (userDigit[1]);
const thirdDigit = (userDigit[2]);
if (firstDigit === secondDigit) {
	alert('Your number contain two the same digits')
} else if (secondDigit === thirdDigit) {
	alert('Your number contain two the same digits')
} else if (firstDigit === thirdDigit) {
	alert('Your number contain two the same digits')
} else if (firstDigit === secondDigit && secondDigit === thirdDigit && firstDigit === thirdDigit) {
	alert('Your number contain three the same digits')
} else {
	alert('ok')
};



