const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/emp/:id', (req, res) => {
    let id = req.params.id;
    let result = {
        id : id,
        name : 'haha'
    }
    // res.send(result);
    res.render('emp', result);
})

router.post('/another', (req, res) => {
    console.log(req.body.another);
    res.send('ok');
})

module.exports = router;