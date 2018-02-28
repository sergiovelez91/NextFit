const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    name: String,
    description: String,
    muscle: String,
    image: String,
    material: {
        enum: ["Cuerda", "Mancuernas", "Goma", "Esterilla", "Balón", "Medicinal", "Fitball"]
    }
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

const Exercise = mongoose.model("Excercise", exerciseSchema);

module.exports = Exercise;
