var express = require('express');
var router = express.Router();

/* My data.js file */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Amogh Reddy Nalla' });
});

module.exports = router;
