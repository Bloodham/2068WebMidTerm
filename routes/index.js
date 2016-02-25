/*Web Mid Term
Ryan Jameson
http://webmidterm.azurewebsites.net/
This page gives routes for each web page */
var express = require('express');
var router = express.Router();

/* GET Landing page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Favorite People' });
});

/* GET People page. */
router.get('/people', function(req, res, next) {
  res.render('people', { title: 'People Page' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Page' });
});

module.exports = router;
