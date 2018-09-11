let container = document.querySelector('.container');

function toggle() {
	if (container.classList.contains('blue')) {
		container.classList.remove('blue');
	} else {
		container.classList.add('blue');
	}
}

setInterval(toggle, 1000); // milliseconds
