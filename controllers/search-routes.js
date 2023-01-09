const router = require('express').Router();
const { Post, User, Emoji, PostEmoji } = require('../models');
const withAuth = require('../utils/auth');

// GET posts with the same emojiId from feed
router.get('/feed/:id', withAuth, async (req, res) => {
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

// GET posts with the same emojiId from profile
router.get('/profile/:id', withAuth, async (req, res) => {
  try {
    const dbPostEmojiData = await PostEmoji.findAll({
      where: { 
        emoji_id: req.params.id,
        user_id: req.session.user_id, 
      }, 
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