var express = require('express'),
	app = express();

app
	.get('/*',function(req,res) {
		res.sendFile('index.html', {root:'./public/'})
	})
	.listen(3000);