/* Todo:
				Реализовать функцию которая бы при клике на любой из элементов
				box присваивала стиль background-color: red
				 */

const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");

function fn(e) {
	return addEventListener(function (e) {
		return e.style.backgroundColor = 'red';
	})
}
// usage
fn(box1)("click")("red");
fn(box2)("click")("green");
fn(box3)("click")("teal");