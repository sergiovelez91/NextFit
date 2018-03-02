const express = require("express");
const router= express.Router();
const Exercise = require('../models/Exercise');

//CREATE

router.post("/new", (req, res, next) =>{
    const {name, description, muscle,image,material} = req.body;
    const exercise = new Exercise({name, description, muscle,image,material});
    exercise.save()
      .then(savedExercise => {res.status(200).json(savedExercise)})
      .catch(err => res.status(500).json(err));
  });
  
  
  //UPDATE
  
  router.put("/edit/:id", (req,res,next) => {
      const {name, description, muscle,image,material} = req.body;
      Exercise.updateOne({_id:req.params.id})
      .then(updateOneExercise => {res.status(200).json(updateOneExercise)})
      .catch(err => res.status(500).json(err))
  });
  
  //RETRIEVE
  
  router.get("/", (req, res, next) => {
      Exercise.find()
      .then(findExercise => {res.status(200).json(findExercise)})
      .catch(err => res.status(500).json(err))
  });
  
  router.get("/:id", (req, res, next) => {
      console.log("Exercise")
      const parametro = req.params.id;
      Exercise.findById({_id:parametro})
      .then(findOneExercise => {res.status(200).json(findOneExercise)})
      .catch(err=> res.status(500).json(err))
  });
  
  
  //DELETE
  
  router.get("/delete/:id", (req,res,next) => {
      const {name, description, muscle,image,material} = req.body;
      Exercise.deleteOne({_id:req.params.id})
      .then(deleteExercise => {console.log(deleteOneExercise)})
      .catch(err => res.status(500).json(err))
  });

  module.exports = router;