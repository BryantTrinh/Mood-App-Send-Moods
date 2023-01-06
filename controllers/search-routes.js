const router = require('express').Router();
const { Post, User, Emoji } = require('../models');
const withAuth = require('../utils/auth');


router.get('/:emojiId', withAuth, (req, res) => {

  try {

  const emojiId = req.params.emojiId;

    Post.findAll({
      where: {
        emoji_id: emojiId,
      },
      include: [
        User,
        {
        model: Emoji,
        through: PostEmoji,
        },
    ],
  }).then(posts => {
    // post.toJSON create new array that will contain plain javascript object that represents each element in the posts array.
    res.send(posts.map(post => post.toJSON()));
  }).catch(err => {
    res.status(500).send('Error searching for posts containing those emojis');
  });
} catch (error) {
  console.error(error);
  res.status(500).send('Error searching for posts containing those emojis')
}
});

module.exports = router;