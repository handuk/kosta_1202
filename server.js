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
    
    function updateUsername(){
        io.sockets.emit('get users', users);
    }
});
