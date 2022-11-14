const router = require('express').Router();
const User = require('../models/User');

// REGISTER USER
router.get('/register', async (req, res) => {

    const user = await new User({
        username: 'john2',
        password: 'password'
    });
    await user.save();
    res.send(`${user}`);
});

module.exports = router;