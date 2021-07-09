const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

router.get("/", (req, res) => {
  console.log(req.auth);
  res.json(User.findAll());
});

router.post("/", (req, res) => {
  console.log(req.body);
  User.createNewUser(req.body)
  res.json("Post response");
});

router.put("/", (req, res) => {
  res.json("Put response");
});

router.delete("/", (req, res) => {
  console.log(req.headers.authorization);
  res.json("Delete response");
});

module.exports = router;
