let container = document.querySelector('.container');

let buttonRed = document.querySelector('.red-button');

let buttonBlue = document.querySelector('.blue-button');

function makeItRed() {
	container.classList.remove('blue');
}

function makeItBlue() {
	container.classList.add('blue');
}

buttonRed.addEventListener('click', makeItRed);
buttonBlue.addEventListener('click', makeItBlue);
