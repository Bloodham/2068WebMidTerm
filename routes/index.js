var express = require('express');
var router = express.Router();

/* GET Landing page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Favorite People' });
});

/* GET Landing page. */
router.get('/people', function(req, res, next) {
  res.render('people', { title: 'People Page' });
});

/* GET Landing page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Page' });
});

module.exports = router;
