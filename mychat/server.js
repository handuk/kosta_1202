var express= require('express');
var app= express();
var server= require('http').createServer(app);
var io= require('socket.io').listen(server);
var users=[];
var connections= [];
server.listen(3000);
console.log('server is running');
app.get('/', function(req, res){
    res.sendFile(__dirname+ '/index.html');
});

io.sockets.on('connection', function(socket){
    connections.push(socket);
    console.log('connection : %s sockets connected', socket);
    socket.on('newUser', (data, callback) => {
        console.log(data);
        socket.username = data;
        users.push(data);
        callback(true);
        updateUsername();
    })
    socket.on('disconnect', ()=>{
        if(!socket.username) return;
        users.splice(users.indexOf(socket.username), 1);
        connections.splice(connections.indexOf(socket), 1);
        updateUsername();
    })
    socket.on('sendMsg', (msg)=>{
        io.sockets.emit('receivedMsg', {username:socket.username, msg:msg})
    })
    function updateUsername(){
        io.sockets.emit('allUsers', users);
    }
});
