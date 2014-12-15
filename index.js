var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send('hello, it is a node test');
});

app.listen(8888)