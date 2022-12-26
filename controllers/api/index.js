// Finished

const express = require('express');

const router = express.Router();

const userRoutes = require('./user-routes.js');

const postRoutes = require('./post-routes.js');

router.use('/user', userRoutes);

router.use('/post', postRoutes);

module.exports = router;