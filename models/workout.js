const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => newDate(),
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
    toJSON: {
      virtuals: true,
    },
  }
);

// PersonSchema
// .virtual('name.full')
// .get(function () {
//   return this.name.first + ' ' + this.name.last;
// })

WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
