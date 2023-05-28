var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/serve', function(req, res, next) {
  MongoClient.connect(url, function(err, db) {
    var dbo = db.db('users')
    console.log("dbo", dbo)
    if (err) throw err;
    console.log("Database created!");
    db.close();
  });

  res.send("hell")
});



module.exports = router;
