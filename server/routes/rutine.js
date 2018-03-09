const express = require("express");
const router = express.Router();
const Rutine = require("../models/Rutine");

//CREATE

router.post("/new", (req, res, next) => {
  const {name, training} = req.body;
  const rutine = new Rutine({ name, training});
  rutine.save()
    .then(savedRutine => {res.status(200).json(savedRutine)})
    .catch(err => res.status(500).json(err));
});


//UPDATE

router.put("/edit/:id", (req,res,next) => {
    const {name, training} = req.body;
    console.log(req.body)
    
    Rutine.findByIdAndUpdate(req.params.id,{name, training},{new:true })
    .then(updateOneRutine => {res.status(200).json(updateOneRutine)})
    // .then(updateOneRutine => {console.log(updateOneRutine)})
    .catch(err => res.status(500).json(err))
});

//RETRIEVE

router.get("/", (req, res, next) => {
    Rutine.find()
    .populate('training')
    .then(findRutine => {res.status(200).json(findRutine)})
    .catch(err => res.status(500).json(err))
});

router.get("/:id", (req, res, next) => {
    console.log("RUTINA")
    const parametro = req.params.id;
    Rutine.findById({_id:parametro})
    .then(findOneRutine => {res.status(200).json(findOneRutine)})
    .catch(err=> res.status(500).json(err))
});


//DELETE

router.get("/delete/:id", (req,res,next) => {
    const {name, training} = req.body;
    Rutine.deleteOne({_id:req.params.id})
    .then(deleteRutine => {console.log(deleteOneRutine)})
    .catch(err => res.status(500).json(err))
});

module.exports = router;
