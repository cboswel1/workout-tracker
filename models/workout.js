const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const WorkoutSchema = new Schema ({
    day: {
        type: Date, 
        default: () => newDate()
    }, 
    exercises: [
        {
            type: {
                type: String,
                trim: true, 
                required: "Exercise type"
            }, 
            name: {
                type: String, 
                trim: true, 
                required: "Exercise name"
            }, 
            duration: {
                type: Number, 
                required: "Duration of exercise in minutes"
            }, 
            distance: {
                type: Number
            },
            weight: {
                type: Number 
            }, 
            reps: {
                type: Number 
            }, 
            sets: {
                type: Number 
            }
        }
    ]
});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout; 