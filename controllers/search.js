const router = require('express').Router();

const { SavedPost, Post } = require('../models');

const withAuth = require('../utils/auth');

// this router handler will search for a post with matching emoji_id and if it is found, it will render the post.handlebars template with the post.

router.get('/search', async (req, res) => {
  const { emoji_id } = req.query;
  
  // searching just for the emoji_id

  const post = await Post.findAll({
    where: {
      emoji_id,
    },
  });

  if(!post) {
    res.render('error', {message:
    'Post with those emojis not found' });
  } else {
    res.render('post', { post });
  }
});

module.exports = router;