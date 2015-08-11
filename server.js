/////////////////////////////////////
//  DEPENDENCIES
/////////////////////////////////////

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');
var twilio = require('twilio');
var Firebase = require('firebase');

// Twilio Credentials 
var accountSid = 'AC7d5471f4e18bccf9785561844d8c9467';
var authToken = '31f2f18d45a7558640c645c410ccd735';

// Create a REST client 
var client = twilio(accountSid, authToken);

// Create new Firebase ref
var firebaseRef = new Firebase('https://text-support-nodejs.firebaseio.com/numbers');

var app = express();
var port = 8899;

/////////////////////////////////////
//  MIDDLEWARE
/////////////////////////////////////
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

/////////////////////////////////////
//  ENDPOINTS
/////////////////////////////////////

app.get('/api/message', function(req, res) {
    res.send({
        "message": "Hello world!"
    });
});

app.post('/api/send_text_message', function(req, res) {
    console.log(req.body.message);

    // request.post('https://' + accountSid + ':' + authToken + '@api.twilio.com/2010-04-01/Accounts/' + accountSid + '/Messages.json');

    client.messages.create({
        to: "9179030909",
        from: "19177465893",
        body: "hey",
    }, function(err, message) {
        console.log(message.sid);
    });

});

app.post('/api/support/messages', function(req, res) {
    

});

app.listen(port, function() {
    console.log("Listening on port " + port);
})
