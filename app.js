var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('Hello world\n');
});

app.listen(3000);

// console.log('Running on http://localhost:3000');
console.log('Running on http://45.32.62.137:3000');