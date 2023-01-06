// covers everything in terms of rendering saved posts
const router = require('express').Router();
const { SavedPost, User } = require('../models');
const withAuth = require('../utils/auth');

// GET all posts on profile
router.get('/', withAuth, async (req, res) => {
  // console.log('starting GET route for all posts on proi');
  try {
    const dbSavedPostData = await SavedPost.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: Post,
        },
        {
          model: User,
          attributes: ['username'],
        },
        }
      ]
    });

    const savedPosts = dbSavedPostData.map((savedPost) => savedPost.get({ plain: true }));
    // console.log(savedPosts);

    res.render('profile-all-saved-posts', {
      layout: 'profile',
      savedPosts, 
    });

  } catch (error) {
    console.log('>>> error: ', error);
    res.redirect('login');
  }
});


module.exports = router;


