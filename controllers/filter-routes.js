const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Post, Emoji } = require('../models');

router.get('/id', withAuth, (req, res) => {
  Post.findAll({
    attributes: ['id', 'content', 'selected_moods'],
    include: [{
      model: Emoji,
      as: 'emoji',
      attributes: ['emoji']
  }],
    where: {
      mood: {
        [Op.in]: Sequelize.literal(`(SELECT id FROM selected_moods)`)
      }
    }
    }).then(posts => {
      res.send(posts);
   })
});

module.exports = router;