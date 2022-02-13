//DEPENENCIES
require("dotenv").config();

// CONFIGURATION
const express = require("express");
const app = express();
const PORT = process.env.PORT;

// MIDDLEWARE
app.use("/places", require("./controllers/places"));

// ROUTES AND LANDING PAGE
app.get("/", (req, res) => {
  console.log("I am awake");
  res.send("Home Page");
});

app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

// LISTEN
app.listen(PORT);
