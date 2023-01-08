const router = require('express').Router();
const { SavedPost } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newSave = await SavedPost.create({
            post_id: req.body.post_id,
            user_id: req.body.user_id
        });
        res.status(200).json(newSave);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.post('/delete', async (req, res) => {
    try {
        const deleteSave = await SavedPost.destroy({
            where:{
            post_id: req.body.post_id,
            user_id: req.body.user_id
            }
        });
        res.status(200).json(deleteSave);
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;