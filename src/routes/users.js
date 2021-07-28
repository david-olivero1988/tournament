const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.get('/', async (req, res) => {
    const users = await User.find();
    console.log(users);
    res.json(users);
});

router.post('/', async (req, res) => {
    const user = new User(req.body);
    // console.log(new User());
    console.log(user);
    await user.save();
    res.json({
        status: 'User saved'
    });

});

router.put('/:id', async (req, res) => {

    await User.findByIdAndUpdate(req.params.id, req.body);

    res.json({
        status: 'User updated'
    });
})

router.delete('/:id', async (req, res) => {

    await User.findByIdAndDelete(req.params.id);

    res.json({
        status: 'User deleted'
    });
})

module.exports = router;