const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseRatingSchema = new Schema({
  score: {
    type: number,
    required: true,
  },
  courseId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: false,
    },
  ],
});

const CoRating = mongoose.model("CourseRating", CourseRatingSchema);

module.exports = CoRating;
