const mongoose = require("mongoose");
const Rutine = require("../models/Rutine");
const { dbUrl } = require("../config");
const exercise = require("../models/Exercise");

mongoose.connect("mongodb://localhost/NextFit");

const trainings = [
  new Training({
    repetition: 10,
    weight: 10,
    series: [],
    exercise: [{ type: Schema.Types.ObjectId, ref: "Exercise" }]
  }),

  new Training({
    repetition: 12,
    weight: 20,
    series: [],
    exercise: [{ type: Schema.Types.ObjectId, ref: "Exercise" }]
  }),
  new Training({
    repetition: 10,
    weight: 15,
    series: [],
    exercise: [{ type: Schema.Types.ObjectId, ref: "Exercise" }]
  })
];

Training.collection.drop();

training.create(training, (err, trainingCreated) => {
  if (err) {
    throw err;
  }
  trainingCreated.forEach(u => {
    console.log(`training added ${u.training}`);
  });
  -//cierra la conexion
  mongoose.connection.close();
});
