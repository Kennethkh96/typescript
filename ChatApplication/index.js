"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Express = require("express");
var app = Express();
var Http = require("http");
var http = new Http.Server(app);
var Socket = require("socket.io");
var io = Socket(http);
var usernames = {};
app.get('/', function (req, resp) {
    resp.sendFile(__dirname + "/index.html");
});
app.get('/socket.io.slim.js', function (req, resp) {
    resp.sendFile(__dirname + "/socket.io.slim.js");
});
io.on('connection', function (conn) {
    console.log("Someone connected");
    conn.on('set username', function (mess) {
        if (usernames[mess] === undefined || usernames[mess] === null) {
            usernames[mess] = conn;
            conn.emit("username accepted", { username: mess, message: "your username was accepted" });
            conn.broadcast.emit('new connection', { username: mess, message: "has just connected!", id: conn.id });
        }
        else {
            conn.emit("username denied", { username: mess, message: 'username is already taken' });
        }
    });
    conn.on('whisper', function (mess) {
        var targetCon = usernames[mess.target];
        var fromUsername = mess.from;
        console.log("new whisper from: " + fromUsername + " to: " + mess.target);
        if (targetCon != null)
            conn.broadcast.to(targetCon.id).emit('whisper', { username: fromUsername, message: mess.message, id: conn.id });
    });
    conn.on('message', function (mess) {
        console.log("new message: " + mess.message + " from " + mess.username);
        conn.broadcast.emit('new message', { username: mess.username, message: mess.message, id: conn.id });
    });
    conn.on('disconnect', function () {
        var user = GetUsernameByConn(conn);
        console.log(user + " disconnected");
        io.emit('disconnect', { username: user, message: "has just disconnected!", id: conn.id });
        delete usernames[user];
    });
});
function GetUsernameByConn(conn) {
    Object.keys(usernames).forEach(function (k) {
        if (usernames.hasOwnProperty(k)) {
            if (usernames[k].id === conn.id)
                return k;
        }
    });
    return "gggg";
}
http.listen(3000, function () {
    console.log("Listing on port 3000...");
});
