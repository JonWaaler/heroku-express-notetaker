// npm run dev || npm run start
const express = require("express");
const router = express.Router();
const notes = require("../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// GET all notes route
router.get("/notes", (req, res) => {
  res.json(notes);
});

// Create new notes
router.post("/notes", (req, res) => {
  let _id = uuidv4();
  const { title, text } = req.body;

  let newNote = { id: _id, title: title, text: text };

  // Modify notes json
  notes.push(newNote);

  // send modified json
  res.json(notes);

  // string
  let str = JSON.stringify(notes);
  console.log(typeof str);

  // update database
  fs.writeFile("./db/db.json", str, function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
});

router.delete("/notes/:id", (req, res) => {
  let id = req.params.id;
  let note = notes.find((note) => note.id === req.params.id);
  delete note;
  // for (let i = 0; i < notes.length; i++) {
  //   if (notes[i].id == req.params.id) {
  //     delete notes[i];
  //   }
  // }
});

module.exports = router;
