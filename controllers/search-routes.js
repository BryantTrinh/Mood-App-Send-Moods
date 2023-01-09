const router = require('express').Router();
const { Post, User, Emoji, PostEmoji } = require('../models');
const withAuth = require('../utils/auth');

// GET posts with the same emojiId to render on search results page
// when we route to localhost:3002/search/:id
router.get('/:id', withAuth, async (req, res) => {
    try {
      const dbPostEmojiData = await PostEmoji.findAll({
        where: { emoji_id: req.params.id }, 
        include: [ 
          {
            model: Post,
            include: [ 
              User,
              {
                model: Emoji,
                through: PostEmoji,
              }
            ]
          },
        ]
      });
      
      const postEmojis = dbPostEmojiData.map((postEmoji) => postEmoji.get({ plain: true }));
      
      res.render('search-results', {
        layout: 'profile',
        postEmojis,
      });
      console.log('>>> postEmojis: ', postEmojis);
      
    } catch (error) {
      console.log(error);
      res.redirect('login');
    }
  });

module.exports = router;