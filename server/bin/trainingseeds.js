const mongoose = require("mongoose");
const Rutine = require("../models/Rutine");
const { dbUrl } = require("../config");
const Exercise = require("../models/Exercise");
const Training = require("../models/Training");
const Schema   = mongoose.Schema;

mongoose.connect("mongodb://localhost/NextFit");

const trainings = [
  new Training({
    repetition: 10,
    weight: 10,
    series: [],
    // exercise: [{ type: Schema.Types.ObjectId, ref: "Exercise" }]
  }),

  new Training({
    repetition: 12,
    weight: 20,
    series: [],
    // exercise: [{ type: Schema.Types.ObjectId, ref: "Exercise" }]
  }),
  new Training({
    repetition: 10,
    weight: 15,
    series: [],
    // exercise: [{ type: Schema.Types.ObjectId, ref: "Exercise" }]
  })
];

Training.collection.drop();

Training.create(trainings, (err, trainingCreated) => {
  if (err) {
    throw err;
  }
  trainingCreated.forEach(u => {
    console.log(`training added ${u.training}`);
    
    Rutine.update(
        { "_id" : "5a96be3ee4f9bf3d8a915e64" }, 
        {$push: {"trainingOwner" : u._id }},{new : true}
    ).then(u => console.log(u));
    
  });
  -//cierra la conexion
  mongoose.connection.close();
});
