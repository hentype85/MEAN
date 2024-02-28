const mongoose = require('mongoose');

// create schema
const userSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true},
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

// create model based on the schema
module.exports = mongoose.model('User', userSchema);

// now user is a model that represents the collection of users in the database