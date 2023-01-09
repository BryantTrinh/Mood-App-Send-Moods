const router = require('express').Router();
const { Post, User, Emoji, PostEmoji } = require('../models');
const withAuth = require('../utils/auth');

// GET posts with the same emojiId to render on search results page
// copy paste to profile-routes.js and feed-routes.js to make 2 new routes: 
// '/profile/search/:id' and '/feed/search/:id'
// make 2 searchFormHandlers in search.js - one for feed and one for profile 
// and document.location.replace(`profile/search/${emojiId}`)
// then document.location.replace(`feed/search/${emojiId}`)
// when we route to localhost:3002/search/:id
router.get('feed/:id', withAuth, async (req, res) => {
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

  router.get('profile/:id', withAuth, async (req, res) => {
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