var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send('hello, it is a node test');
	console.log(req.ip);
	console.log(req.protocol);
});

app.listen(8888)
