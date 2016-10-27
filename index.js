var express = require('express');
var app = express();

app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

// var express = require('express');
//  var app = express();

app.get('/', function(req, res){
	res.send('bonjour, monde !');
});

app.use(express.static('files'));

app.listen(1337, function () {
  console.log('App on port 1337!');
});






