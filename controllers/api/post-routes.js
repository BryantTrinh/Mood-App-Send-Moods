// // Finished
// const router = require('express').Router();

// const { Post } = require('../../models/');

// const withAuth = require('../../utils/auth'); 

// router.post('/', withAuth, async (req, res) => {
//   const body = req.body;

//   try {
//     const newPost = await Post.create({
//       ...body, userId.req.sessionUserId });
//       res.json(newPost);
//     } catch (err) {
//       res.status(500).json(err);
//     }
// });

// router.put('/:id', withAuth, async (req, res) => {
//   try {
//     const [affectedRows] = await Post.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
  
//     // affectedRows used for handlebars

//     if (affectedRows > 0) {
//     res.status(200).end();
//   } else {
//     res.status(404).end();
//   }
// } catch (err) {
//   res.status(500).json(err);
// }
// });

// // destroy method on router.delete

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const [affectedRows] = Post.destory({
//       where: {
//         id: req.params.id,
//       },
//     });

//     if (affectedRows > 0) {
//       res.status(200).end();
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

const router = require('express').Router();
const { Post } = require('../../models');

const withAuth = require('../../utils/auth');

// CREATE new post
router.post('/', withAuth, async (req, res) => {
  console.log('starting POST route for new post');
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id
    });

    req.status(200).json(newPost);

  } catch (error) {
    res.status(500).json(error);
  }
});

// PUT route for updating post
router.put('/:id', withAuth, async (req, res) => {
  try {
    console.log('starting PUT route for editing post');
    // array destructuring
    const [affectedRows] = await Post.update(req.body, {
      where: { id: req.params.id },
    });

    if (affectedRows > 0) {
      res.json(affectedRows);
      res.status(200).end();
    } else {
      res.status(404).end();
    };

  } catch (error) {
    res.status(500).json(error);
  }
})

// DELETE post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    console.log('starting DELETE post route');
    // array destructuring
    const [affectedRows] = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.json(affectedRows);
      res.status(200).end();
    } else {
      res.status(404).end();
    };

  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports = router;


module.exports = router;