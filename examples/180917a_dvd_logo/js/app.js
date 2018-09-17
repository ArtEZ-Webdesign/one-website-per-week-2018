// Search the document for anything that has the class 'square', and store the first result in a variable called 'square'.
let square = document.querySelector('.square');

// Set the initial speed and location
let x = 0;
let xSpeed = 5;

let y = 0;
let ySpeed = 5;

// Set a random background color when we load the page.
changeBackgroundColor();

// Implement the background color change function.
function changeBackgroundColor() {
	// Generate a random red, green and blue channel. NB: mathematical functions in JS are stored inside the Math object.
	let red = Math.round(Math.random() * 255);
	let green = Math.round(Math.random() * 255);
	let blue = Math.round(Math.random() * 255);

	// Set the CSS background-color attribute to rgb(red, green, blue) -- using the variables we just created above.
	document.body.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

// Implement a draw function -- like in Processing.
function draw() {
	// Gather some information about our window and our square.
	let squareWidth = square.clientWidth;
	let windowWidth = window.innerWidth;
	let squareHeight = square.clientHeight;
	let windowHeight = window.innerHeight;

	// Conditionals that check when our square hits the edges of the screen.
	if (x >= windowWidth - squareWidth) {
		// When it reaches the right side of the screen, take the inverse of the absolute value of xSpeed (so we always end up with a negative number, i.e. a left-facing speed).
		xSpeed = -Math.abs(xSpeed);
		// And set a random background color.
		changeBackgroundColor();
	}

	if (y >= windowHeight - squareHeight) {
		ySpeed = -Math.abs(ySpeed);
		changeBackgroundColor();
	}

	if (x <= 0) {
		xSpeed = Math.abs(xSpeed);
		changeBackgroundColor();
	}

	if (y <= 0) {
		ySpeed = Math.abs(ySpeed);
		changeBackgroundColor();
	}

	// Set the CSS left and top attributes for our square.
	square.style.left = x + 'px';
	square.style.top = y + 'px';

	// Add our new speed to the x and y variables.
	x += xSpeed;
	y += ySpeed;
}

// Call the draw function once every 1/60th of a second.
setInterval(draw, 17);
