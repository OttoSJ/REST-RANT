// DENPENDENCIES
const express = require("express");

// CONFIGURATION
const places = require("../models/places");
const router = express.Router();
const db = require("../models");

// GET PLACES
router.get("/", (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render("places/index", { places });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

// POST/CREATE ROUTE
router.post("/", (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      if (err && err.name == "ValidationError") {
        let message = "Validation Error:";
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `;
          message += `${err.errors[field].message}`;
        }
        console.log("Validation error message", message);
        res.render("places/new", { message });
      }
      console.log("err", err);
      res.render("error404");
    });
});

// ADD PLACES ROUTE
router.get("/new", (req, res) => {
  res.render("places/new");
});

// SHOW PLACE ROUTE
router.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
    .populate("comments")
    .then((place) => {
      res.render("places/show", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

//  UPDATE ROUTE
router.put("/:id", (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    () => {
      res.redirect(`/places/${req.params.id}`);
    }
  );
});

// DELETE ROUTE
router.delete("/:id", (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
    .then((place) => {
      res.redirect("/places");
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

// EDIT ROUTE
router.get("/:id/edit", (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      res.render("places/edit", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

// COMMENT ROUTE
router.post("/:id/comment", (req, res) => {
  console.log(req.body);
  db.Place.findById(req.params.id)
    .then((place) => {
      db.Comment.create(req.body)
        .then((comment) => {
          place.comments.push(comment.id);
          place.save().then(() => {
            res.redirect(`/places/${req.params.id}`);
          });
        })
        .catch((err) => {
          res.render("error404");
        });
    })
    .catch((err) => {
      res.render("error404");
    });
});
// req.body.rant = req.body.rant ? true : false;

router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET places/:id/rant/:rantId stub");
});

module.exports = router;
