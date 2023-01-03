// Finished
const router = require('express').Router();

const { Post } = require('../models');

const withAuth = require('../utils/auth');
// GET, withAuth, const postData, await, Post.findAll
// we want to req the req session userId
// then we can to create an array using .map,by using plain: true, we want the post to get the plain object representation of the original object, rather than the original object itself. We do this so we can work with a simple object that doesn't have any of the additional methods or properties of the orginal object.

router.get('/', withAuth, async (req, res) => {
  try{
    const postData = await Post.findAll({ where: {
      userId: req.session.userId,
    },
  });

   const posts = postData.map((post) => post.get({ 
    plain: true}));

    // aftter getting this post array back, we render 'all-posts-admin', and we want to grab the 'posts'.
    // Then we can catch error and if there is an error, we can redirect to login

    res.render('all-posts-admin', {
      layout: 'dashboard', posts,
    });
  } catch (err) {
    res.redirect('login')
  }
});

// Goal of this is to find a post in the database with a primary key value matching the id parameter passed in the URL path of the request. If it is found, the found post object is assigned to our postData constant. If not post is found, we can return it as null

// get path /edit and choose an id, use withAuth, async to make the request/res and using await, we make the req/res wait until we return the Post/ findbypk from sequelize library to retrieve a single instance of a model based on primary key.  

// req.param.id where id is parameter in the URl path of the request. By using findbypk, we try to find a post with a matching primary key value in the database.

router.get('/new', withAuth, (req, res) => {
  res.render('new-post', {
    layout: 'dashboard',
  });
});

// await is used for findbypk method to resolve before we assign the result to const postData

router.get('/edit/:id', withAuth, async(req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    if (postData) {
      const post = postData.get({ plain: true });
      
      res.render('edit-post', { layout: 'dashboard', post,
    });

    } else {
      res.status(404).end();
    } 
  } catch (err) {
    res.redirect('login');
  }
});


module.exports = router;