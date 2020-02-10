const elementCount = 20;
let element;

function randomize() {
	document.body.style.background = "#" + Math.floor(Math.random() * 16777216).toString();
	for(let i = 1; i <= elementCount; i++) {

		element = document.getElementById("a" + i);
		let color = Math.floor(Math.random() * 16777216).toString();
		element.style.color = "#" + color;
		let size = Math.floor(Math.random() * 1000);
		element.style.width = size;
		size = Math.floor(Math.random() * 1000);
		element.style.height = size;

		size = Math.floor(Math.random() * 100);
		element.style.fontSize = size + 1;		

		size = Math.floor(Math.random() * 100);
		element.style.paddingLeft = size;
	}
}


setInterval(randomize, 50);