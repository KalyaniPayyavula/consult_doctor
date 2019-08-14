var express = require("express");
var router = express.Router();
var payload = require("../models/app");

/* GET users listing. */
router.get("/", function(req, res, next) {
  try {
    return res.json(payload);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
