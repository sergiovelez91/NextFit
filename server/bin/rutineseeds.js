const mongoose = require("mongoose");
const Rutine = require("../models/Rutine");
const { dbUrl } = require("../config");
const User = require("../models/User");
const Training = require('../models/Training');

mongoose.connect("mongodb://localhost/NextFit");

const rutines = [
  new Rutine({
    name: "Día de hombro",
    training: [],
    owner_id: "5a955f0136becf26eb93b1ba"
  }),
  new Rutine({
    name: "Día de dorsal",
    training: [],
    owner_id: "5a955f0136becf26eb93b1b9"
  }),

  new Rutine({
    name: "Día de pecho",
    training: [],
    owner_id: "5a955f0136becf26eb93b1bb"
  })
];

Rutine.collection.drop();

Rutine.create(rutines, (err, rutineCreated) => {
  if (err) {
    throw err;
  }
  rutineCreated.forEach(u => {
    console.log(`rutine added ${u.rutine}`);
  });

  User.update(
    { "_id" : "5a96a1c6da644d298c6d78bf" }, 
    {$push: {"rutineOwner" : u._id }},{new : true}
).then(u => console.log(u));

  -//cierra la conexion
  mongoose.connection.close();
});
