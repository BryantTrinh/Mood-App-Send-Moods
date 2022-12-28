const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const feedRoutes = require('./feedRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/feed', feedRoutes);

module.exports = router;

module.exports = router;