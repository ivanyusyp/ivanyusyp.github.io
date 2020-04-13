const userAge = prompt('How old are you?:', 0);
if (userAge < 12 && userAge > 0) {
	alert('You are child')
};
if (userAge >= 12 && userAge < 18) {
	alert('You are teenager')
};
if (userAge >= 18 && userAge < 60) {
	alert('You are adult')
};
if (userAge >= 60) {
	alert('You are pensioner')
};
// ! it work

const userSymbol = prompt('Enter digit from 0 to 9', 0);
const message = (userSymbol == 0) ? ')' :
	(userSymbol == 1) ? '!' :
		(userSymbol == 2) ? '@' :
			(userSymbol == 3) ? '#' :
				(userSymbol == 4) ? '$' :
					(userSymbol == 5) ? '%' :
						(userSymbol == 6) ? '^' :
							(userSymbol == 7) ? '&' :
								(userSymbol == 8) ? '*' :
									(userSymbol == 9) ? '(' :
										'You are enter wrong digit';
alert(message);
// ! it work

const userDigit = prompt('Enter three digit number:', 100);
const firstDigit = (userDigit[0]);
const secondDigit = (userDigit[1]);
const thirdDigit = (userDigit[2]);
if (firstDigit == secondDigit || secondDigit == thirdDigit || firstDigit == thirdDigit) {
	alert('Your number contain two the same digit');
} else {
	alert('Everything is ok');
}

// !done

const userYear = prompt('Please enter any year:', 0);
if (userYear % 4 == 0 || userYear % 400 == 0) {
	alert('This is a leap year');
} else {
	alert('This is a ordinary year');
}
// ? it's doesn't work 

const userDigit2 = prompt('Please enter five digit number:', 00000);
const firstDigit2 = (userDigit2[0]);
const secondDigit2 = (userDigit2[1]);
const thirdDigit2 = (userDigit2[2]);
const fourthDigit2 = (userDigit2[3]);
const fivethDigit2 = (userDigit2[4]);
if (firstDigit2 === fivethDigit2 && secondDigit2 === fourthDigit2) {
	alert('Your number is palidrome');
} else {
	alert('Your number is normal');
}
// ! it work

const userSumInDollars = prompt('Please enter your ammount in $:', 0);
const userСurrency = prompt('Select the currency you want to convert to, if you want to convert to Euro - enter EUR, to Ukrainian Hryvnia - enter UAH, to Azerbaijan Manat - enter AZN:', 0);
const userSumInEUR = userSumInDollars * 0.914345;
const userSumInUAH = userSumInDollars * 27.4;
const userSumInAZN = userSumInDollars * 1.69649;

if (userСurrency == 'EUR') {
	alert(userSumInEUR);
} else if (userСurrency == 'UAH') {
	alert(userSumInUAH);
} else if (userСurrency == 'AZN') {
	alert(userSumInAZN);
} else {
	alert(' You are enter wrong value, please enter value from our list. Thanks!')
};
// !it work

const userAmountOfPurchases = +prompt('Please, enter you amount of purchases:', 0);
const discount3Percent = +userAmountOfPurchases * 0.97;
const discount5Percent = +userAmountOfPurchases * 0.95;
const discount7Percent = +userAmountOfPurchases * 0.93;
if (userAmountOfPurchases >= 200 && userAmountOfPurchases < 300) {
	alert(`Congratulation you have 3% discount, your amount to pay is ${discount3Percent}$`);
} else if (userAmountOfPurchases >= 300 && userAmountOfPurchases < 500) {
	alert(`Congratulation you have 5% discount, your amount to pay is ${discount5Percent}$`);
} else if (userAmountOfPurchases >= 500) {
	alert(`Congratulation you have 7% discount, your amount to pay is ${discount7Percent}$`);
} else if (userAmountOfPurchases > 0 && userAmountOfPurchases < 200) {
	alert(`Your amount to pay is ${userAmountOfPurchases}$`);
} else {
	alert('You are enter wrong value, please try again');
}
// !it work

const circleLength = +(prompt('Please enter the length of the circle:', 0));
const perimeterOfSquare = +(prompt('Please enter perimetr of square:', 0));
const circleRadius = circleLength / (2 * Math.PI);
const sideOfSquare = perimeterOfSquare / 4;
const inscribedСircle = sideOfSquare / circleRadius;
if (inscribedСircle >= 2) {
	alert('This circle could inscribed in this square');
} else {
	alert("This circle couldn't inscribed in this square");
}
//!it work

alert("You have three questions for 3 answers each, the price of one question is 2 points. Let's start the game!");
let pointsForFirstQuestion = 0;
let pointsForSecondQuestion = 0;
let pointsForThirdQuestion = 0;
const firstQuestion = prompt("First question: Which arithmetic operator use for Exponentiation (ES2016)? : a) -     b) =     c)**   select one of these options and enter the letter with the correct answer in lowercase ");
if (firstQuestion === 'c') {
	pointsForFirstQuestion = 2;
} else {
	pointsForFirstQuestion = 0;
}
const secondQuestion = prompt("Second question: Which arithmetic operator use for Increment (ES2016)? : a) ++        b) +     c) /   select one of these options and enter the letter with the correct answer in lowercase ");
if (secondQuestion === 'a') {
	pointsForSecondQuestion = 2;
} else {
	pointsForSecondQuestion = 0;
}
const thirdQuestion = prompt("Third question: Which arithmetic operator use for Decrement (ES2016)? : a) *    b) --    c) %    select one of these options and enter the letter with the correct answer in lowercase ");
if (thirdQuestion === 'b') {
	pointsForThirdQuestion = 2;
} else {
	pointsForThirdQuestion = 0;
}

const userPoints = +pointsForFirstQuestion + +pointsForSecondQuestion + +pointsForThirdQuestion;

alert(`You scored ${userPoints} points`);
//!it work

const userDate = prompt('Please enter date in this format (day.mounth.year)', "0", "0", "0");
alert(userDate[0]);
alert(userDate[1]);
alert(userDate[2]);
//?it doesn't work

