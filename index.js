var express = require('express');

var app = express();

app.get('/:filename', function(req, res, next){
	var option = {
		root: __dirname+'/public',
	};
	var filename = req.params.filename;
	if (filename){
			res.sendFile(filename, option, function(err){
			if (err){
				console.log(err);
				res.status(err.status).end();
			}
		});
	} else {
		res.sendFile('index.html', option);
	}
	
	console.log(req.ip);
	console.log(req.protocol);
});

app.listen(8888)
