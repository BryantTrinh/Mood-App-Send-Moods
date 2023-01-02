const router = require('express').Router();
const { Comment } = require('../../models');

const withAuth = require('../../utils/auth');

// GET route for all comments just to test endpoint
router.get('/', async (req, res) => {
  try {
    const dbCommentData = await Comment.findAll();
    res.json(dbCommentData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// POST route for '/api/comment'
router.post('/', withAuth, async (req, res) => {
  console.log('starting POST route for new comment');
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id
    });

    req.status(200).json(newComment);

  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
