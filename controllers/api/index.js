const express = require('express');
const router = express.Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const commentRoutes = require('./comment-routes.js');

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;

// Finished

// const router = require('express').Router();

// const apiRoutes = require('./api');
// const homeRoutes = require('./home-routes.js');
// const profileRoutes = require('./profile-routes.js');

// router.use('/', homeRoutes);
// router.use('/profile', profileRoutes);
// router.use('/api', apiRoutes);

// module.exports = router;