// npm run dev || npm run start
const express = require("express");
const router = express.Router();
const notes = require("../db/db.json");

// GET all notes route
router.get("/", (req, res) => {
  res.json(notes);
});

// GET a single note
router.get("/:id", (req, res) => {
  // Check if request is valid and send response
  if (notes[req.params.id] == "undefined") {
    res.status(500).send({ error: "Something failed!" });
  } else {
    res.json(notes[req.params.id]);
  }
});

// Create new notes
router.post("/", (req, res) => {
  console.log("body:" + req.body);
  res.send({
    title: "Test ",
    text: "Test ",
  });
});

module.exports = router;
