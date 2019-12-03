const http = require('http');

const server = http.createServer((req, res) =>{
    res.end('OK;');
})

server.listen(8888, ()=>{
    console.log('serfer is ready!')
})

server.on('request', (req,res) => {
    res.end('request handler excuted');
})