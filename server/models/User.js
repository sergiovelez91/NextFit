const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const userSchema = new Schema({
    name: String,
    username: String,
    password: String,
    rutine: [{type:Schema.Types.ObjectId,ref:"Rutine"}],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model('User', userSchema);
module.exports = User;