const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer();

server.listen(8888, ()=>{
    console.log('serfer is ready!')
})

server.on('request', (req,res) => {
    let path = url.parse(req.url).pathname;
    console.log('path = ' + path);
    if(path === '/welcome'){
        fs.readFile('myres.html', 'utf-8', (err, data) => {
            if(err) console.log(err);
            res.end(data);
        })
    }else{
        res.end('ok');
    }
})