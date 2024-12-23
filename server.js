// Here is where we import modules
// We begin by loading Express
const express = require('express');
const morgan = require('morgan')
require('dotenv').config()
require('./config/database')
const mongoose = require('mongoose')
const app = express();

app.listen(3001, () => {
  console.log('Listening on port 3000');
});




// server.js

// GET /
app.get("/", async (req, res) => {
    res.send("hello, friend!");
  });

  // server.js

// GET /
app.get("/", async (req, res) => {
    res.render("index.ejs");
  });



  


// server.js



mongoose.connect(process.env.MONGODB_URI);
// log connection status to terminal on start
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});



// Import the Fruit model
const Fruit = require("./models/fruit.js");

  
  