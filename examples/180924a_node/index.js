const express = require('express');

const app = express();

let users = {};

function connected(req, res, next) {
	if (users[req.params.user]) {
		users[req.params.user]++;
	} else {
		users[req.params.user] = 1;
	}

	console.dir(users);

	res.sendFile(__dirname + '/app/index.html');
}

app.get('/:user', connected);

app.use(
	express.static(
		__dirname + '/app'
	)
);

app.listen(8080);
