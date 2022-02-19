//DEPENENCIES
require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");

// CONFIGURATION
const app = express();
const PORT = process.env.PORT || 3000;

// VIEW ENGINE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
// This app.engine will not be necessary in React.
app.engine("jsx", require("express-react-views").createEngine());

// MIDDLEWARE
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use("/places", require("./controllers/places"));

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
