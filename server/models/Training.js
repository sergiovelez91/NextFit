const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const User = require('../models/User');
const Exercise = require('../models/Exercise');

const trainingSchema = new Schema({
  repetition: Number,
  weight: Number,
  series: [],
  exercise: [{type:Schema.Types.ObjectId,ref:"Exercise"}],
  
});

const Training = mongoose.model("Training", trainingSchema);

module.exports = Training;