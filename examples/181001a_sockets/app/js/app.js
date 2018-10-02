let socket = io();
let mouseDivs = {};

document.addEventListener('mousemove', function(e) {
	socket.emit('mouse', {
		x: e.pageX,
		y: e.pageY
	});
});

socket.on('mousePositions', function(mousePositions) {
	Object.keys(mousePositions).forEach(function(key) {
		if (mouseDivs[key] != undefined) {
			// div exists
			mouseDivs[key].style.left = mousePositions[key].x + 'px';
			mouseDivs[key].style.top = mousePositions[key].y + 'px';
		} else {
			// div does not exist
			let div = document.createElement('div');
			document.body.appendChild(div);

			div.classList.add('mouse');
			div.style.left = mousePositions[key].x + 'px';
			div.style.top = mousePositions[key].y + 'px';

			mouseDivs[key] = div;
		}
	});

	Object.keys(mouseDivs).forEach(function(key) {
		if (mousePositions[key] === undefined) {
			document.body.removeChild(mouseDivs[key]);

			delete mouseDivs[key];
		}
	});
});
