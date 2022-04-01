const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeacherRatingSchema = new Schema({
  term: {
    type: text,
    required: true,
  },
  comment: {
    type: text,
    required: true,
  },
  topic: {
    type: text,
    required: true,
  },
  courseId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: false,
    },
  ],
  teacherId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Teacher",
      required: false,
    },
  ],
});

const TeacRating = mongoose.model("TeacherRating", TeacherRatingSchema);

module.exports = TeacRating;
