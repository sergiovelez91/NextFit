const express = require("express");
const router = express.Router();
const Training = require("../models/Training");

//CREATE

router.post("/new", (req, res, next) => {
  console.log(req.body)
  const training = new Training({
    repetition: req.body.repetition,
    weight: req.body.weight,
    series: req.body.series,
    exercise: req.body.exercise,
    
  });
  console.log(training)
  training.save()
    .then(savedTraining => {
      res.status(200).json(savedTraining);
    })
    .catch(err => res.status(500).json(err));
});

//UPDATE

router.put("/edit/:id", (req,res,next) => {
    const { repetition, weight, series, exercise } = req.body;
    Training.findByIdAndUpdate(req.params.id,{ repetition, weight, series, exercise },{new:true })
    //Esto necesita: id,{objeto que tiene las actualizaciones}, {opciones}
    .then(updateOneTraining => {res.status(200).json(updateOneTraining)})
    .catch(err => res.status(500).json(err))
});

//RETRIEVE

router.get("/", (req, res, next) => {
  Training.find()
    .then(findTraining => {
      res.status(200).json(findTraining);
    })
    .catch(err => res.status(500).json(err));Loading
});

router.get("/:id", (req, res, next) => {
  console.log("TRAINING");
  const parametro = req.params.id;
  Training.findById({ _id: parametro })
    .then(findOneTraining => {
      res.status(200).json(findOneTraining);
    })
    .catch(err => res.status(500).json(err));
});

//DELETE

router.get("/delete/:id", (req, res, next) => {
  const { repetition, weight, series, exercise } = req.body;
  Training.deleteOne({ _id: req.params.id })
    .then(deleteTraining => {
      console.log(deleteOneTraining);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
