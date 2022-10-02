const express = require("express");

const router = express.Router();

router.get("/new", (req, res, next) => {
  res.json("This is basic request");
});

module.exports = router;
