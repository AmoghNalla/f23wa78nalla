var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  
    var x=parseFloat(req.query.x)||Math.random()*10;
    var y=Math.floor(x)
    var respString=`Math.floor applied to ${x} is ${y}`;
   
    res.send(respString);
});

module.exports = router;
