//DEPENENCIES
require("dotenv").config();

// CONFIGURATION
const express = require("express");
const app = express();
const PORT = process.env.PORT;

// MIDDLEWARE
app.use(express.json());
// app.set("views", __dirname + "/views");
app.use("/places", require("./controllers/places"));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// ROUTES

// LANDING PAGE
app.get("/", (req, res) => {
  console.log("I am awake");
  res.render("home");
});

app.get("*", (req, res) => {
  res.render("error404");
});

// LISTEN
app.listen(PORT);
