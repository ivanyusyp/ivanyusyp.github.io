// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:

// Функция для вывода на экран информации об автомобиле;

// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

// let carInfo = {
// 	producer: "Land Rover",
// 	model: "Range Rover",
// 	graduationYear: 2020,
// 	averageSpeed: 100,
// 	getInfo: function () {
// 		console.log(this.producer);
// 		console.log(this.model);
// 		console.log(this.graduationYear);
// 		console.log(this.averageSpeed);
// 	},
// 	calcTime: function (lenght) {
// 		const time = lenght / this.averageSpeed;
// 		if (time > 4) {
// 			if (lenght % this.averageSpeed === 0) {
// 				return ((lenght / this.averageSpeed) / 4 - 1) + (lenght / this.averageSpeed);
// 			} else {
// 				return ((lenght / this.averageSpeed) / 4 - 1) + (lenght / this.averageSpeed) + (lenght % this.averageSpeed);
// 			}
// 		}
// 	}
// }
// console.log(carInfo.getInfo());
// console.log(carInfo.calcTime(2100));
// !work

// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

// Функция сложения 2-х объектов-дробей;

// Функция вычитания 2-х объектов-дробей;

// Функция умножения 2-х объектов-дробей;

// Функция деления 2-х объектов-дробей;

// Функция сокращения объекта-дроби.

// const fractionalNumber = {
// 	firstFractionalNumber: {
// 		numeratorFirstDigit: 50,
// 		denominatorFirstDigit: 100,
// 	},
// 	secondFractionalNumber: {
// 		numeratorSecondDigit: 4,
// 		denominatorSecondDigit: 5,
// 	},

// 	calcAddition: function () {
// 		const numeratorFirst = ((this.firstFractionalNumber.numeratorFirstDigit) * (this.secondFractionalNumber.denominatorSecondDigit));
// 		const numeratorSecond = ((this.secondFractionalNumber.numeratorSecondDigit) * (this.firstFractionalNumber.denominatorFirstDigit));
// 		const denominatorCommon = ((this.secondFractionalNumber.denominatorSecondDigit) * (this.firstFractionalNumber.denominatorFirstDigit));
// 		const sumNumerators = (numeratorFirst + numeratorSecond);

// 		if (sumNumerators === 0 || denominatorCommon === 0 || this.firstFractionalNumber.numeratorFirstDigit === 0 || this.firstFractionalNumber.denominatorFirstDigit === 0 || this.secondFractionalNumber.numeratorSecondDigit === 0 || this.secondFractionalNumber.denominatorSecondDigit === 0) {
// 			return '0';
// 		} else {
// 			return sumNumerators + '/' + denominatorCommon;
// 		}
// 	},
// 	calcSubtraction: function () {
// 		const numeratorFirst = ((this.firstFractionalNumber.numeratorFirstDigit) * (this.secondFractionalNumber.denominatorSecondDigit));
// 		const numeratorSecond = ((this.secondFractionalNumber.numeratorSecondDigit) * (this.firstFractionalNumber.denominatorFirstDigit));
// 		const denominatorCommon = ((this.secondFractionalNumber.denominatorSecondDigit) * (this.firstFractionalNumber.denominatorFirstDigit));
// 		const differenceNumerators = (numeratorFirst - numeratorSecond);
// 		if (differenceNumerators === 0 || denominatorCommon === 0 || this.firstFractionalNumber.numeratorFirstDigit === 0 || this.firstFractionalNumber.denominatorFirstDigit === 0 || this.secondFractionalNumber.numeratorSecondDigit === 0 || this.secondFractionalNumber.denominatorSecondDigit === 0) {
// 			return '0';
// 		} else {
// 			return differenceNumerators + '/' + denominatorCommon;
// 		}
// 	},
// 	calcMultiplication: function () {
// 		const numerator = this.firstFractionalNumber.numeratorFirstDigit * this.secondFractionalNumber.numeratorSecondDigit;
// 		const denominator = this.firstFractionalNumber.denominatorFirstDigit * this.secondFractionalNumber.denominatorSecondDigit;
// 		if (numerator === 0 || denominator === 0) {
// 			return '0';
// 		} else {
// 			return numerator + '/' + denominator;
// 		}

