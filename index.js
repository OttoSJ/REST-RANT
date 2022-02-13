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

// ROUTES AND LANDING PAGE
app.get("/", (req, res) => {
  console.log("I am awake");
  res.render("home");
});

app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

// LISTEN
app.listen(PORT);
