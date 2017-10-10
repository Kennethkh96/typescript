import * as Express from 'express';
let app = Express();
import * as Http from 'http';
let http = new Http.Server(app);
import * as Socket from 'socket.io';
let io = Socket(http);

let usernames: any = {};

app.get('/', (req, resp) => {
    resp.sendFile(__dirname + "/index.html");
});

app.get('/socket.io.slim.js', (req, resp) => {
    resp.sendFile(__dirname + "/socket.io.slim.js")
});

io.on('connection', conn => {
    console.log("Someone connected");
    conn.on('set username', mess => {
        if (usernames[mess] === undefined || usernames[mess] === null)
        {
            usernames[mess] = conn;
            conn.emit("username accepted", {username: mess, message: "your username was accepted"});
            conn.broadcast.emit('new connection', {username: mess, message: "has just connected!", id: conn.id});
        }
        else
        {
            conn.emit("username denied", {username: mess, message: 'username is already taken'})
        }
    });
    conn.on('whisper', mess => {
        let targetCon = usernames[mess.target];
        let fromUsername = mess.from;
        console.log("new whisper from: " + fromUsername + " to: " + mess.target);
        if (targetCon != null)
            conn.broadcast.to(targetCon.id).emit('whisper', {username: fromUsername, message: mess.message, id: conn.id});
    })
    conn.on('message', mess => {
        console.log("new message: " + mess.message + " from " + mess.username);
        conn.broadcast.emit('new message', {username: mess.username, message: mess.message, id: conn.id});
    }); 

    conn.on('disconnect', () => {
        let user = GetUsernameByConn(conn);
        console.log(user + " disconnected");
        io.emit('disconnect', {username: user, message: "has just disconnected!", id: conn.id});
        delete usernames[user];
    });
});

function GetUsernameByConn(conn: SocketIO.Socket)
{
    Object.keys(usernames).forEach((k) => {
        if (usernames.hasOwnProperty(k))
        {
            if (usernames[k].id === conn.id)
                return k;
        }
    });
    return "gggg";
}

http.listen(3000, () => {
    console.log("Listing on port 3000...");
})