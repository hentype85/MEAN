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
        res.status(500).json({ msg: error });
    }
});


// GET a single user
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findOne({id: req.params.id});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
});


// POST a new user
router.post('/', async (req, res)=> {
    try {
        const existingUser = await User.findOne({ id: req.body.id });
        if (existingUser) {
             return res.status(409).json({ msg: 'ID already exists' });
        }

        const user = await User.create({
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        });

        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ msg: error });
    }
});


// DELETE a user
router.delete('/:id', async (req, res) => {
    try {
        const deleteUser = await User.findOneAndDelete({id: req.params.id});
        if (!deleteUser) {
            return res.status(404).json({ msg: 'ID not found' });
        }
    
        res.status(200).json(deleteUser);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
});


// PUT a user
router.put('/:id', async (req, res) => {
    try {
        const user = {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        };

        const updatedUser = await User.findOneAndUpdate({ id: req.params.id }, user, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ msg: 'ID not found' });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}); 


module.exports = router;