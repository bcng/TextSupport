/////////////////////////////////////
//  DEPENDENCIES
/////////////////////////////////////

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var port = 8899;

/////////////////////////////////////
//  MIDDLEWARE
/////////////////////////////////////

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(cors());

/////////////////////////////////////
//  ENDPOINTS
/////////////////////////////////////

app.get('/api/message', function(req, res){
	return res.send({"message": "Hello world!"});
});

app.post('/api/send_text_message', function(req, res){
	res.send('Good');
});

app.listen(port, function() {
	console.log("Listening on port " + port);
})
