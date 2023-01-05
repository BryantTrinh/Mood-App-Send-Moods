const router = require('express').Router();
const { Post, User, Emoji } = require('../../models');
const PostEmoji = require('../../models/PostEmoji');

const withAuth = require('../../utils/auth');

// CREATE new post (put withAuth back later)
router.post('/', withAuth, async (req, res) => {
  console.log('starting POST route for new post');
  console.log('>>> req.body: ', req.body); // not logging

  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id
    });
    // turn selected_moods string into array (e.g. '1,2' => ['1', '2'])
    let postEmojiIdArr = req.body.selected_moods.split(',');
    // map over the array to turn every element into a key-value pair
    // to store in post_emoji table
    postEmojiIdArr = await postEmojiIdArr.map(id => ({
      post_id: parseInt(newPost.id),
      emoji_id: parseInt(id),
    }))
    console.log(postEmojiIdArr);
    const postEmojiPairs = await PostEmoji.bulkCreate(postEmojiIdArr);
    res.status(200).json(postEmojiPairs);

  } catch (error) {
    console.log(error);
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
