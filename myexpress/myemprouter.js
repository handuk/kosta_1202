const express = require('express');
const router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

router.get('/emp/:id', (req, res) => {
    let _id = req.params.id;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("tutorial");
        dbo.collection("emps").findOne({'_id':_id}, function(err, result) {
            if (err) throw err;
            res.send(result)
            db.close();
        });
    });
})

router.get('/emp', (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("tutorial");
        dbo.collection("emps").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
    });
})


module.exports = router;