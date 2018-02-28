const mongoose = require("mongoose");
const Rutine = require("../models/Rutine");
const { dbUrl } = require("../config");
const User = require("../models/User");

mongoose.connect("mongodb://localhost/NextFit");

const exercise = [
  new Exercise({
    name: "Press Sentado con Mancuernas",
    description:
      "sosteniendo una mancuerna en cada mano asi como se observa a su izquierda.Eleve cada una de las mancuernas hasta que cada una de ellas se topen por arriba de su cabeza.Descienda las mancuernas hasta la posición inicial.",
    muscle: "Hombro",
    image:
      "http://www.gimnasiototal.com/animaciones/ejercicios-de-hombros-1.gif",
    material: {
      enum: ["Mancuerna"]   
    }
  }),
  new Exercise({
    name: "Elevación de Hombros con Mancuernas",
    description:
      "De pie, sostenga una mancuerna en cada mano.Encoja sus hombros, lo cual producira una elevación de los mismos. Luego descienda los hombros. Es uno de los ejercicios de hombros para entrenar al mismo tiempo tanto la región anterior como posterior de los mismos.",
    muscle: "Hombro",
    image: "http://www.gimnasiototal.com/animaciones/elevacion-de-hombros.gif",
    material: {
      enum: ["Mancuernas"]
    }
  }),

  new Exercise({
    name: "Ovalo con Mancuernas",
    description:
      "Acostado en una banca plana. Sostenga una mancuerna en cada mano por arriba de su cabeza.Realice un movimento en óvalo con las mancuerrnas, sin doblar los brazos o solo con ligera flexión de los mismos.Este es uno de los ejercicios de hombros más completos.",
    muscle: "Hombro",
    image:
      "http://www.gimnasiototal.com/animaciones/ejercicios-de-hombros-5.gif",
    material: {
      enum: ["Mancuernas"]
    }
  })
];

Exercise.collection.drop();

Exercise.create(exercise, (err, exerciseCreated) => {
  if (err) {
    throw err;
  }
  exerciseCreated.forEach(u => {
    console.log(`exercise added ${u.exercise}`);
  });
  -//cierra la conexion
  mongoose.connection.close();
});
