require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const crudRoutes = require('./routes/crud.js');

// create express app
const app = express();

// middleware logs information about each incoming request to the console
app.use(express.json());

// middleware cors before to define the routes
app.use(cors({
   origin: ['https://localhost:3000'],
   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
   credentials: true, // enable cross-origin resource sharing between the client and the server
}));


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
