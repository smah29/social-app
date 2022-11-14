const router = require('express').Router();
const User = require('../models/User');

// REGISTER USER
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        password: req.body.password
    });
    try {
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;