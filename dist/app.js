"use strict";
const express = require('express');
const { Express } = require('express');
require('dotenv').config();
const connectDB = require('./src/config/config');
const ejs = require('ejs');
const path = require('path');
// Declaring Ports
const port = process.env.PORT || 3000;
// Using Express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));
// Connecting the database 
connectDB();
// Using and Fetching Paths 
app.get("/", (req, res) => {
    res.render('/Login/login.view');
});
// Listening to the port
app.listen(port, () => {
    console.log("App is listening on " + port);
});