// 	},
// 	calcDivision: function () {
// 		const numerator = this.firstFractionalNumber.numeratorFirstDigit * this.secondFractionalNumber.denominatorSecondDigit;
// 		const denominator = this.firstFractionalNumber.denominatorFirstDigit * this.secondFractionalNumber.numeratorSecondDigit;
// 		const n = numerator;
// 		const d = denominator;
// 		if (numerator === 0 || denominator === 0) {
// 			return '0';
// 		} else {
// 			return n + '/' + d;
// 		}
// 	},
// 	getReducingFractionFirstNumber: function () {
// 		if (this.firstFractionalNumber.numeratorFirstDigit === 0 || this.firstFractionalNumber.denominatorFirstDigit === 0 || this.secondFractionalNumber.numeratorSecondDigit === 0 || this.secondFractionalNumber.denominatorSecondDigit === 0) {
// 			return '0';
// 		}
// 		const numeratorDividers = [];
// 		const denominatorDividers = [];
// 		for (i = this.firstFractionalNumber.numeratorFirstDigit; i >= 1; i--) {
// 			if (this.firstFractionalNumber.numeratorFirstDigit % i === 0) {
// 				numeratorDividers.push(i);
// 			}
// 		}
// 		for (i = this.firstFractionalNumber.denominatorFirstDigit; i >= 1; i--) {
// 			if (this.firstFractionalNumber.denominatorFirstDigit % i === 0) {
// 				denominatorDividers.push(i);
// 			}
// 		}
// 		for (i = 0; i < denominatorDividers.length; i++) {
// 			const commonDivider = denominatorDividers[i];
// 			if (numeratorDividers.includes(commonDivider)) {
// 				const divider = commonDivider;
// 				const numerator = this.firstFractionalNumber.numeratorFirstDigit / divider;
// 				const denominator = this.firstFractionalNumber.denominatorFirstDigit / divider;
// 				return numerator + '/' + denominator;
// 			}
// 		}
// 	},
// 	getReducingFractionSecondNumber: function () {
// 		if (this.firstFractionalNumber.numeratorFirstDigit === 0 || this.firstFractionalNumber.denominatorFirstDigit === 0 || this.secondFractionalNumber.numeratorSecondDigit === 0 || this.secondFractionalNumber.denominatorSecondDigit === 0) {
// 			return '0';
// 		}
// 		const numeratorDividers = [];
// 		const denominatorDividers = [];
// 		for (i = this.secondFractionalNumber.numeratorSecondDigit; i >= 1; i--) {
// 			if (this.secondFractionalNumber.numeratorSecondDigit % i === 0) {
// 				numeratorDividers.push(i);
// 			}
// 		}
// 		for (i = this.secondFractionalNumber.denominatorSecondDigit; i >= 1; i--) {
// 			if (this.secondFractionalNumber.denominatorSecondDigit % i === 0) {
// 				denominatorDividers.push(i);
// 			}
// 		}
// 		for (i = 0; i < denominatorDividers.length; i++) {
// 			const commonDivider = denominatorDividers[i];
// 			if (numeratorDividers.includes(commonDivider)) {
// 				const divider = commonDivider;
// 				const numerator = this.secondFractionalNumber.numeratorSecondDigit / divider;
// 				const denominator = this.secondFractionalNumber.denominatorSecondDigit / divider;
// 				return numerator + '/' + denominator;
// 			}
// 		}
// 	}

// }
// console.log(fractionalNumber.calcAddition());
// console.log(fractionalNumber.calcSubtraction());
// console.log(fractionalNumber.calcMultiplication());
// console.log(fractionalNumber.calcDivision());
// console.log(fractionalNumber.getReducingFractionFirstNumber());
// console.log(fractionalNumber.getReducingFractionSecondNumber());


// ! work


// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 

// Функция вывода времени на экран;

// Функция изменения времени на переданное количество секунд;

// Функция изменения времени на переданное количество минут;

// Функция изменения времени на переданное количество часов. 

// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

// const timeInfo = {
// 	hours: 20,
// 	minutes: 26,
// 	seconds: 45,
// 	getTimeOnScreen: function getTime(a, b, c) {
// 		if (0 > a || a > 23 || b < 0 || b > 59 || c < 0 || c > 59) {
// 			return "Ви ввели невірні дані"
// 		}
// 		if (!a) {
// 			return '00' + ':' + b + ':' + c;
// 		}
// 		if (!b) {
// 			return a + ':' + '00' + ':' + c;
// 		}
// 		if (!c) {
// 			return a + ':' + b + ':' + '00';
// 		}
// 		if (!b && !c) {
// 			return a + ':' + '00' + ':' + '00';
// 		}
// 		if (!a && !c) {
// 			return '00' + ':' + b + ':' + '00';
// 		}
// 		if (!a && !b) {
// 			return '00' + ':' + '00' + ':' + c;
// 		}
// 		if (!a && !b && !c) {
// 			return '00' + ':' + '00' + ':' + '00';
// 		}
// 		return a + ':' + b + ':' + c
// 	}


// }
// console.log(timeInfo.getTimeOnScreen(20, 45, 45));
// ? work just 1-st function