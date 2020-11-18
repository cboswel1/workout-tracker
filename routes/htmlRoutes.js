//connecting our html routes from the index

const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise"));
});

router.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats"));
});

module.exports = router;
