// Создать HTML-страницу с большой таблицей. При клике по заголовку колонки, необходимо отсортировать данные по этой колонке. Учтите, что числовые значения должны сортироваться как числа, а не как строки.
function sortTableNumeric() {
	let table, rows, switching, i, x, y, shouldSwitch;
	table = document.getElementById('main');
	switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
	while (switching) {
		//start by saying: no switching is done:
		switching = false;
		rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
		for (i = 1; i < (rows.length - 1); i++) {
			//start by saying there should be no switching:
			shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
			x = rows[i].getElementsByTagName("TD")[0];
			y = rows[i + 1].getElementsByTagName("TD")[0];
			//check if the two rows should switch place:
			if (Number(x.innerHTML) > Number(y.innerHTML)) {
				//if so, mark as a switch and break the loop:
				shouldSwitch = true;
				break;
			}
		}
		if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
		}
	}
}

const text1column = document.getElementById("text1");
const text2column = document.getElementById("text2");
const text3column = document.getElementById("text3");
const number1column = document.getElementById("number1");
const number2column = document.getElementById("number2");
const number3column = document.getElementById("number3");

text1column.addEventListener('click', function (event) {
	console.log('text');
})
number1column.addEventListener('click', function (event) {
	console.log('number');
	sortTableNumeric();
})
text2column.addEventListener('click', function (event) {
	console.log('text');
})
number2column.addEventListener('click', function (event) {
	console.log('number');
	sortTableNumeric();
})
text3column.addEventListener('click', function (event) {
	console.log('text');
})
number3column.addEventListener('click', function (event) {
	console.log('number');
	sortTableNumeric();
})
