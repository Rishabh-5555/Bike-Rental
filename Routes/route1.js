const express = require("express");

const router = express.Router();

router.get("/new", (req, res, next) => {
  res.json("This is basic request");
});

router.post("/new", (req, res, next) => {
 console.log(req.body);
});

module.exports = router;
