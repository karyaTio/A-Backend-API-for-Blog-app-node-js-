const express = require("express");
const router = express.Router();

/*
 * GET  : /
 * desc : welcome
 */
router.get("/", function(req, res, next) {
  res.send("Welcome");
});

module.exports = router;
