const express = require("express");
const router = express.Router();                        
const User = require('../models/User');
//CREATE

router.post("/new", (req, res, next) =>{
    const {name, username, password, rutine, eventOwner, eventGuess} = req.body;
    const user = new User({ rname, username, password, rutine, eventOwner, eventGuess});
    user.save()
      .then(savedUser => {res.status(200).json(savedUser)})
      .catch(err => res.status(500).json(err));
  });
  
  
  //UPDATE
  
  router.put("/edit/:id", (req,res,next) => {
      const {name, username, password, rutine, eventOwner, eventGuess} = req.body;
      User.updateOne({_id:req.params.id})
      .then(updateOneUser => {res.status(200).json(updateOneUser)})
      .catch(err => res.status(500).json(err))
  });
  
  //RETRIEVE
  
  router.get("/", (req, res, next) => {
      User.find()
      .then(findUser => {res.status(200).json(findUser)})
      .catch(err => res.status(500).json(err))
  });
  
  router.get("/:id", (req, res, next) => {
      console.log("User")
      const parametro = req.params.id;
      User.findById({_id:parametro})
      .then(findOneUser => {res.status(200).json(findOneUser)})
      .catch(err=> res.status(500).json(err))
  });
  
  
  //DELETE
  
  router.get("/delete/:id", (req,res,next) => {
      const {name, username, password, rutine, eventOwner, eventGuess} = req.body;
      User.deleteOne({_id:req.params.id})
      .then(deleteUser => {console.log(deleteOneUser)})
      .catch(err => res.status(500).json(err))
  });

  module.exports = router;