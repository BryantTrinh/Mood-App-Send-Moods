const router = require('express').Router();
const { User, Post, Comment } = require('../models');

const withAuth = require('../utils/auth');

// GET landing page
router.get('/', async (req, res) => {
  try {
    res.render('landing-page');
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// GET login/signup page
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to the feed page
  if (req.session.loggedIn) {
    res.redirect('/feed');
    return;
  }

  res.render('login');
});

module.exports = router;
