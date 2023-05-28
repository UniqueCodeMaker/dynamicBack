var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = process.env.Mongo_express_key ;
/* GET home page. */
// router.get('/test', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// router.get('/serve', function(req, res, next) {
//   MongoClient.connect(url, function(err, db) {
//     var dbo = db.db('users')
//     console.log("dbo", dbo)
//     if (err) throw err;
//     console.log("Database created!");
//     db.close();
//   });

//   res.send("hell")
// });


// router.get('/test', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
module.exports = router;
