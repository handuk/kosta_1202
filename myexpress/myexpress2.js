const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.set('views', __dirname+'/view');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(require('./myrouter'))

app.listen(8888, ()=>{console.log('server start')})