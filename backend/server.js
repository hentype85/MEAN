require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const crudRoutes = require('./routes/crud.js');

// create express app
const app = express();

// middleware logs information about each incoming request to the console
app.use(express.json());

// use the routes from routes/crud.js
app.use('/api/crud', crudRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.log('Connection failed -', err);
    });
    
// listen for request
app.listen(process.env.PORT, () => {
    console.log('Server is listening on port', process.env.PORT)
});
