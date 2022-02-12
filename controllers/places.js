const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Get login");
  res.send("GET places");
});

module.exports = router;
