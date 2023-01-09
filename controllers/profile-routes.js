const router = require('express').Router();
const { Post, User, Emoji } = require('../models');
const PostEmoji = require('../models/PostEmoji');
const { localStorage } = require("node-localstorage");

const withAuth = require('../utils/auth');

// GET all posts on profile
router.get('/', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
        // emoji_id: emojiId, // *optional query parameter
      },
      include: [
        {
          model: User,
          required: true,
        },
        {
          model: Emoji,
          through: PostEmoji,
        }
      ]
    });

    // serialize data from SQL for handlebars to handle
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    res.render('profile-all-posts', {
      layout: 'profile',
      posts, 
    });
    console.log(posts);

  } catch (error) {
    console.log('>>> error: ', error);
    res.redirect('login');
  }
});

// GET to create new post page
router.get('/new', withAuth, async (req, res) => {
  try {
    res.render('create-new-post', {
      layout: 'profile',
    });

  } catch (error) {
    console.log(error);
    res.status(400).json(err);
  }
});

// GET to edit post page
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });
      
      res.render('edit-post', {
        layout: 'main',
        post,
      });

    } else {
      res.status(404).end();
    }

  } catch (error) {
    console.log(error);
    res.redirect('/login');
  }
})

// router.get('/saved-post', withAuth, async ())

module.exports = router;