const express = require("express");
const exerciseRoutes = express.Router();
const Exercise = require('../models/Exercise');
const moment = require("moment");

router.get('/', (req, res, next) => {
    .find({}, (err, dishes) => {
      if (err) { return res.json(err).status(500); }
  
      return res.json(dishes);
    });
});