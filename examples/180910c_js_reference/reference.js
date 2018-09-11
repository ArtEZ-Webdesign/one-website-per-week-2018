// 1. JavaScript is untyped.

let message = 'Hello world!';

console.log(message); // 'Hello World!'

// 2. Most things are objects.

let designingTheWeb = {
	room: 'R3.06',
	teacher: 'Bram',
	participants: [
		'Sjoerd',
		'Erik',
		'Wessel'
	],
	literature: [{
		title: 'Form and Code',
		author: 'Casey Reas',
		related: [{
			title: 'Processing: A Programming Handbook',
			author: 'Casey Reas'
		}, {
			title: 'Generative Design',
			author: 'Onformative'
		}]
	}]
};

console.dir(designingTheWeb.literature[0].related[1].title); // 'Generative Design'

// 3. Functions are variables.

function doBoth(functionA, functionB) {
	functionA();
	functionB();
}

function myFunction() {
	console.log('Hello world!');
}

function myFunction2() {
	console.log('Goodbye world!');
}

doBoth(myFunction, myFunction2); // 'Hello world!' and 'Goodbye world!'

// 4. JavaScript doesn't care.

// You'll come across plenty of examples of this rule.
