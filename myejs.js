const http = require('http');
const fs = require('fs');
const url = require('url');
const ejs = require('ejs');

const server = http.createServer();

server.listen(8888, ()=>{
    console.log('serfer is ready!')
})

server.on('request', (req,res) => {
    let path = url.parse(req.url).pathname;
    console.log('path = ' + path);
    if(path === '/welcome'){
        var emp = {
            id : 1234,
            name : 'dhan'
        }
        fs.readFile('myejs.ejs', 'utf-8', (err, data) => {
            if(err) console.log(err);
            res.end(ejs.render(data, emp));
        })
    }else{
        res.end('ok');
    }
})