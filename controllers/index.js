const router = require('express').Router();
const moodRoutes = require('./api/mood-routes');
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const profileRoutes = require('./profile-routes.js');
const feedRoutes = require('./feed-routes.js');

router.use('/', homeRoutes); // landing page
router.use('/profile', profileRoutes);
router.use('/feed', feedRoutes);
router.use('/api', apiRoutes);

module.exports = router;
