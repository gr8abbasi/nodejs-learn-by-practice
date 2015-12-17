var express = require('express');
var router = express.Router();

/* GET About us page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'About Us' });
});

module.exports = router;
