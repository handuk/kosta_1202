const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname+'/view')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/emp/:id', (req, res) => {
    let id = req.params.id;
    let result = {
        id : id,
        name : 'haha'
    }
    // res.send(result);
    res.render('emp', result);
})



app.listen(8888, ()=>{console.log('server start')})