const express = require('express');
const router = express.Router();

// import the user model
const User = require('../models/user');



// GET all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find().find({}).sort({createdAt: -1});
        res.status(200).json(users); 
    } catch (error) {
        console.error(err);
        res.status(500).json({ message: err });
    }
});


// GET a single user
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single user.'});
});


// POST a new user
router.post('/', async (req, res)=> {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        });
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err });
    }
});


// DELETE a user
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a user.'});
});


// PUT a user
router.put('/:id', (req, res) => {
    res.json({mssg: 'PUT a user.'});
}); 


module.exports = router;