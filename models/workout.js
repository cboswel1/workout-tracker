const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Exercise type",
        },
        name: {
          type: String,
          trim: true,
          required: "Exercise name",
        },
        duration: {
          type: Number,
          trim: true,
        },
        distance: {
          type: Number,
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
      },
    ],
  },
  {
    //virtual properties upon request
    toJSON: {
      virtuals: true,
    },
  }
);

// custom setter for virtual. Solved Duration undefined issue
WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
