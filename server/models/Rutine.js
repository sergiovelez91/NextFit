const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const Training = require('../models/Training');
const User = require('../models/User');

const rutineSchema = new Schema(
  { name: String,
    traning: [{type:Schema.Types.ObjectId,ref:"Training"}],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Rutine= mongoose.model('Rutine', rutineSchema);
module.exports = Rutine;