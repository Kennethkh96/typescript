"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Express = require("express");
var app = Express();
var Request = require("request");
var Querystring = require("querystring");
var REDIRECT_URI = 'http://localhost:3000/callback';
var CLIENT_ID = 'c637a8aecc2240ab8b9deb83b8e5224b';
var CLIENT_SECRET = 'da6993497842475d91fe2a96f114c8e4';
app.get('/callback', function (req, resp) {
    console.log("CALLBACK");
    console.log("CODE => " + req.query.code);
    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
            code: req.query.code,
            redirect_uri: REDIRECT_URI,
            grant_type: 'authorization_code'
        },
        headers: {
            'Authorization': 'Basic ' + (new Buffer(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'))
        },
        json: true
    };
    Request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var access_token = body.access_token;
            var options = {
                url: 'https://api.spotify.com/v1/me',
                headers: { 'Authorization': 'Bearer ' + access_token },
                json: true
            };
            Request.get(options, function (error, response, body) {
                console.log(body);
            });
        }
    });
    resp.send("");
});
app.get('/', function (req, resp) {
    //resp.sendFile(__dirname + "/spotify.html");
    resp.redirect('https://accounts.spotify.com/authorize?' +
        Querystring.stringify({
            response_type: 'code',
            client_id: 'c637a8aecc2240ab8b9deb83b8e5224b',
            redirect_uri: 'http://localhost:3000/callback'
        }));
});
app.get('/spotifyoauth.js', function (req, resp) {
    resp.sendFile(__dirname + "/spotifyoauth.js");
});
function GenerateRandomString(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
;
app.listen(3000, function () {
    console.log("listening on port 3000...");
});
