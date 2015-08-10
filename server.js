/////////////////////////////////////
//  DEPENDENCIES
/////////////////////////////////////

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');
var twilio = require('twilio');

// Twilio Credentials 
var accountSid = '';
var authToken = '';

// Create a REST client 
var client = twilio(accountSid, authToken);

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

app.get('/api/message', function(req, res) {
    res.send({
        "message": "Hello world!"
    });
});

app.post('/api/send_text_message', function(req, res) {
    console.log(req.body.message);

    // request.post('https://' + accountSid + ':' + authToken + '@api.twilio.com/2010-04-01/Accounts/' + accountSid + '/Messages.json');

    client.messages.create({
        to: "917 903 0909",
        from: "+19177465893",
        body: "hey",
    }, function(err, message) {
        console.log(message.sid);
    });

});








app.listen(port, function() {
    console.log("Listening on port " + port);
})
