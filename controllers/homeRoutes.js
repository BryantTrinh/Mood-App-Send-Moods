const router = require('express').Router();
const { User, Post, Comment } = require('../models');

const withAuth = require('../utils/auth');

// GET login page
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to the feed page
  if (req.session.loggedIn) {
    res.redirect('/feed');
    return;
  }

  res.render('login');
});

// GET signup page
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/feed');
    return;
  }

  res.render('signup');
})

module.exports = router;
