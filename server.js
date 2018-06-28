const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

// Load route

// Start App
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").databaseURI;

// Connect do Mongo
mongoose
    .connect(db)
    .then(() => console.log("Mongo Connected"))
    .catch(err => console.log(err));

/* // Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport); */

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));