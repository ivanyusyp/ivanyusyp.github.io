// 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов. 
// class circle {
// 	constructor(_circleRadius) {
// 		this.circleRadius = _circleRadius;
// 	}
// 	get radius() {
// 		return [this.circleRadius];
// 	}
// 	set radius(newRadius) {
// 		[this.circleRadius] = [...newRadius];
// 	}
// 	get circleDiameter() {
// 		return `Діаметр кола :${this.circleRadius * 2}`;
// 	}
// 	calcCircleArea() {
// 		let s = (Math.PI * this.circleRadius * this.circleRadius).toFixed(3);
// 		console.log(`Площа кола становить :${s}`);
// 	}
// 	calcСircuit() {
// 		let c = (2 * Math.PI * this.circleRadius).toFixed(3);
// 		console.log(`Довжина кола становить :${c}`);
// 	}
// 	print() {
// 		console.log(`Current radius : ${this.circleRadius} `);

// 	}
// }
// let r = new circle(5);
// console.log(r.radius);
// r.radius = [9];
// console.log(r.radius);
// r.calcCircleArea();
// r.calcСircuit();
// !work



// 2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);
// метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.

// Продемонстрировать работу написанных методов. 
class Marker {
	constructor(_color, _amountInkInPrecent) {
		this.color = _color;
		this.amountInkInPrecent = _amountInkInPrecent;
	}
	print(t = ["Some text"]) {
		let text = t.split('');
		for(i = 0; i<200; i+text.lenght) {
			
			document.write("<p>" + t.fontcolor('red') + "</p>");
		}
		
		console.log(t);
		console.log(text);
	}
}
let m = new Marker;
m.color = "red";
m.amountInkInPrecent = 0;
m.print('dsadasd');


// 3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.

// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().

// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().