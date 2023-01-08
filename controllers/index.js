const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const profileRoutes = require('./profile-routes.js');
const feedRoutes = require('./feed-routes.js');
// const searchRoutes = require('./search-routes.js');
const savedRoutes = require('./save-routes.js');

router.use('/', homeRoutes); // landing page
router.use('/profile', profileRoutes);
router.use('/feed', feedRoutes);
router.use('/api', apiRoutes);
// router.use('/search', searchRoutes);
router.use('/saved-posts', savedRoutes);


module.exports = router;
