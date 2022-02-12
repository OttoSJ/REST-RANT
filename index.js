require("dotenv").config();

const express = require("express");

const app = express();

const authRoutes = require("./components/places");

// const main = require(".component/main");

app.get("/", (req, res) => {
  console.log("I am awake");
  res.send("Home Page");
});

app.use("/", authRoutes);

app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

app.listen(process.env.PORT);
