// TO BE TRASHED
const router = require('express').Router();
const { Mood } = require('../../models');

const withAuth = require('../../utils/auth');

// POST selected mood (emoji) to mysql
router.post('/', async (req, res) => {
  console.log('starting POST route for selected emojis');
  try {
    const newMood = await Mood.create({
      ...req.body,
      user_id: req.session.user_id
    });

    req.status(200).json(newMood);

  } catch (error) {
    res.status(500).json(error);
  }
});

// GET route for testing API endpoint
router.get('/', async (req, res) => {
  try {
    const dbMoodData = await Mood.findAll();
    res.json(dbMoodData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
