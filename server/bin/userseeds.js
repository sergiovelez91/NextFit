const mongoose = require("mongoose");
const User = require("../models/User");
const { dbUrl } = require("../config");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const salt = bcrypt.genSaltSync(bcryptSalt);

mongoose.connect("mongodb://localhost/NextFit");

const users = [
  new User({
    name: "Mortadelo",
    username: "Pepe",
    password: bcrypt.hashSync("pepe", salt),
    rutine: [],
    eventOwner: [],
    eventGuess: []
  }),

  new User({
    name: "Filemon",
    username: "pepi",
    password: bcrypt.hashSync("pepi", salt),
    eventOwner: [],
    eventGuess: []
  }),

  new User({
    name: "Rompetechos",
    username: "pepo",
    password: bcrypt.hashSync("pepo", salt),
    eventOwner: [],
    eventGuess: []
  })
];

User.collection.drop();

User.create(users, (err, userCreated) => {
  if (err) {
    throw err;
  }
  userCreated.forEach(u => {
    console.log(`user added ${u.username}`);
  });
  -//cierra la conexion
  mongoose.connection.close();
});
