// require express
var express = require('express');
var path    = require('path');

// create, then export our router object
var router = express.Router();
module.exports = router;

/* ROUTES */
router.get('/', function(req, res) {
  res.render('pages/home');
});

router.get('/home', function(req, res) {
  res.render('pages/home');
});

router.get('/services', function(req, res) {
  res.render('pages/services');
});

router.get('/gallery', function(req, res) {
  res.render('pages/gallery');
});

router.get('/about', function(req, res) {
  res.render('pages/about');
});

router.get('/contact', function(req, res) {
  res.render('pages/contact');
});

router.get('/testimonials', function(req, res) {
  res.render('pages/testimonials');
});

router.get('/wishlist', function(req, res) {
  res.render('pages/wishlist');
});
