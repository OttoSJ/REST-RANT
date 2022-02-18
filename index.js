//DEPENENCIES
require("dotenv").config();

// CONFIGURATION
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const methodOverride = require("method-override");

// MIDDLEWARE
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use("/places", require("./controllers/places"));
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//  ROUTES LANDING PAGE
app.get("/", (req, res) => {
  console.log("I am awake");
  res.render("home");
});

// WILDCARD ROUTES
app.get("*", (req, res) => {
  res.render("error404");
});

// LISTEN
app.listen(PORT);
