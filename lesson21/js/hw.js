let name = prompt('What is your name', 'John');
alert(`hello${name}`);

let yearOfBorn = prompt('What year your born?:', 0);
const yourCurrentAge = 2020 - yearOfBorn;
alert(`Your are ${yourCurrentAge} years old`);

let gridSideOfSquare = prompt('Let into grid side of square:', 0);
let perimetersOfTheSquare = gridSideOfSquare * 4;
alert(`Perimeters of the square is ${perimetersOfTheSquare}`);

let theRadiusOfTheCircle = prompt('Let into the radius of the circle:', 0);
let theAreaOfTheDisc = Math.PI * Math.pow(theRadiusOfTheCircle, 2);
alert(`The area of the disc is - ${theAreaOfTheDisc}`);

let distanceInKm = prompt('Let into distance in km between cities:', 0);
let timeInRoad = prompt('How many hours do you want to spend fo road?:', 0);
let speedOfMovement = distanceInKm / timeInRoad;
alert(`You speed of movement must be ${speedOfMovement} km/hour to be in time`);

let sumOfMoneyInDollars = prompt('Let into sum of money in dollars:', 0);
const exchangeRate = 0.9297945005;
let amountInEuro = sumOfMoneyInDollars * exchangeRate;
alert(`The amount in Euros is ${amountInEuro}`);

let storageCapasity = prompt('What is your storage capasity in gigabites?:', 0);
const numberOfMegabyteInGigabyte = 1024;
const filesDatabase = 820;
let numberOfFiles = storageCapasity * numberOfMegabyteInGigabyte / filesDatabase;
numberOfFiles = Math.floor(numberOfFiles);
alert(`You can upload ${numberOfFiles} files in your storage device`);

let theAmountOfMoneyInTheWallet = prompt('Enter the amount of money in your wallet in $:', 0);
let thePriceOfOneChocolate = prompt('Enter the price of the one chocolate', 0);
let numberOfChocolates = Math.floor(theAmountOfMoneyInTheWallet / thePriceOfOneChocolate);
let numberOfSurrender = theAmountOfMoneyInTheWallet - thePriceOfOneChocolate * numberOfChocolates;
alert(`You can buy ${numberOfChocolates} Chocolate(s)`);
alert(`Your surrender is ${numberOfSurrender}$`);

const userNumber = +prompt('Enter your number:', 0);
const firstNumber = Math.floor(userNumber / 100);
const secondNumber = Math.floor((userNumber % 100) / 10);
const thirdNumber = Math.floor((userNumber % 100) % 10);
alert(`${'' + thirdNumber + secondNumber + firstNumber}`);

const ClientDeposit = +prompt('Enter the amount of your deposit in $ :', 0);
const ClientPercent = ClientDeposit * 0.05 / 12;
alert(`Your amount with percent is ${ClientPercent + ClientDeposit}$`);

