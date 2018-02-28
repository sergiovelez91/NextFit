const mongoose = require("mongoose");
const Rutine = require("../models/Rutine");
const { dbUrl } = require("../config");
const User = require("../models/User");

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
  -//cierra la conexion
  mongoose.connection.close();
});
