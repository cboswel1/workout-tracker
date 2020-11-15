const express = require("express"); 
const router = express.Router(); 
const Workout = require("../models/workout.js");


//GET workouts find();
router.get("/api/workouts", (req, res) => {
    Workout.find() 
    .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
}); 

//POST workouts create();
router.get("/api/workouts", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
}); 

//GET range .find();

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}) 
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
}); 

module.exports = router;